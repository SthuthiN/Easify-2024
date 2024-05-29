import { IKeyValue, IOption, ISelectOption, ReportFilter } from "../Interfaces/Common/IOption";
import { IColor } from "../Interfaces/Common/IColor";
import { NodeTypeLables } from "./Enums";
import { IWebTour } from "../Interfaces/Common/IUserContext";


export const DefaultCurrency = "USD";

export const PaginationLimit = 10;
export const PageNeighbours = 5;

export const InvalidExtensions = ["exe", "dll"];
export const FileSizeMaxLimit: number = 5242880; // Collectively in Bytes of 5 MB.

export const ReportTypes = {
    DonationsSummaryReport: "Donations Summary Report",
    DonationsReportByQuarter: "Donations Report By Quarter",
    RejectedDonationsReport: "Rejected Donations Report",
    ApprovalDonations: "Approval Donations"
}

export const DefaultFilters = {
    approvalstatus: [],
    usertypes: [],
    yearofdonation: [],
    timePeriod: []
} as ReportFilter;

export const DefaultCampaignDesc = "We match minimum of $100 USD up to $5,000 USD against your donations for the Campaign 2021";

export const FileExtentions: string[] = ["xls", "xlsx", "doc", "docx", "pdf", "ppt", "pptx"];

export const Months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const MonthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ApprovalStatus = {
    PendingVerification: "Pending Verification",
    InProgress: "In Progress",
    PendingValidation: "Pending Validation",
    PendingApproval: "Pending Approval",
    Approved: "Approved",
    Rejected: "Rejected",
    Paid: "Paid"
}

export const Approvals = [
    "Pending Verification",
    "In Progress",
    "Pending Validation",
    "Pending Approval",
    "Approved",
    "Rejected",
    "Paid"
]

export const StageStatus = {
    Pending: "Pending",
    Rejected: "Rejected",
    Approved: "Approved"
}

export const RegionOptions: Array<ISelectOption> = [
    { label: 'US', value: 'US' } as ISelectOption,
    { label: 'APAC', value: 'APAC' } as ISelectOption,
    { label: 'Europe', value: 'Europe' } as ISelectOption
];

export const AppKeys = {
    DonationPolicy: "DonationPolicy"
}

export const DonationReports = {
    DonationSummaryCSV: {
        Headers: ["Employee Name", "Donated Amount (USD)", "Matched Donation(USD)", "Approval Status", "Year Of Donation", "Policy Accepted", "User Type", "Total"],
        Keys: ["EmployeeName", "DonatedAmount_USD", "MatchDonation_USD", "ApprovalStatus", "DonatedOn", "PolicyAccepted", "UserType", "Total"]
    },
    DonationQuarterCSV: {
        Headers: ["Submitted On", "Donated On", "Employee Name", "Donated Amount (USD)", "Matched Donation (USD)", "Approval Status", "Corporate Counsel Approved On", "Team1 Approved On", "Team2 Approved On", "Admin Approved On", "Paid On", "Organization Name", "Tax Id", "Organization Address", "User Type", "Action"],
        Keys: ["CreatedOn", "DonatedOn", "CreatedEmployeeName", "DonatedAmount_USD", "MatchDonation_USD", "ApprovalStatus", "CorporateCounselOn", "Team1ApprovedOn", "Team2ApprovedOn", "AdminApprovedOn", "PaidApprovedOn", "OrganizationName", "TaxId", "OrganizationAddress", "UserType", "Action"]
    },
    DonationRejectedCSV: {
        Headers: ["Employee Name", "Donated Amount (USD)", "Organization Name", "Tax Id", "Organization Address", "Donated On", "Rejection Comment", "Rejected By", "Submitted On", "User Type", "Action"],
        Keys: ["CreatedEmployeeName", "DonatedAmount_USD", "OrganizationName", "TaxId", "OrganizationAddress", "DonatedOn", "CommentsHistory", "RejectedBy", "CreatedOn", "UserType", "Action"]
    }
}

