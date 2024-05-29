



CREATE PROCEDURE [dbo].[GetDLRInventoriesForApproval]
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
		,0 as IsModified
		,s.[IsActive]
		,s.DateCreated
		,s.[CompanyName]
		,s.[AirportCode]
		,s.[CPS]
		,s.[ProjectScope]
		,s.[DeliveryStatus]
		,s.[ResponsibleParty]
		,s.[LargestContiguousSuite]
		,s.[TargetProductSize]
		--,s.[SecurePerimeter]
		,s.[IndustryOrComplianceCertifications]
		--,s.[CloudOnRamp], [NetworkDensity]
		--,s.[SmartHands]
		,s.[EstimatedCostsUSD]
		,s.[PowerDensity]
		,s.[ChilledWater]
		,s.[DesignedDensity]
		,s.[DesignedDensityUnit]
		,s.[ElectricalTopology]
		,s.[MechanicalTopology]
		FROM [dbo].DLRInventory s
		left join Quarter q ON q.ID = s.QuarterID
		WHERE s.QuarterID = @QuarterID  AND s.IsDeleted = 0 
		and ( s.IsNew = 1 
		or s.IsActive = 0
		or s.ID IN (Select SM.ID from dbo.DLRInventoryModifications SM WHERE SM.QuarterID = @QuarterID and SM.IsActive = 1) )
		 
	UNION

		SELECT s.ID,
		s.[Region]
		,s.[Market]
		,[Name]
		,[TotalRentableSqft]
		,[TotalRaisedFloorSqft]
		,[kWofUPS]
		,case when ltrim(rtrim(s.[SuiteCondition]))='Shell' then 'Available Shell'  
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
		,1 as IsModified
		,s.[IsActive]
		,s.DateCreated
		,s.[CompanyName]
		,s.[AirportCode]
		,s.[CPS]
		,s.[ProjectScope]
		,s.[DeliveryStatus]
		,s.[ResponsibleParty]
		,s.[LargestContiguousSuite]
		,s.[TargetProductSize]
		--,s.[SecurePerimeter]
		,s.[IndustryOrComplianceCertifications]
		--,s.[CloudOnRamp], [NetworkDensity]
		--,s.[SmartHands]
		,s.[EstimatedCostsUSD]
		,s.[PowerDensity]
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