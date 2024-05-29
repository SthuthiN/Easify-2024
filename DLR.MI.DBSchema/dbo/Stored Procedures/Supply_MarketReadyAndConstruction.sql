

CREATE PROCEDURE [dbo].[Supply_MarketReadyAndConstruction]
@market NVARCHAR(50),
@QuarterID INT
AS
BEGIN
SELECT  ltrim(rtrim([Suite Condition]))Suite,market,Company,(Provider+ ','+[Address]) AS [Address],[ProductType] ,Suite suites ,SUM([IT Load (kW)]) KW
FROM dbo.SupplyCompetitor 
WHERE market!='' and 
[Suite Condition] in ('Market Ready','Sublease','Under Construction') and
 ((CASE WHEN @Market <>' ALL' AND 	Market=@market THEN 1
	    WHEN @Market =' ALL' THEN 1 END)=1) and Company is not null
	    and QuarterID=@QuarterID
			       
group by  market,Company,[Address], [Provider],[ProductType] ,Suite,[Suite Condition]
UNION
SELECT ltrim(rtrim([SuiteCondition]))Suite,supply.Market,'DLR' AS Company,Property  [Address],InventoryType ,'' AS suite,SUM(kWofUPS) KW
FROM dbo.Supply 
WHERE supply.Market!='' and [SuiteCondition] in ('Market Ready','Sublease','Under Construction') and
((CASE WHEN @Market <>' ALL' AND 	supply.Market=@market THEN 1
	   WHEN @Market =' ALL' THEN 1 END)=1) 
	   and QuarterID=@QuarterID
group by  supply.Market,InventoryType,[SuiteCondition],Property
END
-----------------------------------------------------------------------------------
/* [Supply_ShellAndPlanned] SP used in SupplyDemandAnalysis Report */
-----------------------------------------------------------------------------------
SET ANSI_NULLS ON