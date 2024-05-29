export interface ISupplyFilters {
    IsMapSelected: boolean;
    IsTop10Selected: boolean;
    IsTop5Selected: boolean;
    IsDLROnly: boolean;
    IsTotalOrActualCompetetion: boolean;
    IsEquinix: boolean;
    IsKwSelected: boolean;
    IsSpaceSelected: boolean;
    IsSqftSelected: boolean;
    IsAllSelected: boolean;
    IsUnderConstructionSelected: boolean;
    IsPlannedSelected: boolean;
    IsLandSelected: boolean;
    IsAnnouncedSelected: boolean;
    IsRetiredSelected: boolean;
    IsDeployedSelected: boolean;
}

export interface IInventoryFilters {
    IsColo: boolean;
    IsScale: boolean;
    IsJv: boolean;
    IsSpace: boolean;
    IsKw: boolean;
    IsSqft: boolean;
    IsMap: boolean;
    IsLessThanOneMw: boolean;
    IsGreaterThanOneMw: boolean;
    IsGreaterThan500Kw: boolean;
    IsBetween200and500: boolean;
    IsLessThan200Kw: boolean;
    IsNone: boolean;
    IsAllSelected: boolean;
    IsUnderConstructionSelected: boolean;
    IsPlannedSelected: boolean;
    IsLandSelected: boolean;
    IsAnnouncedSelected: boolean;
    IsRetiredSelected: boolean;
    IsDeployedSelected: boolean;
    isPowerAvailable?: boolean;
    powerAvailableValue?: number | number[];
}

export interface IConnectivityFilters {
    IsMap: boolean;
    IsEnterprise: boolean;
    IsUnknown: boolean;
    IsOnlyNetworks: boolean;
    IsConnectivity: boolean;
    IsPublicSector: boolean;
    IsOnlyPops: boolean;
    IsNetworkAndPops: boolean;
    IsContent: boolean;
}

export interface ISPCapabilityFilters {
    IsSelectAll: boolean;
    IsCloudCompute: boolean;
    IsCloudPrivateEdge: boolean;
    IsCloudPublicEdge: boolean;
    IsDigitalMediaCompute: boolean;
    IsDigitalMediaPublicEdge: boolean;
    IsAnnounced: boolean;
    IsDeployed: boolean;
    IsPlanned: boolean;
    IsAll: boolean;
}