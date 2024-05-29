

CREATE PROCEDURE [dbo].[GetOpportunityModifications]
@ID int
AS
BEGIN

SELECT  [ID]
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
WHERE  d.IsActive = 1  AND d.IsDeleted = 0 and d.ID = @ID
            
END