export const RejectedReportHead = `<tr style="background-color: #17375D;color: white;">
<th style="width: 169px;">Employee Name</th>
<th style="width: 136px;">Donated Amount (USD)</th>
<th style="width: 136px;">Organization Name</th>
<th style="width: 155px;">Tax Id</th>
<th style="width: 155px;">Organization Address</th>
<th style="width: 155px;">Donated On</th>
<th style="width: 155px;">Rejection Comment</th>
<th style="width: 155px;">Rejected By</th>
<th style="width: 155px;">Submitted On</th>
<th style="width: 155px;">User Type</th>
<th style="width: 120px;">Action</th></tr>`;

export const RejectedReportBody = `<tr>
<td>{CreatedBy}</td>
<td>{DonatedAmount_USD}</td>
<td>{OrganizationName}</td>
<td>{TaxId}</td>
<td>{OrganizationAddress}</td>
<td>{DonatedOn}</td>
<td>{CommentsHistory}</td>
<td>{RejectedBy}</td>
<td>{CreatedOn}</td>
<td>{UserType}</td>
<td><a href="{Action}" target="_blank">Details</a></td></tr>`;


export const Alphbets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export const DLRImage = "data:image/png;base64,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";

//Summary report
export const SummaryReportTemplate = `<html style="font-family: sans-serif;"><head><style>table.report-pdfexport{border-collapse: collapse;}table.report-pdfexport,td,th {border: 1px solid #bebcbc;font-size: 12px; text-align: center;} th{padding: 8px;vertical-align: super;}.report-pdfexport .total{font-weight: bold;}</style></head><body><div style="padding: 0px 28px; margin-top: 15px;"><div style="display: inline-block;"><img style="width: 75%;" src="${DLRImage}" /></div><div style="display: inline-block;vertical-align: top;"><label style="font-weight: bold;font-size: 22px;margin: 0px 0px 0px 40px;position: relative;top: 9px;font-family: sans-serif;">DONATIONS SUMMARY REPORT</label></div></div><div style="padding: 28px;"><table class="report-pdfexport"><thead>{Head}</thead><tbody>{tbody}</tbody></table></div><div style="padding: 21px 28px;"><label>DLR - Internal Use Only </label><label style="padding-left: 30px;">Prepared by {UserName} - {DateTime}</label></div></body></html>`;

export const SummaryReportHead = `<tr style="background-color: #17375D;color: white;"><th style="width: 169px;">Employee Name</th><th style="width: 136px;">Donated Amount (USD)</th><th style="width: 136px;">Matched Donation(USD)</th><th style="width: 155px;">Approval Status</th><th style="width: 129px;">Year Of Donation</th><th style="width: 138px;">Policy Accepted</th><th style="width: 120px;">User Type</th><th style="width: 122px;">Action</th></tr>`;

export const SummaryReportBody = `<tr><td>{EmployeeName}</td><td>{Donated Amount (USD)}</td><td>{Matched Donation(USD)}</td><td>{Approval Status}</td><td>{Year Of Donation}</td><td>{Policy Accepted}</td><td>{User Type}</td><td><a href="{Action}" target="_blank">Details</a></td></tr>`;

export const ReportPDFBodyTotal = `<tr><td></td><td class="total">Total</td><td class="total">{Total}</td><td></td><td></td><td></td><td></td><td></td></tr>`;

