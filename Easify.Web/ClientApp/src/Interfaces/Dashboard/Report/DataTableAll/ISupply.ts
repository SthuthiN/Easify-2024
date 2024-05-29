export interface ISupply {
    GeographicalId: string;
    DataCenterId: string;
    DataCenterName: string;
    DataCenterProviderId: string;
    DataCenterProviderName: string; 
    CompanyName: string;
    CityId: number;
    City: string;
    CountryId: number; 
    Country: string;
    StateId: number;
    State: string;
    RegionId: number;
    Region: string;
    BusinessRegionId: number;
    BusinessRegion: string;
    YearBuilt: number;
    Internal: boolean;
    TotalPower: number;
    Latitude: string;
    Longitude: string;
    Market: string;
    TotalPowerAvailable: number;
    TotalPowerExpansions: number;
    TotalRsf: number;
    DirectCompetitor: boolean;
    AvailableSpace: number;
    TotalPowerUtilized: number;
    MarketId: string;
    SingleMultiTenant: boolean;
    OwnershipType: string;
    OperationalStatus: string;
    ProductType: string;
}

export interface IHistoricalSupplies {
    TotalPower: number;
    AvailablePower: number;
    TotalSpace: number;
    AvailableSpace: number;
    GrowthRate: number;
    VacancyPower: number;
    UnderConstrutionPower: number;
}
export interface IFutureSupplies {
    TotalPower: number;
    ColocationPower: number;
    ScalePower: number;
    TotalSpace: number;
    ColocationSpace: number;
    ScaleSpace: number;
    GrowthRate: number;
    VacancyPower: number;
}