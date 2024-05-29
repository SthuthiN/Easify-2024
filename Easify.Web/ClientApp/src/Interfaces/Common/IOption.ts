export interface IMultiOption {
    key: any;
    text: any;
    title?: any;
    data?: any;
}

export interface ISelectOption {
    value: any;
    label: any;
    data?: any;
    title?: any;
}

export interface ReportFilter {
    approvalstatus: Array<any>;
    usertypes: Array<any>;
    yearofdonation: Array<any>;
    timePeriod: Array<any>;
}
export interface IOption {
    value: string | number;
    label: string | number;
    disabled?: boolean; 
}
export interface IPropertyValue {
    property: number;
    value: string;
}
export interface IKeyValue {
    key: number;
    Value: boolean | string;
}
