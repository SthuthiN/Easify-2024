import * as React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';
import { IPieChartData } from '../../../Interfaces/Common/ICharts';
import { IThemeContextProps } from '../../../Theme/Model';
import { THEMES } from '../../../Theme/ThemeConfig';
import '../../../../src/Components/Dashboard/Report/Common/DonutPieChart/DonutPieChart.scss';
//ChartJS.register(ArcElement, Tooltip, Legend,ChartData);
export interface IDonutPieChartProps {
    
    chartData: IPieChartData[] ;
    colors: IThemeContextProps | null;
    isFullScreen: boolean;
    isResponsive: boolean;
    isConnectivity: boolean;
    Title: string;
    TotalPops: number;
    totalNumberOfPops: number;
}

export interface IDonutPieChartState {
    colors: string[];
    isFullScreen: boolean;
}

class ConnectivityPieChart extends React.Component<IDonutPieChartProps, IDonutPieChartState>{
    totalValue: number = 0;
    totalpowervalue: number = 0;
    Units: string = "MW"
    RADIAN = Math.PI / 180;
    data: IPieChartData[] = [
        { name: 'Digital Realty', value: 112 },
        { name: 'Competitor', value: 12 }
    ]

    capabilityColors: string[] = [
        "#020203",
        "#808080",
        "#99b5b9",
        "#01454e",
        "#c7c8ca",
        "#01454ec4",
        "#0a454d45"
    ]
    constructor(props: IDonutPieChartProps) {
        super(props);
        this.state = {
            colors: [],
            isFullScreen: false
        }
    }

    componentDidMount() {
        this.buildColorsForChart();
    }
    componentWillReceiveProps(nextProps: IDonutPieChartProps) {
        this.buildColorsForChart();
        if (nextProps.isFullScreen !== undefined) {
            this.setState({ isFullScreen: nextProps.isFullScreen })
        }
    }

    buildColorsForChart() {
        var colors: string[] = [];
        if (this.props.colors !== null && this.props.colors !== undefined && this.props.colors.theme !== undefined && this.props.colors.theme !== null) {
            colors.push(this.props.colors.theme['--background'
            ]);
            colors.push(this.props.colors.theme['--primary']);
        }
        else {
            colors.push(THEMES.Default['--background']);
            colors.push(THEMES.Default['--primary']);
        }
        this.setState({ colors: colors })
    }

    RenderCustomizedLabelLine = (props: any) => {
        return (props.value != 0 ? <path stroke={props.stroke} d={`M${props.points[0].x},${props.points[0].y}L${props.points[1].x},${props.points[1].y}`} className="customized-label-line" /> : <polyline stroke={props.stroke} fill="none" />)
       
    }
    RenderLabel = (props: any) => {
        try {
            if (props !== undefined) {
                const RADIAN = Math.PI / 180;
                const radius = 25 + props.innerRadius + (props.outerRadius - props.innerRadius);
                const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
                const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

                return (props.value !== 0 ? <text
                    className="recharts-text recharts-pie-label-text"
                    x={x}
                    y={y <= 50 ? y + 10 : y}
                    fontSize='16'
                    fontFamily='sans-serif'
                    dominantBaseline="central"
                    cy={props.cy}
                    cx={props.cx + 10}
                    fill="black"
                    textAnchor={props.x > props.cx ? 'start' : 'end'}
                    vertOriginY="middle"
                >
                    {this.props.isConnectivity ? `${props.name} ${(props.percent * 100).toFixed(0)}%` : `${(props.percent * 100).toFixed(0)}%`}</text> : <g>
                    <text x={500} y={y <= 50 ? y + 10 : y} fill="black" rotate="90"  > </text>
                </g>)
            }

        }
        catch (ex) {
        }
    }

    onPieEnter(e) {
        if (e) {
            let toolTipWrapper = document.getElementsByClassName("recharts-tooltip-wrapper")[0];
            toolTipWrapper.style.transition = 'transform 400ms ease 0s';
            toolTipWrapper.style.transform = "translate(" + (e.chartX - 100) + "px, " + (e.chartY - 20) + "px)";
        }
    }

    customizeTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return <>
                {< div className="custom-pie-tooltip py-1 px-2 ps-1">
                    <p className="first-label">{` ${payload[0] !== undefined && payload[0].name} : ${payload[0] !== undefined && (payload[0].value).toLocaleString()}`}</p>
                </div>}

            </>
        }
        return null;
    };

    render() {
        return (
            <div className={`pie-chart ${this.props.isResponsive ? "" : "d-flex justify-content-center"} `}>
                <div className={`${this.props.chartData.length > 0 ? "" : "d-none"}  }`}>
                {(this.props?.chartData && (this.props?.chartData !== undefined || this.props.chartData?.length!==0)) && < React.Fragment >
                        <div>
                            {this.props?.chartData.length > 0 && <div className={`${this.props.isFullScreen ? "title-full-screen ps-5": "title-small-screen"} pt-4 text-center`} >{this.props.Title}</div>}
                            <PieChart onMouseMove={(e) => this.onPieEnter(e)} className={`col  ${this.props.isFullScreen ? "fullscreen-capability-chart ps-4 fullscreen-connectivity-chart" : "capability-chart connectivity-chart " }`} width={this.props.isFullScreen ? 385 : 380} height={this.props.isFullScreen ? 310 : 195} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
                                <Pie
                                    paddingAngle={3}
                                    startAngle={110}
                                    endAngle={-360}
                                    dataKey="value"
                                    isAnimationActive={false}  
                                data={this.props?.chartData}
                                    cx={this.props.isFullScreen ? "57%" : "40%"}
                                    cy="50%"
                                    outerRadius={this.props.isFullScreen ? 90 : 60}
                                    label={this.RenderLabel}
                                    labelLine={this.RenderCustomizedLabelLine}
                                    innerRadius={this.props.isFullScreen ? 80 : 50}
                            >
                                {(this.props.isConnectivity && this.props?.chartData !== undefined) && this.props?.chartData?.map((entry, index) => (
                                        <Cell style={{ outline: 'none' }} key={`cell-${index}`} fill={this.capabilityColors[index % this.capabilityColors.length]} />
                                ))}
                                    {<>  <Label
                                        value={this.props.totalNumberOfPops} position="centerBottom" className='top-capability-label' fill="black"
                                    />
                                        <Label
                                            value={`No of Providers`} position="centerTop" className='bottom-capability-label' fill="black"
                                        /></>}
                                </Pie>
                                <Tooltip content={this.customizeTooltip} />
                            </PieChart>
                        </div>
                </React.Fragment>
                    }
            </div>
                {this.props.isConnectivity && (this.props?.chartData === undefined || this.props?.chartData?.length === 0) && <div className={`${this.props.isResponsive ? "" : "ms-3"} no-data-message`}>No data available</div>}
            </div>
        );
    }
}

export default ConnectivityPieChart;
