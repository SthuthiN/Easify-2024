

CREATE PROCEDURE [dbo].[GetOpportunitiesForApproval]
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
		  ,0 as IsModified
	FROM [dbo].Opportunity d
	WHERE d.QuarterID = @QuarterID  AND d.IsDeleted = 0 
		and (d.IsNew = 1 
		or d.IsActive = 0
		or d.ID IN (Select DM.ID from dbo.OpportunityModifications DM WHERE DM.QuarterID = @QuarterID and DM.IsActive = 1))

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
		  ,1 as IsModified
	FROM [dbo].OpportunityModifications d 
	WHERE  d.IsActive = 1  AND d.IsDeleted = 0 and d.QuarterID = @QuarterID
   )
   
dt order by DateModified desc         
END