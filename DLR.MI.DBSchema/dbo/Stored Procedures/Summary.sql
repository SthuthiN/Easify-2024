CREATE PROCEDURE [dbo].[Summary](@QuarterID INT)
AS
BEGIN
CREATE TABLE #temp(region          NVARCHAR(50),
                   market          NVARCHAR(50),
                   Currentsupply   FLOAT,
                   NewConstruction FLOAT,
				   NewSublease     FLOAT,
                   TotalSupply     FLOAT,
                   TotalDemand     FLOAT,
                   QuarterId       INT)
INSERT INTO #temp
SELECT sc.Region,sc.market,
sum(CASE WHEN sc.[Suite Condition]='Market Ready' THEN isnull([IT Load (kW)],0) END) Currentsupply,
sum(CASE WHEN sc.[Suite Condition]='Under Construction' THEN isnull([IT Load (kW)],0) END) NewConstruction,
sum(CASE WHEN sc.[Suite Condition]='Sublease' THEN isnull([IT Load (kW)],0) END) NewSublease,
0 AS totalsupply,0 AS totaldemand,QuarterID
FROM dbo.SupplyCompetitor sc  
WHERE sc.market!='' and Company is not null
GROUP BY sc.market,sc.region, QuarterID

UNION

SELECT s.region,s.market,
sum(CASE WHEN s.[SuiteCondition]='Market Ready' THEN isnull(kWofUPS,0) END) curentsupply,
sum(CASE WHEN s.[SuiteCondition]='Under Construction' THEN isnull(kWofUPS,0) END) NewConstruction,
sum(CASE WHEN s.[SuiteCondition]='Sublease' THEN isnull(kWofUPS,0) END) NewSublease,
0 AS totalsupply,0 AS totaldemand,QuarterID
FROM Supply s WHERE s.market!=''
GROUP BY s.Market,s.Region,QuarterID

UNION

SELECT sc.Region,sc.market,
0 AS currentsupply,0 AS newconstruction,0 AS newsublease,
sum(CASE WHEN sc.[Suite Condition] in ('Market Ready','Under Construction','Sublease') THEN isnull([IT Load (kW)],0) END) Totalsupply,
0 AS Totaldemand,QuarterID
FROM dbo.SupplyCompetitor sc  
WHERE sc.market!='' and Company is not null
GROUP BY sc.market,sc.region ,QuarterID

UNION

SELECT s.region,s.market,
0 AS currentsupply,0 AS newconstruction,0 AS newsublease,
sum(CASE WHEN s.[SuiteCondition] in ('Market Ready','Under Construction','Sublease') THEN isnull(kWofUPS,0) END) Totalsupply,
0 AS totaldemand,QuarterID
FROM Supply s WHERE s.market!=''
GROUP BY s.Market,s.Region,QuarterID

UNION

SELECT region,market,0 AS currentsupply,0 AS newsublease,0 AS newconstruction,0 AS totalsupply,
SUM(TotalkW) TotalDemand,QuarterID
FROM dbo.Demand
WHERE  Market!=''
GROUP BY market,region,QuarterID

SELECT Region,Market,SUM(Currentsupply/1000) Currentsupply,
SUM(NewConstruction/1000)  NewConstruction,
SUM(NewSublease/1000) NewSublease,
SUM(TotalSupply/1000) TotalSupply ,
SUM(TotalDemand/1000) TotalDemand,QuarterId
FROM  #temp 
WHERE market in ('Boston','Chicago','DallAS','Houston','N Virginia',
'NY Metro','Phoenix','Silicon Valley',							
'London','Paris','Amsterdam','Dublin','Singapore','Melbourne','Sydney','Hong Kong'
) and #temp.QuarterId=@QuarterID
GROUP BY region,market,QuarterId
DROP TABLE #temp
END 


-----------------------------------------------------------------------------------
/* [Supply_MarketReadyAndConstruction] SP used in SupplyDemandAnalysis Report */
-----------------------------------------------------------------------------------
SET ANSI_NULLS ON