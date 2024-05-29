import { IDLRMarket } from "./IMarket";
import { ISDRating } from "./ISDRating";
import { IProperty } from "./IProperty";
import { IStage } from "./IStage";
import { IProductType } from "./IProductType";

export interface IOpportunityFormResources
{
    Markets: Array<IDLRMarket>;
    Properties: Array<IProperty>;
    SDRatings: Array<ISDRating>;
    Stages: Array<IStage>;
    ProductTypes: Array<IProductType>;
}