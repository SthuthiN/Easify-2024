import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DatePicker.scss'

export interface IProps {
    selectedvalue: any;
    onchange: any;
    class: string;
}

export interface IState {
}

class DatePickerComponent extends React.Component<IProps, IState>{

    minDate: Date = new Date();

    constructor(props: IProps) {
        super(props);
        this.state = {
        };

        this.minDate.setDate(this.minDate.getDate() - 89);
    }

    onChange(value: any) {
        this.props.onchange(value);
    }

    render() {
        return <DatePicker
            selected={this.props.selectedvalue as unknown as Date}
            onChange={(date: any) => this.onChange({ target: { name: 'donatedOn', value: date } })}
            dateFormat='MM/dd/yyyy'
            minDate={this.minDate}
            maxDate={new Date()}
            className={`form-control ${this.props.class}`}
            strictParsing
            placeholderText="MM/DD/YYYY"
        />;
    }
}
export default DatePickerComponent;