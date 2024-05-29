import { IProperty } from "./IProperty";
import { ISuiteCondition } from "./ISuiteCondition";
import { IProductType } from "./IProductType";
import { IAssetScoring } from "./IAssetScoring";
import { ICPS } from "./ICPS";
import { ICloudOnRamp } from "./ICloudOnRamp";
import { IDeliveryStatus } from "./IDeliveryStatus";
import { IIndustryOrComplianceCertifications } from "./IIndustryOrComplianceCertifications";
import { INetworkDensity } from "./INetworkDensity";
import { IResponsibleParty } from "./IResponsibleParty";
import { ISecurePerimeter } from "./ISecurePerimeter";
import { ISmartHands } from "./ISmartHands";
import { IWaterCooling } from "./IWaterCooling";
import { ITargetProductSize } from "./ITargetProductSize";
import { IChilledWater } from "./IChilledWater";

export interface IDLRInventoryFormResources{
    //GlobalRegions?: Array<string>;
    //Regions?: Array<IRegion>;
    //Markets?: Array<IMarket>;
    Properties: Array<IProperty>;
    SuiteConditions: Array<ISuiteCondition>;
    ProductTypes: Array<IProductType>;
    AssetScorings: Array<IAssetScoring>;
    CPS: Array<ICPS>;
    CloudOnRamps: Array<ICloudOnRamp>;
    DeliveryStatuses: Array<IDeliveryStatus>;
    IndustryOrComplianceCertifications: Array<IIndustryOrComplianceCertifications>;
    NetworkDensities: Array<INetworkDensity>;
    ResponsibleParties: Array<IResponsibleParty>;
    SecurePerimeters: Array<ISecurePerimeter>;
    SmartHands: Array<ISmartHands>;
    WaterCoolings: Array<IWaterCooling>;
    TargetProductSizes: Array<ITargetProductSize>;
    ChilledWaters: Array<IChilledWater>;
}