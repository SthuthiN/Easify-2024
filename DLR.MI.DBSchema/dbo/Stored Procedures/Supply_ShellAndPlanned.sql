
CREATE PROCEDURE [dbo].[Supply_ShellAndPlanned]
@market NVARCHAR(50),
@QuarterID INT
as
BEGIN

SELECT  case when ltrim(rtrim([Suite Condition]))='Shell' then 'Available Shell'  
			 when ltrim(rtrim([Suite Condition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim([Suite Condition])) end Suite,
market,Company,(Provider+ ','+[Address]) AS [Address],[ProductType],suite suites,SUM([IT Load (kW)]) KW
FROM dbo.SupplyCompetitor 
WHERE market!=''  and 
[Suite Condition] in ('Shell','Planned','Available Shell','Planned Shell') and
 ((CASE WHEN @Market <>' ALL' AND 	Market=@market THEN 1
        WHEN @Market =' ALL' THEN 1 END)=1) and Company is not null
        and  QuarterID=@QuarterID
group by  market,Company,[Address], [Provider],[ProductType],suite,
		  case when ltrim(rtrim([Suite Condition]))='Shell' then 'Available Shell'  
			   when ltrim(rtrim([Suite Condition]))='Planned' then 'Planned Shell' 
			   else ltrim(rtrim([Suite Condition])) end 
UNION
SELECT  case when ltrim(rtrim([SuiteCondition]))='Shell' then 'Available Shell'  
			 when ltrim(rtrim([SuiteCondition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim([SuiteCondition])) end Suite,
			supply.Market,'DLR' AS Company,Property  Address,InventoryType,'' AS suites,SUM(kWofUPS) KW
FROM dbo.Supply

WHERE [SuiteCondition] in ('Shell','Planned','Available Shell','Planned Shell') and supply.Market!='' and
((CASE WHEN @Market <>' ALL' AND 	supply.Market=@market THEN 1
			       WHEN @Market =' ALL' THEN 1 END)=1)
			       and  QuarterID=@QuarterID
group by  supply.Market,InventoryType,
		  case when ltrim(rtrim([SuiteCondition]))='Shell' then 'Available Shell'  
			   when ltrim(rtrim([SuiteCondition]))='Planned' then 'Planned Shell' 
			   else ltrim(rtrim([SuiteCondition])) End,Property
END

-----------------------------------------------------------------------------------
/* [DemandAndPipelineDemand] SP used in SupplyDemandAnalysis Report */
-----------------------------------------------------------------------------------
SET ANSI_NULLS ON