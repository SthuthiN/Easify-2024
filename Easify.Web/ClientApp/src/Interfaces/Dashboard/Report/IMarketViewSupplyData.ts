import { IThemeContextProps } from '../../../Theme/Model';
import { ILineChartData, IPieChartData } from '../../../Interfaces/Common/ICharts'
import { ITopCompetitorInventory } from '../../../Interfaces/Dashboard/Report/MarketOverview/ITopCompetitorInventory'
export interface IMarketViewSupplyData {
    Colors: IThemeContextProps;
    LineChartData: ILineChartData[];
    MarketCapacities: IPieChartData[];
    MarketShares: IPieChartData[];
    TopCompetitrInventories: ITopCompetitorInventory[];
}