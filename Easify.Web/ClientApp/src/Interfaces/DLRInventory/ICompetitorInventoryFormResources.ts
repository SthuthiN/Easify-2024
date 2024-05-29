import { IDLRMarket } from "./IMarket";
import { IComparablesSource } from "./IComparablesSource";
import { IRegion } from "./IRegion";
import { IProductType } from "./IProductType";
import { ISuiteCondition } from "./ISuiteCondition";

export interface ICompetitorInventoryFormResources
{
    Markets: Array<IDLRMarket>;
    Regions: Array<IRegion>;
    Sources: Array<IComparablesSource>;
    QuartersAvailable: Array<string>;
    SuiteConditions: Array<ISuiteCondition>;
    ProductTypes: Array<IProductType>;
}