




/****** Script for SelectTopNRows command from SSMS  ******/

CREATE VIEW [dbo].[Demand_Cube] AS
SELECT [ID]
      ,[Market]
      ,[Stag]
      ,[Probability]
      ,[QuarterID]
      ,[OpportunityName]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Property],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Property]
      ,[Industry]
      ,[ProductType]
      ,[TotalkW]
      ,[RaisedSqFt]
      ,[RentableSf]
      ,[AnnualizedGAAPRent]
      ,[TransactionType]
      ,[OpportunityOwner]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,[IsActive]
      ,[Region]
      ,[IsUpdated]
      ,[IsNew]
      ,[RC First Month Rent]
      ,[Supply/Demand Rating]
      ,[Starting $/kW]
      ,[AverageRent]
      ,[Average $/kW]
  FROM [dbo].[Opportunity]  where IsDeleted = 0