//Quarterly report
export const QuarterlyReportTemplate = `<html style="font-family: sans-serif;"><head><style>table.report-pdfexport{border-collapse: collapse;}table.report-pdfexport,td,th {border: 1px solid #bebcbc;font-size: 12px; text-align: center;} th{padding: 8px;vertical-align: super;}.report-pdfexport .total{font-weight: bold;}</style></head><body><div style="padding: 0px 28px; margin-top: 15px;"><div style="display: inline-block;"><img style="width: 75%;" src="${DLRImage}" /></div><div style="display: inline-block;vertical-align: top;"><label style="font-weight: bold;font-size: 22px;margin: 0px 0px 0px 40px;position: relative;top: 9px;font-family: sans-serif;">DONATIONS REPORT BY QUARTER</label></div></div><div style="padding: 28px;"><table class="report-pdfexport"><thead>{Head}</thead><tbody>{tbody}</tbody></table></div><div style="padding: 21px 28px;"><label>DLR - Internal Use Only </label><label style="padding-left: 30px;">Prepared by {UserName} - {DateTime}</label></div></body></html>`;

export const QuarterlyReportHead = `<tr style="background-color: #17375D;color: white;"><th style="width: 169px;">Submitted On</th><th style="width: 136px;">Donated On</th><th style="width: 136px;">Employee Name</th><th style="width: 155px;">Donated Amount (USD)</th><th style="width: 129px;">Matched Donation (USD)</th><th style="width: 138px;">Approval Status</th><th style="width: 120px;">Corporate Counsel Approved On</th><th style="width: 120px;">Team1 Approved On</th><th style="width: 120px;">Team2 Approved On</th><th style="width: 120px;">Admin Approved On</th><th style="width: 120px;">Corporate</th><th style="width: 120px;">Paid On</th><th style="width: 120px;">Organization Name</th><th style="width: 120px;">Tax Id</th><th style="width: 120px;">User Type</th><th style="width: 120px;">Action</th></tr>`;

export const QuarterlyReportBody = `<tr><td>{CreatedOn}</td><td>{DonatedOn}</td><td>{CreatedBy}</td><td>{DonatedAmount_USD}</td><td>{MatchDonation_USD}</td><td>{ApprovalStatus}</td><td>{CorporateCounselOn}</td><td>{Team1ApprovedOn}</td><td>{Team2ApprovedOn}</td><td>{AdminApprovedOn}</td><td>{PaidApprovedOn}</td><td>{OrganizationName}</td><td>{TaxId}</td><td>{OrganizationAddress}</td><td>{UserType}</td><td><a href="{Action}" target="_blank">Details</a></td></tr>`;

//Rejected report
export const RejectedReportTemplate = `<html style="font-family: sans-serif;"><head><style>table.report-pdfexport{border-collapse: collapse;}table.report-pdfexport,td,th {border: 1px solid #bebcbc;font-size: 12px; text-align: center;} th{padding: 8px;vertical-align: super;}.report-pdfexport .total{font-weight: bold;}</style></head><body><div style="padding: 0px 28px; margin-top: 15px;"><div style="display: inline-block;"><img style="width: 75%;" src="${DLRImage}" /></div><div style="display: inline-block;vertical-align: top;"><label style="font-weight: bold;font-size: 22px;margin: 0px 0px 0px 40px;position: relative;top: 9px;font-family: sans-serif;">REJECTED DONATIONS REPORT</label></div></div><div style="padding: 28px;"><table class="report-pdfexport"><thead>{Head}</thead><tbody>{tbody}</tbody></table></div><div style="padding: 21px 28px;"><label>DLR - Internal Use Only </label><label style="padding-left: 30px;">Prepared by {UserName} - {DateTime}</label></div></body></html>`;

export const NAMap = '../../Assets/NA_Map.png';

export const Colors: IColor[] = [
    { Name: "Yello", Code: "#fccf02" },
    { Name: "Green", Code: "#00d87e" },
    { Name: "Cyan", Code: "#00e5fa" },
    { Name: "Blue", Code: "#1f00e1" },
    { Name: "Indigo", Code: "#7700ec" },
    { Name: "Pink", Code: "#ff00e1" }
]

export const MapAPIKey = "AAPKc140f4b525ea40cab4ab3268d285301cvJxX91b34dbU21A9o3jtXKik_WbeSWWxXCxwInojiOCrqHl2ObFola104SVvUzSI";

