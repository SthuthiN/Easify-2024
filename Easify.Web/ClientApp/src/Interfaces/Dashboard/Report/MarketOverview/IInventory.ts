﻿export interface IInventory {
    GeographicalId: string;
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
    TotalPower: number;
    TotalPowerAvailable: number;
    TotalRsf: number;
    AvailableSpace: number;
    AvailableQoq: number;
    AvaialableQoqPercentage: number;
    TotalQoq: number;
    TotalQoqpercentage: number;
    LessThanOneMW?: number;
    GreaterThanOneMW?: number;
    LessThanOneMWQoq ?: number;
    LessThanOneMWQoqPercentage ?: number;
    MoreThanOneMWQoq ?: number;
    MoreThanOneMWQoqPercentage ?: number;
}