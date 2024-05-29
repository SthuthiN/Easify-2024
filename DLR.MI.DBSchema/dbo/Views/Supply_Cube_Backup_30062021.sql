
/****** Script for SelectTopNRows command from SSMS  ******/
CREATE VIEW [dbo].[Supply_Cube_Backup_30062021] AS 
SELECT [ID]
	  ,'Region' = CASE WHEN ([Region] = '' OR [Region] IS NULL) THEN 'Not Assigned' ELSE rtrim(ltrim([Region])) END
	  ,'Market' = CASE WHEN ([Market] = '' OR [Market] IS NULL) THEN 'Not Assigned' ELSE rtrim(ltrim([Market])) END
      ,[QuarterID] AS [QuarterID]
      ,rtrim(ltrim([Name])) AS [Name]
      ,[TotalRentableSqft]  AS [TotalRentableSqft]
      ,[TotalRaisedFloorSqft] AS [TotalRaisedFloorSqft]
      ,[kWofUPS] AS [kWofUPS]
      ,rtrim(ltrim([SuiteCondition])) AS [SuiteCondition]
      ,rtrim(ltrim([Status])) AS [Status]
      ,[DateAvailable] AS [DateAvailable]
      ,rtrim(ltrim([InventoryType])) AS [InventoryType]
      ,rtrim(ltrim([PropertyCode])) AS [PropertyCode]
      ,rtrim(ltrim([Property])) AS [Property]
      ,[DateModified] AS [DateModified]
      ,rtrim(ltrim([ModifiedBy])) AS [ModifiedBy]
      ,[DateCreated] AS [DateCreated]
      ,[IsActive] AS [IsActive]
      ,[IsNew] AS [IsNew]
      ,rtrim(ltrim([ProductType])) AS [ProductType]
	  ,'GlobalRegion' = CASE WHEN ([GlobalRegion] = '' OR [GlobalRegion] IS NULL) THEN 'Not Assigned' ELSE rtrim(ltrim([GlobalRegion])) END
      ,[EarliestDeliveryDate] AS [EarliestDeliveryDate]
      ,[Signed/PendingLease(s)] AS [Signed/PendingLease(s)]
      ,[TotalSigned/Pending] AS [TotalSigned/Pending]
      ,[TotalROFO(kW)] AS [TotalROFO(kW)]
	  ,'ROFOCustomer' = CASE WHEN ([ROFOCustomer] = '' OR [ROFOCustomer] IS NULL) THEN 'Not Assigned' ELSE rtrim(ltrim([ROFOCustomer])) END
      ,[TotalActive3rdPartyInterest(kW)] AS [TotalActive3rdPartyInterest(kW)]
      ,rtrim(ltrim([Prospect(s)])) AS [Prospect(s)]
      ,rtrim(ltrim([Comments])) AS [Comments]
      ,[TotalPlannedITLoad(kW)] AS [TotalPlannedITLoad(kW)]
      ,[StrategicInitiative] AS [StrategicInitiative]
      ,[MoveInReadyInitiative] AS [MoveInReadyInitiative]
  FROM [dbo].[DLRInventory]   where IsDeleted = 0