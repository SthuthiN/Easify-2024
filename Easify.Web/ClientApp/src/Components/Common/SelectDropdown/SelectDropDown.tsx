import * as  React from 'react';
import './SelectDropDown.scss'
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Placement } from 'react-bootstrap/esm/Overlay';
import { IOption } from '../../../Interfaces/Common/IOption';

export interface IProps {
    options: IOption[];
    selected: any;
    toggleOption: any;
    disabled?: boolean;
    placeholder?: string;
    class?: string;
    data?: any;
    height?: number;
    createnewopt?: boolean;
    id: any;
    placement?: string;
    defaultwidth?: boolean;
    mainClass?: string;
}

export interface IState {
    isDropDownOpen: boolean;
    search: string;
}

export class SelectDropDownComponent extends React.Component<IProps, IState>{

    wrapper: any;
    parentWrapper: any;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isDropDownOpen: false,
            search: ''
        };
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.onOutsideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onOutsideClick, false);
    }

    toggleDropDown() {
        if (!this.props.disabled)
            this.setState({ isDropDownOpen: !this.state.isDropDownOpen, search: '' }, () => {
                if (this.state.isDropDownOpen) {
                    let inpSearch = document.getElementById(`inpSearch_dropdown${this.props.id}`);
                    if (!!inpSearch)
                        inpSearch.focus();
                }
            });
    }

    onOutsideClick = (e: any) => {
        if (!!e && !!this.wrapper && !this.wrapper.contains(e.target)) {
            this.setState({ isDropDownOpen: false, search: '' });
        }
    }

    onChange(option: any) {
        if (!!option) {
            this.setState({ search: '', isDropDownOpen: false });
            this.props.toggleOption(option.value, this.props.data);
        }
    }

    getSelectedOption() {
        var value;
        if (this.props && this.props.selected != undefined) {
            var selectedOption: Array<any> = this.props.options.filter((option) => {
                return option.value == this.props.selected
            });
            if (selectedOption && selectedOption.length > 0) {
                value = selectedOption[0];
            }
        }

        return value ? value.label : (this.props.selected != undefined && this.props.selected != null && this.props.selected != "" ? this.props.selected : (this.props.placeholder ? this.props.placeholder : 'Select'));
    }

    render() {
        let filteredOptions = this.props.options.filter(_ => this.state.search != undefined && this.state.search != null && this.state.search != '' && !!_ && _.label != undefined && _.label != null ? (_.label).toString().toLowerCase().indexOf((this.state.search).toString().toLowerCase()) > -1 : true);
        let placement = !!this.props.placement ? this.props.placement : 'bottom-start';
        return (
            <div className={`dlr-single-drop-down ${!!this.props.mainClass ? this.props.mainClass : ''}`} ref={wrp => (this.parentWrapper = wrp)}>
                <OverlayTrigger
                    trigger="click"
                    placement={placement as Placement}
                    show={this.state.isDropDownOpen}
                    rootClose
                    overlay={
                        <Popover id={`dlrSingleDropDown`}>
                            <Popover.Content>
                                <div ref={wrapper => (this.wrapper = wrapper)}>
                                    <div className={`dropdown-list ${!!this.props.class ? this.props.class : ""}`} style={!this.props.defaultwidth ? { width: this.parentWrapper && this.parentWrapper.offsetWidth } : {}}>
                                        {
                                            !!filteredOptions.length
                                                ? <div className="options">
                                                    {<div className={`user-options ${filteredOptions && filteredOptions.length > 5 ? 'scroll' : ''}`}>
                                                        {
                                                            filteredOptions.map((opt, index) => {
                                                                return <div key={index} className={`lbl-option ${opt && this.props.selected == opt.value ? 'active' : ''} ${opt.disabled ? "disabled" : ""}`} onClick={() => !opt.disabled && this.onChange(opt)} tabIndex={opt.disabled ? -1 : 0} title={opt.label}>{opt.label}</div>
                                                            })
                                                        }
                                                    </div>}
                                                </div>
                                                : (
                                                    this.props.createnewopt
                                                        ? <div className="options">
                                                            <div className="user-options">
                                                                <div className={`lbl-option`} onClick={() => this.onChange({ value: this.state.search, label: this.state.search })}>{this.state.search}</div>
                                                            </div>
                                                        </div>
                                                        : <div className="no-content">No options</div>
                                                )
                                        }
                                    </div>
                                </div>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <button className={`btn-dropdown row m-0 ${this.props.disabled ? 'btn-disable' : ''} ${!!this.props.class ? this.props.class : ''}`} disabled={!!this.props.disabled} style={{ height: this.props.height ? this.props.height : 43 }} onClick={() => this.toggleDropDown()}>
                        {
                            !!this.props.disabled
                                ? <div className={`inp-search ${this.props.disabled ? 'btn-disable' : ''}`}><span>{this.getSelectedOption()}</span></div>
                                : <input type="text" title={`${this.getSelectedOption()}`} id={`inpSearch_dropdown${this.props.id}`} className={`inp-search ${this.props.disabled ? 'btn-disable' : ''}`} autoComplete="off" autoCorrect="off" spellCheck={false} aria-autocomplete="list" placeholder={this.getSelectedOption()} onChange={(event) => this.setState({ isDropDownOpen: true, search: event && event.target ? event.target.value : '' })} value={this.state.search} disabled={!!this.props.disabled} />
                            //: this.state.isDropDownOpen
                            //    ? <input type="text" id="inpSearch_dropdown" className={`inp-search ${this.props.disabled ? 'btn-disable' : ''}`} autoComplete="off" autoCorrect="off" spellCheck={false} aria-autocomplete="list" placeholder={this.getSelectedOption()} onChange={(event) => this.setState({ search: event && event.target ? event.target.value : '' })} value={this.state.search} disabled={!!this.props.disabled} />
                            //    : <div className={`inp-search ${this.props.disabled ? 'btn-disable' : ''}`}><span>{this.getSelectedOption()}</span></div>
                        }
                        {
                            !this.props.disabled
                                ? <div className="drop-down-icon-con">
                                    <span className="drop-down-icon">
                                        <svg height="33" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-19bqh2r arrow-down">
                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                        </svg>
                                    </span>
                                </div>
                                : ''
                        }
                    </button>
                </OverlayTrigger>
            </div>
        );
    }
}