export const DLRPoints = [

    {
        //NA US - Cranbury
        Region: 1,
        long: '-74.51772241230152',
        lat: '40.3099385',
    },
    {
        //US - Cedar Knolls
        Region: 1,
        long: '-74.448765',
        lat: '40.8220442',
    },
    {
        //US - Parsippany

        Region: 1,
        long: '-74.4259866',
        lat: '40.8578772',
    },
    {
        // EMEA UK -Chertsey
        Region: 2,
        long: '-0.5038294',
        lat: '51.392296',
    },
    {
        //UK-Chessington
        Region: 2,
        long: '51.358336',
        lat: '-0.2986216',
    },
    {
        //France-Clichy
        Region: 2,
        long: '2.30551',
        lat: '48.9026',
    },
    {
        //  LATAM Jamaica-Kingston
        Region:5,
        long: '-767674',
        lat: '17.9771',
    },
    {
        //Uruguay-Montevideo
        Region: 5,
        long: '-561711',
        lat: '-34.858',
    },
    {
        //Bahamas-Nassau
        Region: 5,
        long: '-77.35',
        lat: '25.0834',
    },

    {
        //APAC Sri Lanka-Colombo
        Region: 3,
        long: '798578',
        lat: '6.932',
    },
    {
        //Timor-Leste - Dili
        Region: 3,
        long: '1255795',
        lat: '-8.5594',
    },
    {
        //Tajikistan - Dushanbe
        Region: 3,
        long: '687739',
        lat: '38.56',
    },

]
export const CompetitorPoints = [
    {
        //NA US - Commack
        Region: 1,
        long: '-73.2928943',
        lat: '40.8428759',
    },
    {//US - Clifton
        Region: 1,
        long: '-74.1637553',
        lat: '40.8584328',
    },
    {
        //US - Chappaqua
        Region: 1,
        long: '-73.764855',
        lat: '41.1595399',
    },
    {
        //PAPAC akistan - Islamabad
        Region: 3,
        long: '731666',
        lat: '33.7',
    },
    {
        //Burma - Nay Pyi Taw
        Region: 3,
        long: '961186',
        lat: '19.7666',
    },
    {
        //Palau -Ngerulmud
        Region: 3,
        long: '1346242',
        lat: '7.5',
    },
    {
        //EMEA Cabo Verde - Praia
        Region: 2,
        long: '-235167',
        lat: '14.9167',
    },
    {
        //Qatar-Qatar
        Region: 2,
        long: '51533',
        lat: '25.2866',
    },
    {
        //Switzerland- Rafz
        Region: 2,
        long: '8.5402669',
        lat: '47.6115934',
    },
    {
        //
        Region: 5,
        long: '1346242',
        lat: '7.5',
    },
    {
        //
        Region: 5,
        long: '1346242',
        lat: '7.5',
    },
    {
        //
        Region: 5,
        long: '1346242',
        lat: '7.5',
    },

]

export const NodeTypes = [
    NodeTypeLables.CloudCompute,
    NodeTypeLables.DigitalMediaPublicEdge,
    NodeTypeLables.CloudPublicEdge,
    NodeTypeLables.CloudPrivateEdge
]

