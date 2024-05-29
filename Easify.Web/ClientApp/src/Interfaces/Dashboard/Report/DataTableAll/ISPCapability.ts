export interface ISPCapability {
    GeographicalId: string;
    CloudDeploymentId: string;
    DataCenterId: string;
    DataCenterName: string;
    CloudProviderId: string;
    CloudProviderName: string;
    DataCenterProviderId: string;
    DataCenterProviderName: string;
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
    NodeType: number; 
    MarketId: string;
    Year: number;
    OperationalStatus: string;
}


export interface ISPCapabilityTable {
    ProviderId: string;
    ProviderName: string;
    DLRCount: number;
    NonDLRCount: number;
    Total: number;
    CloudPublicEdgeCount?: number;
    CloudComputeCount?: number;
    CloudPrivateEdgeCount?: number;
    DigitalMediaPublicEdgeCount?: number;
}