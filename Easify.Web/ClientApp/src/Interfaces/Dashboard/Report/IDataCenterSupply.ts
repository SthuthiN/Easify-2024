export interface IDataCenterSupply {
    DataCenterProviderId: string;
    DataCenterProviderName: string;
    TotalPower: number;
    YearWiseData: {
        Year: number;
        TotalPower: number
    }[];
    RegionWiseData: {
        RegionId: number;
        TotalPower: number;
    }[];
    //GeographicalId: string;
    //DataCenterId: string;
    //DataCenterName: string;
    //CompanyName: string;
    //CityId: number;
    //City: string;
    //CountryId: number;
    //Country: string;
    //StateId: number;
    //State: string;
    //RegionId: number;
    //Region: string;
    //BusinessRegionId: number;
    //BusinessRegion: string;
    //Internal: boolean;
    //Latitude: string;
    //Longitude: string;
    //Market: string;
    //TotalPowerAvailable: number;
    //TotalPowerExpansions: number;
    //TotalRsf: number;
    //DirectCompetitor: boolean;
    //AvailableSpace: number;
    //TotalPowerUtilized: number;
}