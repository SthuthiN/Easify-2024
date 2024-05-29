export interface IGroupsMeta {
    Groups: Array<IApproverGroup>;
    Employees: Array<IEmployee>;
}

export interface IApproverGroup {
    ID: number;
    GroupName: string;
    Region: string;
    Employees: Array<IEmployee>;
    EmployeeCount: number;
    IsActive?: boolean;
}

export interface IEmployee {
    ID: number;
    Name: string;
    Email: string;
    Role: string;
    IsActive: boolean;
    color: string;
}