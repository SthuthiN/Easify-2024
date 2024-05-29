import * as React from 'react';
import './Switch.scss';
export interface ISwitchProps {
    label: string;
    name: string;
    isFullScreen: boolean;
    toggleSwitch: any;
    isDisabled: boolean;
    isChecked?: boolean;
    isFromNavigation?: boolean;
}

export interface ISwitchState {
    isChecked: boolean;
}
class Switch extends React.Component<ISwitchProps, ISwitchState> {

    constructor(props) {
        super(props)

        this.state = {
            isChecked: this.props.isChecked === undefined ? false : this.props.isChecked
        }
    }

    //componentDidMount() {
    //    this.props.toggleSwitch(this.props.name, false)
    //}
   
    handleClick(event) {
        this.props.toggleSwitch(event.target.name, event.target.checked)
        //this.setState({ isChecked: event.target.checked }, () => {
           
        //})
    }

   
    componentWillReceiveProps(nextProps: ISwitchProps) {
        if (nextProps !== undefined && nextProps.isChecked !== this.state.isChecked) {
            this.setState({ isChecked: nextProps.isChecked !== undefined ? nextProps.isChecked:false });
        }
    }
    render() {
        return <>
            <div className={`form-check form-switch d-flex align-items-center px-0 ${this.props.isFromNavigation ? "justify-content-center" : ""}`}>
                <input checked={this.state.isChecked} className={`form-check-input ${this.props.isFullScreen ? "switch-full-screen" : "switch-small-screen"} ${this.props.isFromNavigation ? "header-navigation-switch rounded-2 mt-0" : ""}`} name={this.props.name} type="checkbox" id="flexSwitchCheckDefault" onChange={(e) => this.handleClick(e)} disabled={this.props.isDisabled}></input>
                <label className={`form-check-label pt-1 ps-1 fw-bold ${this.props.isFullScreen ? "switch-label-full-screen" : "switch-label-small-screen"}`} >{this.props.label}</label>
            </div>
        </>
    }
}
export default Switch;