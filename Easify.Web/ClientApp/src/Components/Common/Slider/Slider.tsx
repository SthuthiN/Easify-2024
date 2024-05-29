import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../Slider/Slider.scss';
import { ISliderProps } from 'office-ui-fabric-react';
export interface ISliderComponentProps {
    className: string;
    isDisabled: boolean;
    minValue: number;
    maxValue: number;
    getSliderValue: any;
    labelName: string;
    value: number | number[];
}
export interface ISliderComponentState {
    value: number | number[];
}
export class SliderComponent extends React.Component<ISliderComponentProps, ISliderComponentState>{


    constructor(props: ISliderComponentProps) {
        super(props);
        this.state = {
            value: this.props.value === undefined ? [props.minValue, props.maxValue] : [props?.value[0], props?.value[1]]
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange = (event, newValue : number | number[]) => {
        this.setState({ value: newValue });
        this.props.getSliderValue(newValue);
    };
    componentWillReceiveProps(nextProps: ISliderComponentProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({ value: [nextProps?.value[0], nextProps?.value[1]]})
        }
    }
    render() {
        return (
            <>
                <div className="col">
                    <div className="slider-label row">{this.props.labelName}</div>
                    <div className={!!this.props.className && this.props.className}>
                        <Box sx={{ width: 150 }}>
                            <Slider
                                size="small"
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                disabled={this.props.isDisabled}
                                min={this.props.minValue}
                                max={this.props.maxValue}
                                onChange={this.onChange}
                                value={this.state.value }
                            />
                        </Box>
                    </div>
                </div>
            </>
        );
    }
}
