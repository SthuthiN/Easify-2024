





CREATE VIEW [dbo].[Supply_Cube] AS 
SELECT [ID]
	  ,'Region' = CASE WHEN ([Region] = '' OR [Region] IS NULL) THEN 'Not Assigned' ELSE LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Region],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) END
	  ,'Market' = CASE WHEN ([Market] = '' OR [Market] IS NULL) THEN 'Not Assigned' ELSE LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Market],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) END
      ,[QuarterID] AS [QuarterID]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Name],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Name]
      ,[TotalRentableSqft]  AS [TotalRentableSqft]
      ,[TotalRaisedFloorSqft] AS [TotalRaisedFloorSqft]
      ,[kWofUPS] AS [kWofUPS]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([SuiteCondition],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [SuiteCondition]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Status],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Status]
      ,[DateAvailable] AS [DateAvailable]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([InventoryType],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [InventoryType]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([PropertyCode],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [PropertyCode]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Property],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Property]
      ,[DateModified] AS [DateModified]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([ModifiedBy],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [ModifiedBy]
      ,[DateCreated] AS [DateCreated]
      ,[IsActive] AS [IsActive]
      ,[IsNew] AS [IsNew]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([ProductType],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [ProductType]
	  ,'GlobalRegion' = CASE WHEN ([GlobalRegion] = '' OR [GlobalRegion] IS NULL) THEN 'Not Assigned' ELSE LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([GlobalRegion],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) END
      ,[EarliestDeliveryDate] AS [EarliestDeliveryDate]
      ,[TotalSigned/Pending] AS [TotalSigned/Pending]
      ,[TotalROFO(kW)] AS [TotalROFO(kW)]
	  ,'ROFOCustomer' = CASE WHEN ([ROFOCustomer] = '' OR [ROFOCustomer] IS NULL) THEN 'Not Assigned' ELSE LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([ROFOCustomer],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) END
      ,[TotalActive3rdPartyInterest(kW)] AS [TotalActive3rdPartyInterest(kW)]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Prospect(s)],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Prospect(s)]
      ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Comments],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [Comments]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([CompanyName],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [CompanyName]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([AirportCode],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [AirportCode]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([AssetScoring],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [AssetScoring]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([CPS],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [CPS]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([EstimatedCostsUSD],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [EstimatedCostsUSD]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([ProjectScope],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [ProjectScope]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([DeliveryStatus],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [DeliveryStatus]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([ResponsibleParty],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [ResponsibleParty]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([PowerDensity],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [PowerDensity]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([WaterCooling],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [WaterCooling]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([SmartHands],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [SmartHands]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([NetworkDensity],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [NetworkDensity]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([CloudOnRamp],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [CloudOnRamp]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([IndustryOrComplianceCertifications],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [IndustryOrComplianceCertifications]
	  ,LTRIM(RTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([SecurePerimeter],''), CHAR(9), ''), CHAR(10), ''), CHAR(11), ''), CHAR(12), ''), CHAR(13), ''))) AS [SecurePerimeter]
  FROM [dbo].[DLRInventory]   where IsDeleted = 0