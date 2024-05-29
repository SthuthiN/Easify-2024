




/****** Script for SelectTopNRows command from SSMS  ******/
CREATE VIEW [dbo].[SupplyCompetitor_Cube] AS 
SELECT [ID]
      ,[Region]
      ,[Company]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Address],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Address]
      ,[QuarterID]
      ,[Market]
      ,[Suite]
      ,[ProductType]
      ,[SF]
      ,[IT Load(MW)]
      ,[Suite Condition]
      ,[IT Load (kW)]
      ,[Date Avail]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,[IsActive]
      ,[IsNew]
      ,[Provider]
      ,[Quarter Avail]
      ,[Source]
  FROM [dbo].[CompetitorInventory]  where IsDeleted = 0