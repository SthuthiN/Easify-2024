CREATE procedure [dbo].[GetSupplyDemand](
@QuarterID int,
@MarketID int,
@Supply float output,
@Demand float output
)
AS
begin
select @Supply=((select isnull(sum(s.kWofUPS)/1000,0)  supply from Supply S join market M on S.Market=M.Market 
                where S.QuarterID=@QuarterID and M.MarketID=@MarketID and SuiteCondition in ('Under Construction','Market Ready') )

                +

               (select isnull(sum(s.[IT Load (kW)])/1000,0)  supply from SupplyCompetitor S join market M on S.Market=M.Market 
                where S.QuarterID=@QuarterID and M.MarketID=@MarketID and [Suite Condition] in ('Under Construction','Market Ready') )) ,
       @Demand=(select isnull(sum(D.TotalkW)/1000,0) demand from Demand D join market M on D.Market=M.Market
                where D.QuarterID=@QuarterID and M.MarketID=@MarketID)
                
    
          
end