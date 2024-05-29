
--USE [SupplyDemandAnalysis]
--GO
--/****** Object:  StoredProcedure [dbo].[allsummary]    Script Date: 04/14/2014 00:51:58 ******/
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
CREATE procedure [dbo].[allsummary](@Region nvarchar(50))
--declare  @Region nvarchar(50)=' All'
AS
BEGIN

create table #temp(SuiteInfo varchar(50),region varchar(255),market varchar(255),kw float)
insert into #temp 
select  'ACurrent Supply Available' as SuiteInfo,isnull(sc.Region,s.Region),isnull(sc.market,s.Market),
(SUM(isnull([IT Load (kW)],0))+ SUM(isnull(kWofUPS,0))) KW
from dbo.SupplyCompetitor sc full join Supply s on sc.[Suite Condition]=s.SuiteCondition
where sc.market!='' and [Suite Condition]='Market Ready' and
 ((CASE WHEN @Region <>' ALL' AND sc.Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by isnull(sc.Region,s.Region),isnull(sc.market,s.Market)
union
select  'BNew Construction' as SuiteInfo,isnull(sc.Region,s.Region),isnull(sc.market,s.Market),
(SUM(isnull([IT Load (kW)],0))+ SUM(isnull(kWofUPS,0))) KW
from dbo.SupplyCompetitor sc full join Supply s on sc.[Suite Condition]=s.SuiteCondition
where sc.market!='' and [Suite Condition]='Under Construction' and
 ((CASE WHEN @Region <>' ALL' AND sc.Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by  isnull(sc.Region,s.Region),isnull(sc.market,s.Market)
union
select 'DTotal Demand' Suite,region,market,SUM(TotalkW) KW
from dbo.Demand
where  ((CASE WHEN @Region <>' ALL' AND Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by market,region
union
select  'GMarket Planned' SuiteInfo,sc.region,sc.market,
(SUM([IT Load (kW)])+ SUM(kWofUPS)) KW
from dbo.SupplyCompetitor sc join Supply s on sc.[Suite Condition]=s.SuiteCondition
where sc.market!=''  and 
[Suite Condition] in ('Shell','Planned','Available Shell','Planned Shell') and
 ((CASE WHEN @Region <>' ALL' AND sc.Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
 group by  sc.market,sc.region
 union
 select 'FDigital Supply' as SuiteInfo,region,market,SUM(kWofUPS) KW
 from dbo.Supply 
--join
--dbo.Property on Supply.PropertyCode=Property.PropertyCode
where market!='' and [SuiteCondition] in ('Market Ready','Under Construction') and
  ((CASE WHEN @Region <>' ALL' AND Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)      
group by  market,region
union
select  'CTotal Supply' as SuiteInfo,isnull(sc.Region,s.Region),isnull(sc.market,s.Market),
(SUM(isnull([IT Load (kW)],0))+ SUM (isnull(kWofUPS,0))) KW
from dbo.SupplyCompetitor SC FULL JOIN Supply S ON SC.[Suite Condition]=S.SuiteCondition
where SC.market!='' and [Suite Condition] in ('Market Ready','Under Construction') and
 ((CASE WHEN @Region <>' ALL' AND SC.Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by  isnull(sc.Region,s.Region),isnull(sc.market,s.Market)
--union
--select 'ECurrent Surplus/(Shortfall)' as suiteInfo,s.Region,s.Market,
--sum(case when s.[Suite Condition] in ('Market Ready','Under Construction')
-- then ([IT Load (kW)]) end)-
--SUM(TotalkW) kw
--from dbo.SupplyCompetitor s join Demand d on s.Market=d.Market
--where ((CASE WHEN @Region <>' ALL' AND s.Region=@Region THEN 1
--        WHEN @Region =' ALL' THEN 1 END)=1)
--group by  s.market,s.region

 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='ACurrent Supply Available')
 BEGIN
 INSERT INTO #temp VALUES('ACurrent Supply Available',@Region,'',0)  
 END
 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='BNew Construction')
 BEGIN
 INSERT INTO #temp VALUES('BNew Construction',@Region,'',0)  
 END
 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='CTotal Supply')
 BEGIN
 INSERT INTO #temp VALUES('CTotal Supply',@Region,'',0)  
 END
 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='DTotal Demand')
 BEGIN
 INSERT INTO #temp VALUES('DTotal Demand',@Region,'',0)  
 END
 --IF not exists(SELECT * FROM #temp WHERE SuiteInfo='ECurrent Surplus/(Shortfall)')
 --BEGIN
 --INSERT INTO #temp VALUES('ECurrent Surplus/(Shortfall)',@Region,'',0)  
 --END
 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='FDigital Supply')
 BEGIN
 INSERT INTO #temp VALUES('FDigital Supply',@Region,'',0)  
 END
 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='GMarket Planned')
 BEGIN
 INSERT INTO #temp VALUES('GMarket Planned',@Region,'',0)  
 END
 --insert into #temp
select  'CTotal Supply' as SuiteInfo,SC.Region,SC.market,
(SUM([IT Load (kW)])+ SUM(kWofUPS)) KW into #supply
from dbo.SupplyCompetitor SC JOIN Supply S ON SC.[Suite Condition]=S.SuiteCondition
where SC.market!='' and [Suite Condition] in ('Market Ready','Under Construction') and
 ((CASE WHEN @Region <>' ALL' AND SC.Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by  SC.market,SC.region

select 'DTotal Demand' Suite,region,market,SUM(TotalkW) KW into #demand
from dbo.Demand
where  ((CASE WHEN @Region <>' ALL' AND Region=@Region THEN 1
        WHEN @Region =' ALL' THEN 1 END)=1)
group by market,region

 
insert into #temp
select 'ECurrent Surplus/(Shortfall)' as suiteinfo, isnull(d.Region,s.region) Region, isnull(d.Market,s.market) Market,
isnull(sum(s.kw),0)-isnull(SUM(d.kw),0) as kw from #supply s full join #demand d on s.region=d.region
and s.market=d.market
group by isnull(d.Region,s.region), isnull(d.Market,s.market)

 IF not exists(SELECT * FROM #temp WHERE SuiteInfo='ECurrent Surplus/(Shortfall)')
 BEGIN
 INSERT INTO #temp VALUES('ECurrent Surplus/(Shortfall)',@Region,'',0)  
 END

 if @Region=' All'
 begin
 insert into #temp
 select suiteinfo,'ETotal US','',SUM(kw) from #temp where region in ('East','West','Central')
 group by suiteinfo
 end
 
 select SuiteInfo,(case when region='Europe' then 'Europe' 
                        when region='West' then ' West' 
                        when region='APAC' then ' APAC' else region end) Region,market,kw from #temp
 where region is not null

 drop table #temp,#supply,#demand
end