export const AnalyticsNavigations = [
    { name: "Cloud and Digital Media Deployments", link: 'https://app.powerbi.com/groups/ea3c5bc5-a2e2-44d9-b894-2d41b11705e2/reports/c4488921-9e03-4732-a353-fff1a4a8e7c8/', IsDisabled:false },
    { name: 'Connectivity Analytics - PeeringDB', link: 'https://app.powerbi.com/groups/ea3c5bc5-a2e2-44d9-b894-2d41b11705e2/reports/c46b2c24-f2cd-4f25-b628-978df78034ff/', IsDisabled: false },
    { name: 'Cross Connect', link: 'https://app.powerbi.com/groups/ea3c5bc5-a2e2-44d9-b894-2d41b11705e2/reports/dfca55a7-e59e-4d26-909d-069d1469a066/', IsDisabled: false },
    { name: 'Cross Connect - Trend Analytics', link: 'https://app.powerbi.com/groups/ea3c5bc5-a2e2-44d9-b894-2d41b11705e2/reports/d946aeaa-c104-4dfe-ab30-3770f1b5e342/', IsDisabled: false },
    { name: 'Cloud Connect', link: 'https://app.powerbi.com/groups/ea3c5bc5-a2e2-44d9-b894-2d41b11705e2/reports/72b095ef-2986-4b96-b2f3-47e3a68f8b8d/', IsDisabled: false },
]

export const PowerOptions: Array<IOption> = [
    { label: '<= 1 MW', value: 7 },
    { label: '> 1MW', value: 8 },
    { label: '<200 KW', value: 9 },
    { label: '200KW- 500KW', value: 10 },
   { label: 'None', value:11 }
];
export const LabelNames = [
    { name: "Select All" },
    { name: "Cloud Compute" },
    { name: "Cloud Private Edge" },
    { name: "Cloud Public Edge" },
    { name: "Digital Media Compute" },
    { name: "Digital Media Public Edge" }
]   

export const SpCapabilityOptions: IOption[] = [
    { label: "All",value:0 },
    { label: "Announced",value:1 },
    { label: "Deployed" ,value:2},
    { label: "Planned", value: 3 }
]

export const SupplyOptions: { [key: string]: Object; }[] = [
    { text: "All", key: 0 },
    { text: "Under Construction", key: 1 },
    { text: "Planned", key: 2 },
    { text: "Land", key: 3 },
    { text: "Deployed", key: 4 },
    { text: "Announced", key: 5 },
    { text: "Retired", key:6}
]

export const SpColumnNames: { [key: string]: Object; }[] = [
    
    {
        text: "country", key: "country"
    },
    {
        text: "Market", key: "Market"
    },
    {
        text: "City", key: "City"
    },
    {
        text: "DC Provider", key: "DC Provider"
    },
]


export const BattleCardLink = "https://digitalrealty.sharepoint.com/sites/MID/_layouts/15/Doc.aspx?sourcedoc=9EE41CAE-C271-4365-9A7F-FEFE0142744A&action=embedview&wdAr=1.7777777777777777"

export const SecretShopperDropdownOptions = [
    { name: "Global" },
    { name: "NA" },
    { name: "EMEA" },
    {name : "APAC"}
]

export const InventoryDropdownOptions = [
    {name:"Global Inventory Report"}
]

