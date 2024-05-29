




CREATE PROCEDURE [dbo].[GetDLRInventories]
@QuarterID int
as
BEGIN
Select * from (
	SELECT s.ID,
		s.[Region]
		,s.[Market]
		,[Name]
		,[TotalRentableSqft]
		,[TotalRaisedFloorSqft]
		,[kWofUPS]
		,case 
			 when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(s.[SuiteCondition])) end 
		[SuiteCondition]
		,[Status]
		,[Property]
		,[PropertyCode]
		,[ProductType]
		,s.DateModified
		,s.ModifiedBy
		,s.QuarterID
		,q.Quarter as Quarter
		,s.[GlobalRegion]
		,s.[EarliestDeliveryDate]
		,s.[TotalROFO(kW)]
		,s.[ROFOCustomer]
		,s.[TotalActive3rdPartyInterest(kW)]
		,s.[Prospect(s)]
		,s.[Comments]
		,s.[IsNew]
		,s.DateCreated
		,s.[CompanyName]
		,s.[AirportCode]
		,s.[CPS]
		,s.[ProjectScope]
		,s.[DeliveryStatus]
		,s.[ResponsibleParty]
		,s.[WaterCooling]
		,s.[TargetProductSize]
		--,s.[SecurePerimeter]
		,s.[IndustryOrComplianceCertifications]
		--,s.[CloudOnRamp], [NetworkDensity]
		--,s.[SmartHands]
		,s.[EstimatedCostsUSD]
		,s.[PowerDensity]
		,s.[LargestContiguousSuite]
		,s.[ChilledWater]
		,s.[DesignedDensity]
		,s.[DesignedDensityUnit]
		,s.[ElectricalTopology]
		,s.[MechanicalTopology]
		FROM [dbo].[DLRInventory] s
		left join Quarter q ON q.ID = s.QuarterID
		WHERE s.QuarterID = @QuarterID 
		and s.IsActive = 1 AND s.IsDeleted = 0 
		AND s.ID NOT IN (Select ID from dbo.DLRInventoryModifications) 

	UNION

	SELECT s.ID,
		s.[Region]
		,s.[Market]
		,[Name]
		,[TotalRentableSqft]
		,[TotalRaisedFloorSqft]
		,[kWofUPS]
		,case 
			 when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(s.[SuiteCondition])) end 
		[SuiteCondition]
		,[Status]
		,[Property]
		,[PropertyCode]
		,[ProductType]
		,s.DateModified
		,s.ModifiedBy
		,s.QuarterID
		,q.Quarter as Quarter
		,s.[GlobalRegion]
		,s.[EarliestDeliveryDate]
		,s.[TotalROFO(kW)]
		,s.[ROFOCustomer]
		,s.[TotalActive3rdPartyInterest(kW)]
		,s.[Prospect(s)]
		,s.[Comments]
		,s.[IsNew]
		,s.DateCreated
		,s.[CompanyName]
		,s.[AirportCode]
		,s.[CPS]
		,s.[ProjectScope]
		,s.[DeliveryStatus]
		,s.[ResponsibleParty]
		,s.[WaterCooling]
		,s.[TargetProductSize]
		--,s.[SecurePerimeter]
		,s.[IndustryOrComplianceCertifications]
		--,s.[CloudOnRamp], [NetworkDensity]
		--,s.[SmartHands]
		,s.[EstimatedCostsUSD]
		,s.[PowerDensity]
		,s.[LargestContiguousSuite]
		,s.[ChilledWater]
		,s.[DesignedDensity]
		,s.[DesignedDensityUnit]
		,s.[ElectricalTopology]
		,s.[MechanicalTopology]
		FROM [dbo].DLRInventoryModifications s
		left join Quarter q ON q.ID = s.QuarterID
		WHERE s.QuarterID = @QuarterID and s.IsActive = 1 AND s.IsDeleted = 0 
	)
dt order by DateModified desc
END