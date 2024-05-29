export enum ConfirmStatus {
    Confirm = "Confirm",
    Cancel = "Cancel"
}

export enum ApprovalAction {
    Approve = "Approve",
    Reject = "Reject"
}

export enum NotificationType {
    Info,
    Warning,
    Success,
    Failure
}

export enum ExportType {
    CSV,
    PDF,
    EXCEL
}

export enum SortOrder {
    Ascending = 'asc',
    Decending = 'desc'
}

export enum ConfigurationsTab {
    Users
}
export enum DocumentViewerTab {
    DocumentViewer
}


export enum FieldType {
    Date,
    String,
    Number
}

export enum NodeTypes {
    CloudCompute = "CloudCompute",
    DigitalMediaPublicEdge = "DigitalMediaPublicEdge",
    CloudPublicEdge = "CloudPublicEdge",
    CloudPrivateEdge = "CloudPrivateEdge"
}

export enum NodeTypeLables {
    CloudCompute = "Cloud Compute",
    DigitalMediaPublicEdge = "Digital Media Public Edge",
    CloudPublicEdge = "Cloud Public Edge",
    CloudPrivateEdge = "Cloud Private Edge"
}

export enum ReportTabs {
    MarketOverview = "Market Overview",
    DataTableAll = "Data Table All/Recent",
    MarketActivities = "Market Activities",
    Map = "MAP",
    Comparables = "Comparables"
}

export enum ReportSubTabs {
    Supply = "Supply",
    Connectivity="Connectivity",
    Capabilities = "Cloud Deployments",
    Exchanges = "Exchanges",
    Demand = "Demand",
    InventoryByType = "Inventory By Type",
    Inventory="Inventory"
}
export enum SupplyFilters {
    Table = "table-map",
    Top10 = "top-10",
    Top5 = "top-5",
    TotalOrActualCompetetion = "total-competition",
    Equinix = "equinix",
    DLR = "digital-realty",
    Kilowatt = "mw-kw",
    PowerOrSpace = "power-space",
    SqmOrSqft = "sqm-sqft",
    Colo = "colo",
    Scale = "scale",
    JV = "jv",
    AvailablePower="available-power"
}

export enum ConnectivityFilter {
    Table = "table-map",
    Enterprise = "enterprise",
    Unknown = "unknown",
    OnlyNetworks = "only-networks",
    Connectivity = "connectivity",
    PublicSector = "public-sector",
    OnlyPops = "only-pops",
    NetworkAndPops = "network-and-pops",
    Content= "content"
}

export enum SpCapabilityFilter {
    SelectAll = "select-all",
    CloudCompute = "cloud-compute",
    CloudPrivateEdge = "cloud-private-edge",
    CloudPublicEdge = "cloud-public-edge",
    DigitalMediaCompute = "digital-media-compute",
    DigitalMediaPublicEdge = "digital-media-public-edge"
}

export const enum ConnectivityInfoTpye  {
    RouteCollector = "Route Collector",
    RouteServer = "Route Server",
    NSP= "NSP",
    NetworkServices = "Network Services",
    CableOrDSLOrISP = "Cable/DSL/ISP",
    Content = "Content",
    Enterprise = "Enterprise",
    EducationalOrResearch = "Educational/Research",
    Government = "Government",
    NonProfit = "Non-Profit",
    BlanksOrNULLS = "Blanks/NULLS",
    NotDisclosed = "Not Disclosed",
}

export const enum InventoryFilterType {
    JV="JV"
}
export const enum SupplyFilterType {
    UnderConstruction = "Under Construction",
    Planned = "Planned",
    Land = "Land",
    Equinix = "DPV-10000008",
    Deployed = "Deployed",
    Retired = "Retired",
    Announced="Announced"
}

export const enum CloudDeploymentFilterType {
    Announced = "Announced",
    Planned = "Planned",
    Deployed = "Deployed",
    DataCenterProviderName = "DataCenterProviderName",
    CloudProviderName ="CloudProviderName"
}

export const enum AnalysisPptTitles {
    AnalystSupplyBenchmark = "Analyst Supply Benchmark",
    SupplyAdvancedAnalysis = "Supply Advanced Analysis",
    InventoryAdvancedAnalysis = "Inventory Advanced Analysis",
    ConnectivityAdvancedAnalysis = "Connectivity Advanced Analysis",
    CloudDeploymentsAdvancedAnalysis = "Cloud Deployments Advanced Analysis",
    AdvancedTable = "Advanced Table",
    InventoryBenchmark = "Inventory Benchmark"
}

export const enum SupportErrorMessages {
    TitleIsRequired = "Title is required",
    DescriptionIsRequired = "Description is required",
    ImageShouldBeLessThanFourMb = "Image size should be less than or equal to 4MB",
    MaximumSizeForImage = " Maximum size for image is 4MB",
    MaximumSizeNote = "Image size should be less than or equal to 4MB",
    MaximumTitleMessageNote = "Maxmimum words allowed is 73",
    MaximumDescriptionMessageNote = "Maximum words allowed is 500"
}

export const enum AdvancedAnalysisReports {
    InventoryBenchmark = "https://app.powerbi.com/reportEmbed?reportId=fbba8759-21db-4aca-81e7-77cf64602dbc&autoAuth=true&ctid=45d53a40-131c-4896-94ef-8cd3538b3834",
    InventoryAdvancedAnalysis ="https://app.powerbi.com/reportEmbed?reportId=9ae3a248-1287-4998-aeb7-be254f6c4f5d&autoAuth=true&ctid=45d53a40-131c-4896-94ef-8cd3538b3834"
}

export enum UserConfigFieldTypes {
    PageType = "pageType",
    DefaultModule = "defaultModule",
    DefaultTab = "defaultTab",
    Email = "email",
    SectionType = "sectionType"
}