export const TourSteps: IWebTour []= [
    {
        element: ".knowledge-intro",
        intro: 'Access the Market Intelligence report and AI system',
        title: "Market AI",

    },
    {
        element: '.Qmar-intro',
        intro: 'Opens the latest QMAR report',
        title: "QMAR"

    },
    
    {
        element: '.marketPlan-intro',
        intro: 'Opens the latest market plan intelligence data',
        title: "Market Overviews"

    },
    {
        element: '.analytics-intro',
        intro: 'Access the MID advanced analytics platform',
        title: "Analytics"

    },
    {
        element: '.battlecards-intro',
        intro: 'Opens competitor battlecards',
        title: "Battlecards"

    },
    {
        element: '.secretshopper-intro',
        intro: 'View the latest global secret shopper results and view trends by region and market',
        title: "Secret Shopper"

    },
    {
        element: '.capacity-intro',
        intro: 'View the latest capacity reports by region',
        title: "Capacity"

    },
    {
        element: '.inventory-intro',
        intro: 'View the latest Global Inventory Reports',
        title: "Inventory"

    },
    {
        element: '.sectionType-intro',
        intro: 'Choose between the different dashboard that focus on different views of data',
        title: "Section"
    },
    {
        element: '.dlr-market-toggle-intro',
        intro: 'Switch between total Market and DLR only statistics',
        title: "Market or DLR"

    },
    
    {
        element: '.bookmark-intro',
        intro: 'Bookmark your recent filters and views to come back to later',
        title: "Bookmark"

    },
    {
        element: '.refresh-icon ',
        intro: 'Refresh all data and filters',
        title: "Refresh"

    },
    {
        element: '#themeselectro',
        intro: 'Select an appropriate color scheme for your requirements',
        title: "MID Themes"

    },
    {
        element: '#EMEA-card',
       intro: 'Select this box to choose a region, country or market of preference',
        title: "Region Tile"

    },
    {
        element: '.marketoverview-intro',
        intro: 'View a high-level summary of the selected market',
        title: "Market Overview"

    },
    {
        element: '.dataTable-intro',
        intro: 'View the complete data set',
        title: "Data Table All/Recent"

    },
    {
        element: '.marketActivities-intro',
        intro: 'View latest market activities',
        title: "Market Activities"

    },
    {
        element: '.coms-intro',
        intro: 'Access to the latest competitor deals',
        title: "Comparables"

    },
    {
        element: '.map-tab-intro',
        intro: 'Access an advanced mapping tool',
        title: "MAP"

    },
    {
        element: '.midMap-tab-intro',
        intro: 'Access to advanced 3D mapping',
        title: "MIDMAP"

    },
    {
        element: '.maximize-icon-intro',
        intro: 'Enlarge the view for easy working and screen shots',
        title: "Expand"
    },
    {
        element: '.switch-container-intro',
        intro: 'Toggle switches to filter data',
        title: "Toggle Switches"
    },
    {
        element: '.supplyBenchmark-view-intro-class',
        intro: 'Select hyperlinks to compare source data',
        title: "Analyst Supply Benchmark",
    },
    {
        element: '.advanced-view-intro-class',
        intro: 'Select hyperlinks to open advanced views of the data',
        title: "Advanced Views",
    },
    {
       element: '.form-container',
        intro: 'Quickly add data into the MID database (DB) – goes through an approval process (basic intelligence can be added and a market owner will refine your input and update the DB)',
        title: "Form"
    },
    {
        element: '.analytics-footer-intro',
        intro: 'Access to MID data management app',
        title: "Analytics"
    },
    {
        element: '.supply-footer-intro',
        intro: 'Access to latest supply data of MID ',
        title: "App Supply"
    },
    {
        element: '.cloudDeployments-footer-intro',
        intro: 'Access to latest cloud deployments  data of MID',
        title: "Cloud Deployments"
    },
    {
        element: '.support-intro',
        intro: 'Press to quickly access support and raise a ticket for resolution',
        title: "Support"
    },
    
]

export const TabTourSteps: IWebTour[] = [
    {
        element: '.sectionType-intro',
        intro: 'Load the view based on section selected ',
        title: "Section"
    },
    {
        element: '.dlr-market-toggle-intro',
        intro: 'Switch between total Market and DLR only statistics',
        title: "Market or DLR"

    },

    {
        element: '.bookmark-intro',
        intro: 'Bookmark your recent filters and views to come back to later',
        title: "Bookmark"

    },
    {
        element: '.refresh-icon ',
        intro: 'Refresh all data and filters',
        title: "Refresh"

    },
    {
        element: '#themeselectro',
        intro: 'Select an appropriate color scheme for your requirements',
        title: "MID Themes"

    },
    //{
    //    element: '.header-navbar-intro',
    //    intro: 'Opens the list of page level navigations ',
    //    title: "Navigation Menu"

    //},
    {
        element: '#EMEA-card',
        intro: 'Select this box to choose a region, country or market of preference',
        title: "Region Tile"

    },
    //{
    //    element: '.reports-menu-intro',
    //    intro: 'Opens the list of  navigations in reports section',
    //    title: "Reports Menu"
    //},
    {
        element: '.switch-container-intro',
        intro: 'Toggle switches to filter data',
        title: "Toggle Switches"
    },
    {
        element: '.advanced-view-intro-class',
        intro: 'Select hyperlinks to open advanced views of the data ',
        title: "Advanced Views",
    },
    {
        element: '.form-container',
        intro: 'Quickly add data into the MID database (DB) – goes through an approval process (basic intelligence can be added and a market owner will refine your input and update the DB)',
        title: "Form"
    },
    {
        element: '.analytics-footer-intro',
        intro: 'Access to MID data management app',
        title: "Analytics"
    },
    {
        element: '.supply-footer-intro',
        intro: 'Access to latest supply data of MID ',
        title: "App Supply"
    },
    {
        element: '.cloudDeployments-footer-intro',
        intro: 'Access to latest cloud deployments  data of MID',
        title: "Cloud Deployments"
    },
    {
        element: '.support-intro',
        intro: 'Press to quickly access support and raise a ticket for resolution',
        title: "Support"
    },

]

