CREATE PROCEDURE [dbo].[DemandAndPipelineDemand]
@market NVARCHAR(50),
@QuarterID INT
AS
BEGIN
SELECT CASE WHEN Probability>=40 THEN 'Demand' else 'Pipeline Demand' END AS TypeOfDemand,
convert(varchar(50),Probability) + '%-' + convert(varchar(50),Stag) AS ProbabilityandStag,OpportunityName,
ProductType,SUM(TotalkW) KW FROM dbo.Demand
WHERE
((CASE WHEN @Market <>' ALL' AND Market=@market THEN 1
			       WHEN @Market =' ALL' THEN 1 END)=1)
			       and  QuarterID=@QuarterID
group by Probability,Stag,OpportunityName,ProductType
 
END