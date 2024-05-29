export interface IPieChartData{
    name:string;
    value: number;
    utilized?: number;
}

export interface IBarChartData {
    name: string;
    CloudCompute: number;
    DigitalMediaPublicEdge: number;
    CloudPublicEdge: number;
    CloudPrivateEdge: number;
}

export interface ILineChartData {
    Year: string;
    DigitalRealty: number;
    Competitors: number;
}

export interface ICumulativeLineChartData {
    Year: number;
    Deployments:number
}

export interface IInventoryBarChartData {
    name: string;
    AvailableValue?: number;
    SoldValue?: number;
    TotalValue?: number;
}
