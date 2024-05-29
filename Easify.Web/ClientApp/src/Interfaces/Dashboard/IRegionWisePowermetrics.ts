export interface IRegionWisePowermetrics {
    RegionId: number;
    TotalPower: number;
    TotalSpace: number;
    TotalPowerAvailable: number;
    DLRTotalPower: number;
    DLRPowerAvailable: number;
    DLRAvailableSpace: number;
    DLRTotalRsf: number;
    TotalInventoryQoq: number;
    TotalInventoryPercentage: number;
    TotalSpaceQoq: number;
    TotalSpacePercentage: number;
    VacantSpaceQoq: number;
    VacantSpacePercentage: number;
    VacantInventoryQoq: number;
    VacantInventoryPercentage: number;
    LivePower: number;
    UnderConstructionPower: number;
}