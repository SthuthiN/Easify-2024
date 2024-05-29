import { IPieChartData, IBarChartData } from '../../../Interfaces/Common/ICharts';
import { ISPCapabilityTable } from '../../../Interfaces/Dashboard/Report/DataTableAll/ISPCapability'
export interface IMarketViewCapabilityData {
    TableFields: ISPCapabilityTable[];
    IsSpCapabilityOpen: boolean;
    DlrCapabilityData: IPieChartData[];
    NonDlrCapabilityData: IPieChartData[];
    DlrNodeTypeData: IBarChartData[];
    NonDlrNodeTypeData: IBarChartData[];
}
