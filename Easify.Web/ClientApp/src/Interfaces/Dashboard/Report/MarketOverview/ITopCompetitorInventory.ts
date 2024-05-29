export interface ITopCompetitorInventory {
    TotalPower: number;
    TotalPowerAvailable: number;
    TotalPowerExpansions: number;
    RegionId: number;
    BusinessRegionId: number;
    CountryId: number;
    CityId: number;
    StateId: number;
    Region: string;
    BusinessRegion: string;
    State: string;
    Country: string;
    City: string;
    DataCenterProviderName: string;
    DataCenterProviderId: string;
    DirectCompetitor: boolean;
}