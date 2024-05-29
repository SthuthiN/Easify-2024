﻿export interface IComparables {
    ID: number;
    Source: string;
    SignQuarter: string;
    Region: string;
    Market: string;
    Provider: string;
    Address: string;
    Customer: string;
    QuarterID: number;
    ProductType: string;
    Redundancy: string;
    NRSF: number;
    KW: number;
    TermInMonths: number;
    StartingLeaseRate: number;
    AverageLeaseRate: number;
    AnnualGAAPRent: number;
    TotalFreeRent: number;
    TotalTI: number;
    NetRent: number;
    DateCreated: Date;
    DateModified: Date;
    ModifiedBy: string;
    IsActive: boolean;
    IsNew: boolean;
    Escalations: number;
    RSF: number;
    IsDeleted: boolean;
    GeoId: string;
    CityId: number;
    City: string;
    CountryId: number;
    Country: string;
    StateId: number;
    State: string;
    RegionId: number;
    BusinessRegionId: number;
    BusinessRegion: string;
    MarketId: string;
}