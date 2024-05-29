import React from 'react';
import './ToggleSwitch.scss'

export interface IProps {
    id?: string;
    selected: boolean;
    toggleSelection: any;
    negativeText?: string;
    positiveText?: string;
}

export interface IState {

}

export class ToggleSwitch extends React.Component<IProps, IState>{
    imgUrl: string = "../Images/info-circle.svg";

    constructor(props: IProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="dlr-toggle-container">
                <div className="toggle-switch">
                    <input type="checkbox" className="checkbox" name={'toggle_' + this.props.id} id={'id_' + this.props.id} checked={!!this.props.selected} />
                    <label className="label" htmlFor={'id_' + this.props.id} onClick={() => this.props.toggleSelection(!this.props.selected, this.props.id)}>
                        <span className="inner" data-before={!!this.props.positiveText ? this.props.positiveText : "Yes"} data-after={!!this.props.negativeText ? this.props.negativeText : "No"} />
                        <span className="switch" />
                    </label>
                </div>
            </div>
        );
    }
}
