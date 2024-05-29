


/****** Script for SelectTopNRows command from SSMS  ******/
CREATE VIEW [dbo].[Supply_Cube_20190805] AS 
SELECT [ID]
      ,[Region]
      ,[Market]
      ,[QuarterID]
      ,[Name]
      ,[TotalRentableSqft]
      ,[TotalRaisedFloorSqft]
      ,[kWofUPS]
      ,[SuiteCondition]
      ,[Status]
      ,[DateAvailable]
      ,[InventoryType]
      ,rtrim(ltrim([PropertyCode])) AS [PropertyCode]
      ,rtrim(ltrim([Property])) AS [Property]
      ,[DateModified]
      ,[ModifiedBy]
      ,[DateCreated]
      ,[IsActive]
      ,[IsNew]
      ,[ProductType]
  FROM [SupplyDemandAnalysis].[dbo].[DLRInventory]   where IsDeleted = 0