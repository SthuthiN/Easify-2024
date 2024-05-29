

CREATE PROCEDURE [dbo].[GetOpportunities]
@QuarterID int
AS
BEGIN
Select * from (
	SELECT [ID]
		  ,d.[Market]
		  ,d.Region
		  ,d.[Stag]
		  ,[Probability]
		  ,[Property]
		  ,[OpportunityName]
		  ,[Industry]
		  ,d.[ProductType]
		  ,[TotalkW]
		  ,[RaisedSqFt]
		  ,[RentableSf]
		  ,[AnnualizedGAAPRent]
		  ,d.[TransactionType]
		  ,[OpportunityOwner]
		  ,[DateCreated]
		  ,[DateModified]
		  ,[ModifiedBy]
		  ,d.QuarterID
		  ,d.[RC First Month Rent]
		  ,d.[Supply/Demand Rating]
		  ,d.[Starting $/kW]
		  ,d.[AverageRent]
		  ,d.[Average $/kW]
		  ,d.IsActive
		  ,d.IsNew
	FROM [dbo].Opportunity d
	WHERE d.IsActive = 1  AND d.IsDeleted = 0 AND D.ID not in (SELECT ID FROM OpportunityModifications) and d.QuarterID = @QuarterID

	UNION

	SELECT [ID]
		  ,d.[Market]
		  ,d.Region
		  ,d.[Stag]
		  ,[Probability]
		  ,[Property]
		  ,[OpportunityName]
		  ,[Industry]
		  ,d.[ProductType]
		  ,[TotalkW]
		  ,[RaisedSqFt]
		  ,[RentableSf]
		  ,[AnnualizedGAAPRent]
		  ,d.[TransactionType]
		  ,[OpportunityOwner]
		  ,[DateCreated]
		  ,[DateModified]
		  ,[ModifiedBy]
		  ,d.QuarterID
		  ,d.[RC First Month Rent]
		  ,d.[Supply/Demand Rating]
		  ,d.[Starting $/kW]
		  ,d.[AverageRent]
		  ,d.[Average $/kW]
		  ,d.IsActive
		  ,d.IsNew
	FROM [dbo].OpportunityModifications d 
	WHERE  d.IsActive = 1  AND d.IsDeleted = 0 and d.QuarterID = @QuarterID
   )
   
dt order by DateModified desc         
END