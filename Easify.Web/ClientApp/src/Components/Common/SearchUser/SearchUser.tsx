import * as React from 'react';

import './SearchUser.scss';
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Utility } from '../../../Services/Common/Utility';
import { IEmployee } from '../../../Interfaces/IApproverGroup';
import { FieldType } from '../../../Common/Enums';

export interface IProps {
    onChangesEmps: any;
    employees: Array<IEmployee>;
    selectedEmps?: Array<IEmployee>;
    data: any;
    disabled: boolean;
    className?: string;
    showUsersinbox?: boolean;
    defaultwidth?: boolean;
}

export interface IState {
    searchText: string;
    displayEmployees: Array<IEmployee>;
    showEmpDropdown: boolean;
    isExist: boolean;
}

export class SearchUsers extends React.Component<IProps, IState>{
    _utility: Utility;
    wrapper: any;
    parentWrapper: any;

    searchInputRef: any;
    persona: any = {};
    btnpersona: any = {};
    totalExtraBtns: number = 0;

    constructor(props: IProps, state: IState) {
        super(props);
        this.searchInputRef = React.createRef();
        this.state = {
            searchText: "",
            displayEmployees: [],
            showEmpDropdown: false,
            isExist: false
        };
    }

    componentDidMount() {
        this._utility = new Utility();
        this.totalExtraBtns = this.props.selectedEmps && this.props.selectedEmps ? this.props.selectedEmps.length - 1 : this.totalExtraBtns;

        document.addEventListener("mousedown", this.onOutsideClick, false);
    }

    componentWillReceiveProps(props: IProps) {
        this.totalExtraBtns = this.props.selectedEmps && this.props.selectedEmps ? this.props.selectedEmps.length - 1 : this.totalExtraBtns;
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onOutsideClick, false);
    }

    onOutsideClick = e => {
        if (!!e && !!this.wrapper && !this.wrapper.contains(e.target)) {
            this.setState({ searchText: '', showEmpDropdown: false });
        }
    }

    applyRandomColor(empName?: string, jobtitle?: string) {
        this.persona = {
            imageUrl: '',
            imageInitials: empName ? (empName as string)!.match(/\b(\w)/g)!.join('').slice(0, 2) : "",
            text: empName ? empName : "",
            secondaryText: jobtitle ? jobtitle : ""
        }
    }

    addSelectedEmpButtons(e: IEmployee) {
        let selectedEmps = this.props.selectedEmps ? [...this.props.selectedEmps] : [];
        if (this.props.employees && this.props.employees.findIndex(emp => emp.ID == e.ID) > -1) {
            selectedEmps.push(e);
            this.setState({ searchText: '', showEmpDropdown: false });
            this.props.onChangesEmps(selectedEmps, this.props.data);
        }
    }

    removeSelectedEmp(e: IEmployee) {
        if (e && e.ID) {
            let selected = (this.props.selectedEmps ? this.props.selectedEmps : []).filter(_ => _.ID != e.ID)
            this.props.onChangesEmps(selected, this.props.data);
        }
    }

    onSearchUserChange(e: any) {
        if (!!e.target.value && e.target.value.length > 1) {
            let data: IEmployee[] = this.props.employees.filter((i: IEmployee) => !!i.Name && i.Name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
            data = !!this.props.selectedEmps && !!this.props.selectedEmps.length ? data.filter(_ => _.Email && this.props.selectedEmps?.findIndex(emp => !!emp.Email && emp.Email.toLowerCase() == _.Email) == -1) : data;
            let isExist = !!data && !!data.length ? false : (!!this.props.selectedEmps && !!this.props.selectedEmps.length ? this.props.selectedEmps.findIndex(_ => _.Name && _.Name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) > -1 : false);
            data = this._utility.sortArrayByProperty(data, 'Name', false, FieldType.String);
            this.setState({
                showEmpDropdown: true,
                displayEmployees: data,
                isExist: isExist,
                searchText: e.target.value,
            })
        }
        else {
            this.setState({
                showEmpDropdown: false,
                displayEmployees: [],
                searchText: e.target.value,
            })
        }
    }

    getSelectedPeople() {
        return this.props.selectedEmps && this.props.selectedEmps.length ? this.props.selectedEmps.map(_ => _.Name).toString() : '';
    }

    public render() {
        return (
            <div className={`form-group search-user-container mb-0 p-0 col`} ref={wrp => (this.parentWrapper = wrp)}>
                <OverlayTrigger
                    trigger="click"
                    placement="bottom-start"
                    show={this.state.showEmpDropdown}
                    rootClose
                    overlay={
                        <Popover id="dlrEmployeePicker">
                            <Popover.Content style={!this.props.defaultwidth ? { width: this.parentWrapper && this.parentWrapper.offsetWidth } : {}}>
                                <div ref={wrapper => (this.wrapper = wrapper)} className="search-results">{(this.state.showEmpDropdown) && this.state.displayEmployees.map((d: IEmployee, i: number) => {
                                    return <div className="roles-item cursor-pointer" onClick={() => this.addSelectedEmpButtons(d)} style={!this.props.defaultwidth ? { width: this.parentWrapper && this.parentWrapper.offsetWidth } : {}}>
                                        {true && this.applyRandomColor(d.Name, d.Role)}
                                        <div className="person-card">
                                            <div className={`profile-pic ${d.color}`}><span>{this.persona.imageInitials}</span></div>
                                            <div className="profile-details">
                                                <div className="profile-name">{this.persona.text}</div>
                                                {this.persona.secondaryText ? <div className="profile-role">{this.persona.secondaryText}</div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                })}
                                    {(this.state.showEmpDropdown) && this.state.displayEmployees && this.state.displayEmployees.length == 0 &&
                                        <div className="p-2 search-user-click">{this.state.isExist ? 'User already exist...!' : 'No Users Found...!'}</div>
                                    }</div>

                            </Popover.Content>
                        </Popover>
                    }
                >
                    <div className={`input-group search-user-click ${!!this.props.className ? this.props.className : ''}`}>
                        <input value={this.state.searchText} onChange={(e) => this.onSearchUserChange(e)} type="text" id="inpSearchEmployee" className={`form-control p-0 pl-2 ${this.props.disabled ? 'disabled' : ''}`} disabled={this.props.disabled} placeholder="Search..." autoComplete="off" ref={this.searchInputRef} />
                    </div>
                </OverlayTrigger>
            </div>
        );
    }
}