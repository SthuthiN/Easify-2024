export interface IConnectivity{
    GeoId: string;
    ProviderId: string;
    ProviderName: string;
    RegionId: number;
    Region: string;
    BusinessRegionId: number;
    BusinessRegion: string;
    CountryId: number;
    Country: string;
    StateId: number;
    State: string;
    CityId: number;
    City: string;
    Market: string;
    Internal: boolean;
    MarketId: string;
    Year: number;
    LocalAsn: number;
    ConnectivityCategory: string;
    Latitude: string;
    Longitude: string;
    FacilityName: string;
    NumberOfPops: number;
    NumberOfNetworks: number;
}

export interface IConnectivityTableFields {
    ProviderId: string;
    ProviderName: string;
    TotalPops: number;
    TotalNetworks: number;
    FacilityName: string;
}

export interface IConnectivityCoordinate {
    GeographicalId: string;
    FacilityName: string;
    FacilityId: number;
    RegionId: number;
    Region: string;
    BusinessRegionId: number;
    BusinessRegion: string;
    CountryId: number;
    Country: string;
    StateId: number;
    State: string;
    CityId: number;
    City: string;
    Market: string;
    MarketId: string;
    Latitude: string;
    Longitude: string;
}