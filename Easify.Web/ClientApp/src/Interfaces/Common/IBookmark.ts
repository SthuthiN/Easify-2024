export interface IBookmark{
    Id: number;
    Title: string;
    Email: string;
    RegionId: number;
    BusinessRegionId?: number;
    CountryId?: number;
    CityId?: string;
    IsReset?: boolean;
    IsDLR: boolean;
}