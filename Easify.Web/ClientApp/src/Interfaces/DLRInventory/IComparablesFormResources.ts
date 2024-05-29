import { IRegion } from "./IRegion";
import { IDLRMarket } from "./IMarket";
import { IComparablesSource } from "./IComparablesSource";
import { IRedundancy } from "./IRedundancy";
import { IProductType } from "./IProductType";

export interface IComparablesFormResources
{
    Sources: Array<IComparablesSource>;
    Regions: Array<IRegion>;
    Markets: Array<IDLRMarket>;
    SignQuarters: Array<string>;
    Redundancies: Array<IRedundancy>;
    ProductTypes: Array<IProductType>;
}