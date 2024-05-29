




/****** Script for SelectTopNRows command from SSMS  ******/
CREATE VIEW [dbo].[Comparables_Cube] AS 
SELECT [ID]
      ,[Source]
      ,[Sign Quarter]
      ,[Region]
      ,[Market]
      ,[Provider]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Address],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Address]
      ,[Customer]
      ,[QuarterID]
      ,[ProductType]
      ,[Redundancy]
      ,[NRSF]
      ,[kW]
      ,[Term in Months]
      ,[Annual GAAP Rent]
      ,[Starting Lease Rate]
      ,[Average Lease Rate]
      ,[Total Free Rent]
      ,[Total TI]
      ,[Net Rent]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,[IsActive]
      ,[IsNew]
      ,[Escalations]
      ,[RSF]
  FROM [dbo].[Comparables] where IsDeleted = 0