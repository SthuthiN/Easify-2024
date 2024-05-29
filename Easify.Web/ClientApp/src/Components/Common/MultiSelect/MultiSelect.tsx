import * as React from 'react';
import './MultiSelect.scss'
import { OverlayTrigger, Popover } from "react-bootstrap";

export interface IProps {
    showSelectAll: boolean;
    options: Array<any>;
    selected: Array<any>;
    toggleOption: any;
    id: string;
    disabled?: boolean;
    class?: string;
}

export interface IState {
    isDropDownOpen: boolean;
    options: Array<any>;
    search: string;
}

export class MultiSelectComponent extends React.Component<IProps, IState>{

    selectedAll: boolean = false;
    wrapper: any;

    constructor(props: IProps) {
        super(props);
        this.state = {
            isDropDownOpen: false,
            options: [],
            search: ''
        };
    }


    componentDidUpdate(props: IProps) {
        if (!!props.options && props.options.length != this.state.options.length)
            this.setState({ options: props.options.filter(opt => this.props.selected.includes(opt.key)).concat(props.options.filter(opt => !(this.props.selected.includes(opt.key)))) });
    }

    toggleDropDown() {
        setTimeout(() => {
            let inpSearch = document.getElementById('inpSearch');
            if (!!inpSearch)
                inpSearch.focus();
        }, 0);

        this.setState({ isDropDownOpen: !this.state.isDropDownOpen, search: '' }, () => {
            this.setState({
                options: this.props.options.filter(opt => this.props.selected.includes(opt.key)).concat(this.props.options.filter(opt => !(this.props.selected.includes(opt.key))))
            });
        });
    }

    onChange(option: any) {
        let selected = [...this.props.selected];
        if (!!option) {
            let index = selected.indexOf(option.key);
            if (index > -1) {
                selected.splice(index, 1);
                this.selectedAll = false
            }
            else
                selected.push(option.key);
        }

        this.props.toggleOption(selected, this.props.id);
    }

    selectAll() {
        let selected = this.selectedAll ? [] : (this.state.options ? this.state.options.map(_ => _.key) : []);
        this.selectedAll = !this.selectedAll;
        this.props.toggleOption(selected, this.props.id);
    }

    getValue(value: any) {
        let index = this.state.options.findIndex(_ => _.key == value)
        return index > -1 ? this.state.options[index].text : (!!value ? value : '');
    }

    render() {
        let filteredOptions = this.state.options.filter(_ => !!this.state.search && !!_ ? (_.text).toString().toLowerCase().indexOf((this.state.search).toString().toLowerCase()) > -1 : true);
        return (
            <div className="dlr-drop-down" ref={wrapper => (this.wrapper = wrapper)}>
                <OverlayTrigger
                    trigger="click"
                    placement="bottom-start"
                    rootClose
                    overlay={
                        <Popover id={`dlrMultiDropDown`}>
                            <Popover.Content>
                                <div className={`dropdown-list ${!!this.props.class ? this.props.class : ""}`}>
                                    <input type="text" id="inpSearch" className="inp-search" autoComplete="off" placeholder="Search" onChange={(event) => this.setState({ search: event && event.target ? event.target.value : '' })} value={this.state.search} />
                                    {
                                        !!filteredOptions.length
                                            ? <div className="options">
                                                {
                                                    !!(this.props.showSelectAll && filteredOptions.length) && <div className="chk-option select-all" onClick={() => this.selectAll()}>
                                                        <input type="checkbox" className="inp-check" checked={this.state.options && this.props.selected && this.state.options.length == this.props.selected.length} />
                                                        <div className="lbl-option">{this.props.selected && this.state.options.length == this.props.selected.length ? 'Unselect All' : 'Select All'}</div>
                                                    </div>
                                                }
                                                {<div className={`user-options ${filteredOptions && filteredOptions.length > 5 ? 'scroll' : ''}`}>
                                                    {
                                                        filteredOptions.map((opt, i) => {
                                                            return <div key={i} className="chk-option" onClick={() => this.onChange(opt)} title={opt.text}>
                                                                <input className="inp-check" type="checkbox" checked={!!this.props.selected && !!(this.props.selected?.filter(_ => !!opt && _.key == opt.key) && this.props.selected[this.props.selected?.findIndex(option => option.key === opt.key)]?.Value)} />
                                                                <div className="lbl-option">{opt.text}</div>
                                                            </div>
                                                        })
                                                    }
                                                </div>}
                                            </div>
                                            : <div className="no-content">No content</div>
                                    }
                                </div>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <button className={`btn-dropdown ${this.props.disabled ? 'btn-disable' : ''}`} onClick={() => this.toggleDropDown()} disabled={!!this.props.disabled}>
                        <div className="selected-opt">{!!this.props.selected && !!this.props.selected?.length ? (this.props.selected?.length == 1 ? (this.getValue(this.props.selected[0])) : `${this.props.selected?.filter(opt=>opt.Value)?.length} selected`) : 'All'}</div>
                        <span className="drop-down-icon">▼</span>
                        {this.props.selected && this.props.selected.length ? <span className="close-icon" onClick={() => this.props.toggleOption([], this.props.id)}>x</span> : ''}
                    </button>
                </OverlayTrigger>
            </div>
        );
    }
}