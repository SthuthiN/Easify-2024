



CREATE PROCEDURE [dbo].[GetDLRInventory](
	@ID int
)
as
BEGIN
SET NOCOUNT ON; 
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
        ,s.DateCreated
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
		,s.[IsActive]
		,s.[IsNew]
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
		FROM [dbo].DLRInventory s
		left join Quarter q ON q.ID = s.QuarterID
		WHERE s.IsActive = 1  AND s.IsDeleted = 0 
		AND s.ID = @ID 
		--AND s.ID NOT IN (Select ID from dbo.SupplyModifications)

END