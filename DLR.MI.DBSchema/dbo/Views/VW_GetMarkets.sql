


CREATE VIEW [dbo].[VW_GetMarkets]
AS
SELECT C.[ID], C.[Name] AS [City], C.[AvailablePower], C.[TotalPower], C.[TotalRSF], C.[TotalPowerPercentUtilized],CC.[CountryId] AS [CountryId], CC.[Name] AS [Country],BR.[Id] AS [BusinessRegionId], BR.[Name] AS [BusinessRegion],R.[Id] AS [RegionId], R.[Name] as [Region], R.[Class] as [RegionClass]
FROM [City] C
	LEFT JOIN [Country] CC ON CC.[CountryId] = C.[CountryID] AND CC.[IsActive] = 1
	LEFT JOIN [BusinessRegion] BR ON BR.[Id] = CC.[BusinessRegionID] AND BR.[IsActive] = 1
	LEFT JOIN [Region] R ON R.[Id] = BR.[RegionID] 
WHERE C.[IsActive] = 1