export const LatestUpdates: string[] = [
    "Welcome to the MID, Market Intelligence Data Platform.",
    "The MID provides a single source of DLR-approved external and internal data for analysis.",
    "With the MID, you can effortlessly access a range of up-to-date information, including supply, demand, economics, demographics, and market intelligence reports, through simple dashboards, advanced analytics, and raw data.",
    "Select the tutorial below for a quick functionality overview or proceed directly to your personalised dashboard."
]


export const PageLevelToggleOptions: { label: string, value: any, disabled: boolean }[] = [
    { label: "Supply", value: 0, disabled: false },
    { label: "Demand", value: 1, disabled: false },
    { label: "Supply & Demand", value: 2, disabled: false },
    { label: "Economics", value: 3, disabled: false },
    { label: "Financial", value: 4, disabled: false },
    { label: "Cloud Deployments", value: 5, disabled: false },
    { label: "Connectivity", value: 6, disabled: false }
]

export const PageLevelDropdownOptions: { label: string, value: any, disabled: boolean }[] = [
    { label: "Supply", value: 0, disabled: false },
    { label: "Demand", value: 1, disabled: true },
    { label: "Supply & Demand", value: 2, disabled: true },
    { label: "Economics", value: 3, disabled: true },
    { label: "Financial", value: 4, disabled: true },
    { label: "Cloud Deployments", value: 5, disabled: true },
    { label: "Connectivity", value: 6, disabled: true }
]


export const MapLegendColors = [
    { index: 1, color: "#6dc067" },
    { index: 2, color: "#f6db35" },
    { index: 2, color: "#4185be" },
    { index: 4, color: "#8f499c" },
    { index: 5, color: "#f78822" },
    { index: 6, color: "#696969" },
    { index: 7, color: "#a6970d"},
    { index: 8, color: "#053061" },
    { index: 9, color: "#b2182b" },
    { index: 10, color: "#FFA07A" },
    { index: 11, color: "#800000" },
    { index: 12, color: "#000080" },
    { index: 13, color: "#ffb847" },
    { index: 14, color: "#4d571f" },
    { index: 15, color: "#f54785" },
]

export const ProviderIndicators ={
    digitalRealty : "Digital Realty",
    equinix : "Equinix",
    others : "Others",
    digitalRealtyColor : "#00454f",
    equinixColor : "#ff0000",
}

export const PageTypeOptions: { label: string, value: any, disabled: boolean }[] = [
    { label: "Market", value: 0, disabled:false },
    { label: "DLR", value: 1, disabled:false }
]

export const PowerBiLinks = {
    MIDMAP:"https://app.powerbi.com/reportEmbed?reportId=b99ec3c2-ceaa-4d5b-af6a-2bfce57df81b&autoAuth=true&ctid=45d53a40-131c-4896-94ef-8cd3538b3834"
}