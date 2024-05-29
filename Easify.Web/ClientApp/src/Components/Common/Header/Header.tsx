import * as React from 'react';
import { Link } from 'react-router-dom'
import { IUserContext } from '../../../Interfaces/Common/IUserContext';
import './Header.scss';
import { ComponentRoute } from '../../../Common/ComponentRoute';
import iconHome from '../../../Assets/Icons/HomeIcon.png';
import iconKnowledge from '../../../Assets/Icons/KnowledgeIcon.png';
import colorTheme from '../../../Assets/Icons/ThemeIcon.png';
import saveWhite from '../../../Assets/Icons/saveWhite.png';
import refreshWhite from '../../../Assets/Icons/refreshWhite.png';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { IMarket } from '../../../Interfaces/Dashboard/IMarket';
import { DashboardService } from '../../../Services/DashboardService';
import { Utility } from '../../../Services/Common/Utility'
import { INavigationResources } from '../../../Interfaces/Common/INavigationResources';
import { IDocument } from '../../../Interfaces/Dashboard/IDocument';
import { IRegion } from '../../../Interfaces/Dashboard/IRegion';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { NotificationType } from '../../../Common/Enums';
import { ICity } from '../../../Interfaces/Dashboard/ICity';
import { ICountry } from '../../../Interfaces/Dashboard/ICountry';
import { IBusinessRegion } from '../../../Interfaces/Dashboard/IBusinessRegion';
import { IBookmark } from '../../../Interfaces/Common/IBookmark';
import { ISelectOption } from '../../../Interfaces/Common/IOption';
import { CallOut } from '../CallOut/CallOut';
import { IThemeContextProps } from '../../../Theme/Model';
import { Logo } from '../../../Common/SVGIcons/MIDLogo/Logo';
import BookmarkDropdownComponent from '../BookmarkDropdown/BookmarkDropdown';
import { AnalyticsNavigations, InventoryDropdownOptions, PageLevelToggleOptions, SecretShopperDropdownOptions } from '../../../Common/Constants';
import Switch from '../Switch/Switch';
import AnalysisPPTComponent from '../../Dashboard/Report/Common/AnalysisPPT/AnalysisPPT';
import { IAdvancedDocument } from '../../../Interfaces/Dashboard/IAdvancedDocument';
import ReactSelectComponent from '../ReactSelect/ReactSelect';
import { SelectDropDownComponent } from '../SelectDropdown/SelectDropDown';
import { IDashboardFilter } from '../../../Interfaces/Dashboard/IDashboardFilter';
import { GearFill } from 'react-bootstrap-icons';

interface IHeaderProps extends RouteComponentProps {
    userContext: IUserContext;
    updateActiveTab: any;
    changeTheme: any;
    activeTab: string;
    markets: IMarket[];
    bookmarks: IBookmark[];

    saveBookmark: any;
    selectBookmark: any;
    resetBookmark: any;
    deleteBookmark: any;

    selectedMarketFilter: IMarket;
    selectedBookmark: IBookmark;
    isBookmarkBlocked: boolean;
    defaultTheme: IThemeContextProps;
    width: number;
    isResponsive: boolean;
    updateSwitch?: () => void;
    isDLR?: boolean;

    battlecardDocument: IAdvancedDocument;
    capacityDocuments: IAdvancedDocument[];
    secretShopperDocuments: IAdvancedDocument[];
    closeMenu: boolean;
    updateDashboardFilters?: any;
    dashboardFilter?: IDashboardFilter;
}

interface IHeaderState {
    markets: IMarket[];
    regions: IRegion[];
    businessRegions: IBusinessRegion[];
    countries: ICountry[];
    cities: ICity[];
    isRegionSelected: boolean;
    isBusinessRegionSelected: boolean;
    isCountrySelected: boolean;
    isCitySelected: boolean;
    currentMarket: IMarket;
    navigationResources: INavigationResources;
    isDocumentsFetched: boolean;
    document: IDocument;
    activeTab: string;
    isMarketPlanOpen: boolean;
    isQmarOpen: boolean;
    isCapacitiOpen: boolean;
    isInventoryOpen: boolean;
    bookmarks: IBookmark[];
    showSubmitConfirmationPopup: boolean;
    bookmark: IBookmark;
    isBookmarkSaved: boolean;
    bookmarkOptions: ISelectOption[];
    bookmarkTitle: string;
    isBookmarkTitleChanged: boolean;
    isAnalytics: boolean;
    showNavigation: boolean;
    showBookmarks: boolean;
    isDLR: boolean;
    showBattleCardPPT: boolean;
    showCapacityPPT: boolean;
    isSecretShopperOpen: boolean;
    showSecretShopperPPT: boolean;
    advancedDocument: IAdvancedDocument;
    showInventoryPPT: boolean;
    battlecardDocument: IAdvancedDocument;
    capacityDocuments: IAdvancedDocument[];
    secretShopperDocuments: IAdvancedDocument[];
    selectedPage: any;
    showDropdownOptions: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    private _dashboardService: DashboardService;
    markets: IMarket[] = [];
    _utility: Utility;
    bookmarkOptions: ISelectOption[] = [];
    initialMarket: IMarket = {
        Region: "",
        BusinessRegion: "",
        Country: "",
        City: "",
        Id: 0,
        AvailablePower: 0,
        TotalPower: 0,
        TotalPowerPercentUtilized: 0,
        TotalRSF: 0,
        RegionClass: "",
        RegionId: 0,
        BusinessRegionId: 0,
        CountryId: 0,
        State: "",
        StateId: 0,
        Latitude: "",
        Longitude: "",
        IsInternal: false,
        GeographicalId: "",
        MarketId: ""
    };
    initialBookmark: IBookmark = {
        Id: 0,
        Email: "",
        RegionId: 0,
        Title: "",
        BusinessRegionId: 0,
        CityId: "",
        CountryId: 0,
        IsDLR: false,

    };
    savedState = sessionStorage.getItem('headerState');

    initialState: IHeaderState = this.savedState ? JSON.parse(this.savedState) : {
        secretShopperDocuments: this.state !== undefined ? this.state.secretShopperDocuments : this.props.secretShopperDocuments,
        activeTab: this.props.activeTab,
        showBattleCardPPT: false,
        advancedDocument: {} as IAdvancedDocument,
        isAnalytics: false,
        isBookmarkSaved: false,
        battlecardDocument: this.props.battlecardDocument,
        document: this.state !== undefined ? this.state.document : {} as IDocument,
        showBookmarks: false,
        showCapacityPPT: false,
        bookmark: {} as IBookmark,
        showInventoryPPT: false,
        isBookmarkTitleChanged: true,
        isBusinessRegionSelected: false,
        isCapacitiOpen: false,
        isCitySelected: false,
        isCountrySelected: false,
        isDLR: this.state !== undefined ? this.state.isDLR : false,
        isDocumentsFetched: this.state !== undefined ? this.state.isDocumentsFetched : false,
        isInventoryOpen: false,
        isMarketPlanOpen: false,
        isQmarOpen: false,
        isRegionSelected: false,
        isSecretShopperOpen: false,
        bookmarkOptions: this.state !== undefined ? this.state.bookmarkOptions : [],
        bookmarks: this.state !== undefined ? this.state.bookmarks : [],
        showSubmitConfirmationPopup: false,
        showNavigation: this.state !== undefined ? this.state.showNavigation : false,
        bookmarkTitle: this.state !== undefined ? this.state.bookmarkTitle : "",
        businessRegions: this.state !== undefined ? this.state.businessRegions : [],
        capacityDocuments: this.state !== undefined ? this.state.capacityDocuments : this.props.capacityDocuments,
        cities: this.state !== undefined ? this.state.cities : [],
        countries: this.state !== undefined ? this.state.countries : [],
        currentMarket: this.state !== undefined ? this.state.currentMarket : [],
        markets: this.state !== undefined ? this.state.markets : [],
        navigationResources: this.state !== undefined ? this.state.navigationResources : [],
        regions: this.state !== undefined ? this.state.regions : [],
        showSecretShopperPPT: false,
        selectedPage: this.props.dashboardFilter?.IsDemandSelected ? 1 : this.props.dashboardFilter?.IsEconomicsSelected ? 3 : this.props.dashboardFilter?.IsFinancialSelected ? 4 :
            this.props.dashboardFilter?.IsSupplySelected ? 0 : this.props.dashboardFilter?.IsSupplyAndDemandSelected ? 2 : 0
    };


    constructor(props: IHeaderProps) {
        super(props);
        this.state = this.initialState;

        this._dashboardService = new DashboardService();
        this._utility = new Utility();
        this.changeTheme = this.changeTheme.bind(this);
        this.onChangeField = this.onChangeField.bind(this);

    }

    componentDidMount() {
        this.loadNavigationResources();
        this.updateActiveTab();
        this.getRegions();
    }
    componentWillReceiveProps(nextProps: IHeaderProps) {
        if (nextProps.battlecardDocument !== this.props.battlecardDocument) {
            this.setState({ battlecardDocument: nextProps.battlecardDocument })
        }
        if (nextProps.secretShopperDocuments !== this.props.secretShopperDocuments) {
            this.setState({ secretShopperDocuments: nextProps.secretShopperDocuments })
        }
        if (nextProps.capacityDocuments !== this.props.capacityDocuments) {
            this.setState({ capacityDocuments: nextProps.capacityDocuments })
        }
        if (!nextProps.dashboardFilter?.IsDemandSelected && !nextProps.dashboardFilter?.IsEconomicsSelected && !nextProps.dashboardFilter?.IsFinancialSelected &&
            !nextProps.dashboardFilter?.IsSupplyAndDemandSelected && !nextProps.dashboardFilter?.IsCloudDeploymentsSelected && !nextProps.dashboardFilter?.IsConnectivitySelected) {
            this.setState({ selectedPage: 0 })
        }
        if (nextProps.dashboardFilter?.IsDemandSelected) {
            this.setState({ selectedPage: 1 })
        }
        if (nextProps.dashboardFilter?.IsEconomicsSelected) {
            this.setState({ selectedPage: 3 })
        }
        if (nextProps.dashboardFilter?.IsFinancialSelected) {
            this.setState({ selectedPage: 4 })
        }
        if (nextProps.dashboardFilter?.IsSupplySelected) {
            this.setState({ selectedPage: 0 })
        }
        if (nextProps.dashboardFilter?.IsSupplyAndDemandSelected) {
            this.setState({ selectedPage: 2 })
        }
        if (nextProps.dashboardFilter?.IsCloudDeploymentsSelected) {
            this.setState({ selectedPage : 5 })
        }
        if (nextProps.dashboardFilter?.IsConnectivitySelected) {
            this.setState({ selectedPage : 6 })
        }
        sessionStorage.setItem('headerState', JSON.stringify(this.state));
    }
    componentDidUpdate(prevProps: IHeaderProps) {
        if (prevProps.location.pathname !== this.props.location.pathname)
            this.updateActiveTab();
        if (this.props.markets !== prevProps.markets) {
            this.setState({
                markets: this.props.markets
            }, () => {
                this.buildRegions();
            });

        }
        if (this.props.bookmarks !== prevProps.bookmarks) {
            this.buildBookmarkOptions(this.props.bookmarks);
            var bookmark = this.state.bookmark;
            var existingBookmark = this.props.bookmarks.find(b => b.RegionId === bookmark.RegionId && b.BusinessRegionId === bookmark.BusinessRegionId && b.CountryId === bookmark.CountryId && b.CityId === bookmark.CityId);
            if (!!existingBookmark) {
                bookmark = existingBookmark;
            }

            this.setState({
                bookmarks: this.props.bookmarks,
                bookmarkOptions: this.bookmarkOptions,
                bookmark: bookmark
            });
        }
        if (this.props.selectedBookmark !== prevProps.selectedBookmark) {
            this.setState({
                bookmark: this.props.selectedBookmark
            })
        }
        if (this.props.closeMenu !== prevProps.closeMenu && this.props.closeMenu) {
            this.setState({ showNavigation: false })
        }
        var currentState = { ...this.state };
        currentState.isQmarOpen = false;
        currentState.isMarketPlanOpen = false;
        currentState.isCapacitiOpen = false;
        currentState.isInventoryOpen = false;
        currentState.isSecretShopperOpen = false;
        currentState.isAnalytics = false;
        currentState.showNavigation = false;
        sessionStorage.setItem('headerState', JSON.stringify(currentState));
    }

    getRegions() {
        var regions: IRegion[] = [];
        this.props?.markets?.forEach((market) => {
            var region: IRegion = { Id: 0, Class: "", Name: "", IsDisabled: false };
            region.IsDisabled = true;
            region.Id = market.RegionId;
            region.Name = market.Region;
            region.Class = market.RegionClass;

            if (regions.filter(r => r.Id === market.RegionId).length === 0) {
                regions.push(region);
            }
        })
        this.setState({
            regions: regions
        })
    }
    updateActiveTab() {
        var activeTab = "";
        switch (this.props.location.pathname) {
            case ComponentRoute.Dashboard:
                activeTab = this.props.location.pathname;
                this.setState({
                    isBusinessRegionSelected: false,
                    isCitySelected: false,
                    isCountrySelected: false,
                    isRegionSelected: false,
                    currentMarket: this.initialMarket
                })
                break;
            case ComponentRoute.KnowledgeBase:
                activeTab = this.props.location.pathname;
                break;
            case ComponentRoute.MarketPlan:
                activeTab = this.props.location.pathname;
                break;
            case ComponentRoute.Qmar:
                activeTab = this.props.location.pathname;
                break;
        }

        this.setState({
            activeTab: activeTab
        })
    }

    loadNavigationResources() {
        this._dashboardService.getNavigationResources().then((navigationResources: INavigationResources) => {
            this.setState({
                navigationResources: navigationResources,
                isDocumentsFetched: true
            }, () => { this.buildRegions(); });
        })
    }

    buildBookmarkOptions(bookmarks: IBookmark[]) {
        this.bookmarkOptions = [];
        bookmarks.map((bookmark) => {
            return this.bookmarkOptions.push({ value: bookmark.Id, label: bookmark.Title, data: bookmark.Title, title: bookmark.Title })
        })

    }

    buildRegions() {
        var regions = this._utility.getRegions(this.state.markets, this.state.navigationResources?.Documents)
        this.setState({
            regions: regions
        });
    }

    selectRegion(event: React.MouseEvent<HTMLDivElement, MouseEvent>, region: string, regionId: number): void {
        event.stopPropagation();
        this.setState({
            isRegionSelected: true,
            isBusinessRegionSelected: false,
            isCountrySelected: false,
            isCitySelected: false,
            currentMarket: {
                Region: region,
                BusinessRegion: "",
                Country: "",
                City: "",
                Id: 0,
                AvailablePower: 0,
                TotalPower: 0,
                TotalPowerPercentUtilized: 0,
                TotalRSF: 0,
                RegionClass: "",
                RegionId: regionId,
                BusinessRegionId: 0,
                CountryId: 0,
                State: "",
                StateId: 0,
                Latitude: "",
                Longitude: "",
                IsInternal: false,
                GeographicalId: "",
                MarketId: ""
            },
            businessRegions: this._utility.getBusinessRegions(this.state.markets, regionId)
        });
    }

    selectBusinessRegion(event: React.MouseEvent<HTMLDivElement, MouseEvent>, businessRegion: string, businessRegionId: number) {
        event.stopPropagation();

        this.setState({
            isBusinessRegionSelected: true,
            isCountrySelected: false,
            isCitySelected: false,
            countries: this._utility.getCountries(this.state.markets, businessRegionId, this.state.currentMarket.RegionId === 1),
            currentMarket: {
                Region: this.state.currentMarket.Region,
                BusinessRegion: businessRegion,
                Country: "",
                City: "",
                Id: 0,
                AvailablePower: 0,
                TotalPower: 0,
                TotalPowerPercentUtilized: 0,
                TotalRSF: 0,
                RegionClass: "",
                BusinessRegionId: businessRegionId,
                RegionId: this.state.currentMarket.RegionId,
                CountryId: 0,
                Latitude: "",
                Longitude: "",
                State: "",
                StateId: 0,
                IsInternal: false,
                GeographicalId: "",
                MarketId: ""
            }
        })
    }

    selectCountry(event: React.MouseEvent<HTMLDivElement, MouseEvent>, country: string, countryId: number) {
        event.stopPropagation();
        try {
            this.setState({
                isCountrySelected: true,
                isCitySelected: false,
                currentMarket: {
                    Region: this.state.currentMarket.Region,
                    BusinessRegion: this.state.currentMarket.BusinessRegion,
                    Country: country,
                    City: "",
                    Id: 0,
                    AvailablePower: 0,
                    TotalPower: 0,
                    TotalPowerPercentUtilized: 0,
                    TotalRSF: 0,
                    RegionClass: "",
                    RegionId: this.state.currentMarket.RegionId,
                    BusinessRegionId: this.state.currentMarket.BusinessRegionId,
                    CountryId: countryId,
                    Latitude: "",
                    Longitude: "",
                    State: "",
                    StateId: 0,
                    IsInternal: false,
                    GeographicalId: "",
                    MarketId: ""
                },
                cities: this._utility.getCities(this.state.markets, countryId, this.state.navigationResources.Documents, this.state.currentMarket.RegionId === 1)
            });
        }
        catch (ex) {
            console.log(ex)
        }
    }

    selectCity(event: React.MouseEvent<HTMLDivElement, MouseEvent>, city: string, id: string): void {
        this.setState({
            isCitySelected: true,
            currentMarket: {
                Region: this.state.currentMarket.Region,
                BusinessRegion: this.state.currentMarket.BusinessRegion,
                Country: this.state.currentMarket.Country,
                City: city,
                Id: 0,
                AvailablePower: 0,
                TotalPower: 0,
                TotalPowerPercentUtilized: 0,
                TotalRSF: 0,
                RegionClass: "",
                RegionId: this.state.currentMarket.RegionId,
                BusinessRegionId: this.state.currentMarket.BusinessRegionId,
                CountryId: this.state.currentMarket.CountryId,
                Latitude: "",
                Longitude: "",
                State: "",
                StateId: 0,
                IsInternal: false,
                GeographicalId: "",
                MarketId: id
            },
            isMarketPlanOpen: false
        }, () => {
            this.getDocumentByCity();
            this.setState({
                isRegionSelected: false,
                isBusinessRegionSelected: false,
                isCountrySelected: false,
                isCitySelected: false,
                currentMarket: this.initialMarket
            });
        });
    }

    getDocumentByCity() {
        const { history } = this.props;
        const document = this._utility.getDocument(this.state.navigationResources.Documents, false, true, this.state.currentMarket);
        if (document) {
            this.setState({
                document: document
            }, () => {
                history.push(ComponentRoute.MarketPlan, { data: { isResponsive: this.props.isResponsive, document: this.state.document, siteUrl: this.state.navigationResources.SiteUrl, isDLR: this.props.isDLR, battleCardDocument: this.props.battlecardDocument, secretShopperDocuments: this.props.secretShopperDocuments, capacityDocuments: this.props.capacityDocuments } });
                this.props.updateActiveTab(ComponentRoute.MarketPlan);
            });
        }
    }

    getDocumentByRegion(region: string, id: number): void {
        try {
            const { history } = this.props;
            var market: IMarket = {
                Region: region, RegionClass: "",
                BusinessRegion: "", GeographicalId: "", IsInternal: false, TotalRSF: 0, City: "", AvailablePower: 0, Country: "", Id: 0, TotalPower: 0, TotalPowerPercentUtilized: 0, BusinessRegionId: 0, CountryId: 0, RegionId: id,
                Latitude: "",
                Longitude: "",
                State: "",
                StateId: 0,
                MarketId: ""
            }
            const document = this._utility.getDocument(this.state.navigationResources.Documents, true, false, market);
            if (document) {
                if (this.state.isQmarOpen) {
                    this.setState({
                        document: document,
                        isQmarOpen: false
                    }, () => {
                        history.push(ComponentRoute.Qmar, { data: { isDLR: this.props.isDLR, isResponsive: this.props.isResponsive, document: this.state.document, siteUrl: this.state.navigationResources.SiteUrl, battleCardDocument: this.props.battlecardDocument, secretShopperDocuments: this.props.secretShopperDocuments, capacityDocuments: this.props.capacityDocuments } });
                        this.props.updateActiveTab(ComponentRoute.Qmar);
                    });
                }
                else if (this.state.isCapacitiOpen) {
                    this.setState({
                        document: document,
                        isCapacitiOpen: false,
                        showCapacityPPT: true
                    });
                }
            }
        }
        catch (error) {
            this._utility.showNotification("Error while retrieving document for region", NotificationType.Failure);
        }

    }

    getCapacityDocumentByRegion(region: string): void {
        try {
            const document = this._utility.getCapacityDocument(this.state.isSecretShopperOpen ? this.state.secretShopperDocuments : this.state.capacityDocuments, region);
            if (this.state.isSecretShopperOpen) {
                this.setState({
                    advancedDocument: document as IAdvancedDocument,
                    isSecretShopperOpen: false,
                    showSecretShopperPPT: true
                });
            }
            else if (this.state.isCapacitiOpen) {
                this.setState({
                    advancedDocument: document as IAdvancedDocument,
                    isCapacitiOpen: false,
                    showCapacityPPT: true
                });
            }


        }
        catch (error) {
            this._utility.showNotification("Error while retrieving document for region", NotificationType.Failure);
        }

    }

    toggleSecretShopperDropdown() {
        if (this.state.activeTab !== ComponentRoute.secretshopper) {
            this.setState({
                isSecretShopperOpen: !this.state.isSecretShopperOpen
            })
        }
        else {
            this.setState({ isSecretShopperOpen: !this.state.isSecretShopperOpen })
        }
        if (this.state.isQmarOpen || this.state.isAnalytics || this.state.isMarketPlanOpen) {
            this.setState({ isQmarOpen: false, isAnalytics: false, isMarketPlanOpen: false })
        }
    }

    toggleInventoryDropdown() {
        if (this.state.activeTab !== ComponentRoute.secretshopper) {
            this.setState({
                isInventoryOpen: !this.state.isInventoryOpen
            })
        }
        else {
            this.setState({ isInventoryOpen: !this.state.isInventoryOpen })
        }
        if (this.state.isQmarOpen || this.state.isAnalytics || this.state.isMarketPlanOpen || this.state.isSecretShopperOpen) {
            this.setState({ isQmarOpen: false, isAnalytics: false, isMarketPlanOpen: false, isSecretShopperOpen: false })
        }
    }

    toggleMarketPlanDropdown() {
        if (this.state.activeTab !== ComponentRoute.MarketPlan) {
            this.setState({
                isMarketPlanOpen: !this.state.isMarketPlanOpen
            });

        }
        else {
            this.setState({ isMarketPlanOpen: !this.state.isMarketPlanOpen })
        }
        if (this.state.isQmarOpen || this.state.isAnalytics) {
            this.setState({
                isQmarOpen: false,
                isAnalytics: false

            });
        }
    }

    toggleQmarDropdown() {
        if (this.state.activeTab !== ComponentRoute.Qmar) {
            this.setState({
                isQmarOpen: !this.state.isQmarOpen
            });

        }
        else {
            this.setState({ isQmarOpen: !this.state.isQmarOpen })
        }
        if (this.state.isMarketPlanOpen || this.state.isAnalytics) {
            this.setState({
                isMarketPlanOpen: false,
                isAnalytics: false
            });
        }
    }
    toggleCapacityDropdown() {

        this.setState({ isCapacitiOpen: !this.state.isCapacitiOpen })

        if (this.state.isQmarOpen || this.state.isMarketPlanOpen || this.state.isAnalytics) {
            this.setState({
                isMarketPlanOpen: false,
                isAnalytics: false,
                isQmarOpen: false
            });
        }
    }

    toggleAnalyticsDropdown() {
        if (this.state.activeTab !== ComponentRoute.Analytics) {
            this.setState({
                isAnalytics: !this.state.isAnalytics
            });

        }
        else {
            this.setState({ isAnalytics: !this.state.isAnalytics })
        }
        if (this.state.isMarketPlanOpen || this.state.isQmarOpen) {
            this.setState({
                isMarketPlanOpen: false,
                isQmarOpen: false
            });
        }
    }

    OnHoverAnalytics() {
        this.setState({
            isAnalytics: true
        });
    }
    OnHoverQmar() {
        this.setState({
            isQmarOpen: true
        });
    }

    closeDropdown() {
        this.setState({
            isMarketPlanOpen: false,
            isQmarOpen: false,
            isRegionSelected: false,
            isBusinessRegionSelected: false,
            isCountrySelected: false,
            isCitySelected: false,
            currentMarket: this.initialMarket,
            isAnalytics: false,
            isCapacitiOpen: false,
            isSecretShopperOpen: false,
            isInventoryOpen: false
        })
    }

    onChange = (value: number) => {
        if (!!value) {
            var bookmark = this.props.bookmarks.find(b => b.Id === value) as IBookmark;
            bookmark.IsReset = false;

            if (!!bookmark) {
                this.setState({
                    bookmark: bookmark
                }, () => {
                    this.props.selectBookmark(bookmark);
                });
            }
        }
    }

    resetBookmark() {
        this.setState({
            bookmark: this.initialBookmark
        }, () => {
            this.props.resetBookmark();
        });
    }
    saveBookmark = () => {
        this.props.saveBookmark(true, this.state.bookmarkTitle);
        this.setState({ showBookmarks: false, bookmarkTitle: "" })
    }
    removeBookmark() {
        //if (!!this.props.isBookmarkBlocked) {
        this.toggleBookmarks();
        this.setState({
            bookmark: this.initialBookmark,
            bookmarkTitle: ""
        }, () => {
            this.props.deleteBookmark();
        });
        //    } 
    }

    changeTheme(theme) {
        this.props.changeTheme(theme);
    }

    toggleNavigationBar() {
        this.setState({ showNavigation: !this.state.showNavigation })
    }

    toggleBookmarks() {
        this.setState({ showBookmarks: !this.state.showBookmarks })
    }
    hideDropdown() {
        this.setState({ showBookmarks: false })
    }
    onChangeField = (event: any, field: string, formattedValue?: any) => {
        if (!!event && typeof (event) !== 'string') {
            var bookmark = this.props.bookmarks.find(b => b.Id === event.value) as IBookmark;
            bookmark.IsReset = false;

            if (!!bookmark) {
                this.setState({
                    bookmark: bookmark
                }, () => {
                    this.props.selectBookmark(bookmark);
                    this.setState({ showBookmarks: false })
                });
            }
        }
    }
    onToggleDropdownChange = (value: any, field: any) => {
        this.props.updateDashboardFilters(value, true)
        this.setState({ selectedPage: value, showDropdownOptions: !this.state.showDropdownOptions })
    }
    setBookmarkTitle = (event: any) => {
        this.setState({ isBookmarkTitleChanged: false })
        if (event !== null && typeof (event) === 'string' && event !== "") {
            if (event.length > 150) {
                this._utility.showNotification("Bookmark title length should be less than 150 characters", NotificationType.Failure);

            }
            else {
                this.setState({ bookmarkTitle: event }, () => {
                    this.setState({ isBookmarkTitleChanged: true })
                });

            }
        }
        else if (event !== null && typeof (event) === 'string' && event === "") {
            this.setState({ bookmarkTitle: event }, () => {
                this.setState({ isBookmarkTitleChanged: true })
            });
        }
        return (event.length <= 150 ? event : event.substr(0, 150))
    }

    showDropdown(isHidden: boolean) {
        if (this.state.showBookmarks) {
            this.setState({ showBookmarks: false })
        }
    }
    toggleCapacityModal() {
        this.setState({ showCapacityPPT: !this.state.showCapacityPPT })
    }
    toggleBattleCardPPt() {
        this.setState({ showBattleCardPPT: !this.state.showBattleCardPPT })
    }
    togglePPT() {
        this.setState({ showSecretShopperPPT: !this.state.showSecretShopperPPT })
    }
    toggleInventoryPPT() {
        this.setState({ showInventoryPPT: !this.state.showInventoryPPT })
    }
    buildPPTUrl(document: IAdvancedDocument): string | undefined {
        if (document !== undefined) {
            return `${document.SiteUrl}_layouts/15/Doc.aspx?sourcedoc={${document.Id}}&action=embedview&wdAr=1.7777777777777777`;
        }
    }
    render() {
        return <>
            <nav className={`${this.props.isResponsive ? "navbar navbar-expand-lg responsive-navbar header-nav pe-4" : "navbar navbar-expand row m-0 ps-4 pe-0 pb-0 pt-1 d-flex flex-row align-items-end"} `} >
                <div className={`col-1 pe-0 ps-0  dashboard-logo-section ${this.props.isResponsive ? "pb-0  pt-2" : "pb-1  pt-1"}`}>
                    <div><a className="app-title m-0 p-0 nav-brand" href={ComponentRoute.Dashboard} >
                        <span className="m-0 p-0 app-title navbar-brand dashboard-logo" ><Logo /></span></a>
                    </div>
                </div>
                {this.props.isResponsive && this.state.activeTab === ComponentRoute.Dashboard && < div className={`${this.props.isResponsive ? "ms-auto me-0" : "col-4 pe-5 ps-0 pt-2 pb-2 row m-0 align-items-end "} mobile-dashboard-options `}>
                    <div className={`${this.props.isResponsive ? "ms-0 me-auto" : "col-11 p-0 ps-4 ms-auto me-0 mt-auto"} mb-0 text-light nav align-items-end dashboard-options`}>
                        
                        {(this.state.activeTab === ComponentRoute.Dashboard) && <div className=" sectionType-intro nav-link ms-auto me-0 px-2 pb-0 ">
                            <div className="landing-page-dropdown-label ">Section</div>
                            <SelectDropDownComponent id={this.state.selectedPage} class={`bookmark-select-dropdown-list`} mainClass={`bookmark-select`} disabled={false} toggleOption={this.onToggleDropdownChange} options={PageLevelToggleOptions} selected={this.state.selectedPage} /></div>}

                        {(this.state.activeTab === ComponentRoute.Dashboard) && <><div className="dlr-market-toggle-intro px-2 nav-link pb-0 ms-auto me-0"><div className="dlr-market-label">Market | DLR</div><Switch isChecked={this.props.isDLR} isFromNavigation={true} label={""} name={"dlr-market"} isFullScreen={false} toggleSwitch={this.props.updateSwitch} isDisabled={((this.props.dashboardFilter?.IsSupplySelected === undefined || this.props.dashboardFilter?.IsSupplySelected)) ? false : true} /></div></>}
                        {(this.state.activeTab === ComponentRoute.Dashboard) && <div className="px-2 nav-link pb-0 ms-auto me-0 ">
                            <div className="bookmark-intro d-flex flex-row align-items-center justify-content-center " onClick={() => this.toggleBookmarks()}>< img alt="" className="save-icon" src={saveWhite} />
                                {/*{(this.state.bookmark.Id !== 0) && < img alt="" className="save-icon" src={savedIcon} onClick={() => this.removeBookmark()} />}*/}
                                <Icon color="black" iconName="ChevronDown" className="bookmark-chevrondown ps-1"></Icon></div>

                            {this.state.showBookmarks && <BookmarkDropdownComponent
                                selectedOption={this.state.bookmark.Title as string}
                                options={this.state.bookmarkOptions}
                                handleChange={this.onChangeField}
                                fieldName={this.state.bookmark.Title as string}
                                placeHolder={this.state.bookmark.Title}
                                isBookmarkSaved={this.state.bookmark.Id !== 0}
                                saveBookmark={() => this.state.isBookmarkTitleChanged && this.saveBookmark()}
                                deleteBookmark={() => this.removeBookmark()}
                                setTitle={this.setBookmarkTitle}
                                hideDropdown={(isHidden: boolean) => this.showDropdown(isHidden)}
                            />}

                        </div>}
                        {(this.state.activeTab === ComponentRoute.Dashboard) && <div className="px-2 nav-link pb-0 me-0 " onClick={() => this.resetBookmark()}>
                            <img alt="" className="refresh-icon " src={refreshWhite} />
                        </div>}
                        {(this.props.userContext.IsAdmin) && !!this.props.activeTab && (this.props.activeTab !== ComponentRoute.Configurations) &&
                            <div className="px-2 nav-link pb-0 ms-auto me-0 w-100">
                                <div className="nav-item p-0 ms-auto me-0 ms-auto me-auto">
                                    <Link className="settings nav-link" onClick={() => this.props.updateActiveTab(ComponentRoute.Configurations)} to={ComponentRoute.Configurations}><GearFill /></Link>
                                </div>
                            </div>
                        }
                        {(this.state.activeTab === ComponentRoute.Dashboard) && <div className={`${this.props.width === 1920 ? "px-3 pe-0" : ""} px-2 nav-link pb-0 me-0`} id="themeselectro">
                            <CallOut id="themeselectro" theme={this.props.defaultTheme} src={colorTheme} changeTheme={this.changeTheme} />
                        </div>}

                    </div>
                </div>}
                {this.props.isResponsive && <button className="header-navbar-intro navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { this.toggleNavigationBar() }}>
                    <span className="navbar-toggler-icon"></span>
                </button>}

                <div className={`${this.props.isResponsive ? "collapse navbar-collapse" : "col-11 pe-0 d-flex  mb-0"} ${this.props.isResponsive && this.state.showNavigation ? "show" : ""}`} id="navbarSupportedContent">
                    <ul className={`${this.props.isResponsive ? "navbar-nav me-auto mb-2 mb-lg-0" : " nav nav-tabs pe-0 ps-2 pt-2 pb-0  mb-0 justify-content-start nav d-flex  "} header-tabs`} role="navigation">
                        <li className={`${this.props.isResponsive ? "p-0" : "p-1"} nav-item pb-0 mt-auto mb-0`}>
                            <div className={`nav-link mt-auto mb-0 px-3 ${this.state.activeTab === ComponentRoute.Dashboard ? "active-tab" : ""}`} id="home" data-bs-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={() => this.props.updateActiveTab(ComponentRoute.Dashboard)}>
                                <Link className="  link-item d-flex" to={ComponentRoute.Dashboard}>
                                    <img className="home-icon mt-auto mb-auto" alt="Home Icon" src={iconHome}></img>
                                    <div className="ps-2 mt-auto mb-auto">Home</div>
                                </Link>
                            </div>
                        </li>
                        <li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item pb-0 mt-auto mb-0`}>
                            <div className={`nav-link mt-auto mb-0 px-2 ${this.state.activeTab === ComponentRoute.KnowledgeBase ? "active-tab" : ""}`} id="knowledge" data-bs-toggle="tab" role="tab" aria-controls="knowledge" aria-selected="true">
                                <a className="knowledge-intro link-item d-flex" target="_blank" href={ComponentRoute.KnowledgeBase}>
                                    <img className="knowledge-icon mt-auto mb-auto" alt="Knowledge Icon" src={iconKnowledge}></img>
                                    <div className="ps-2 pe-0 mt-auto mb-auto ai-intelligence">Market AI</div>
                                </a>
                            </div>
                        </li>
                        {/*<li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item pb-0 mt-auto mb-0 dropdown `}>*/}
                        {/*    {!this.props.isResponsive && < div className={`mt-auto mb-0 nav-link d-flex px-2 dropdown-toggle ${this.state.isQmarOpen ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.Qmar ? "active-tab" : ""}`} data-bs-toggle="tab" role="tab" aria-controls="qmar" aria-selected="true" onMouseLeave={() => this.closeDropdown()} onMouseOver={() => this.OnHoverQmar()} onClick={() => this.toggleQmarDropdown()}>*/}
                        {/*        <a className="Qmar-intro d-flex flex-row align-items-baseline link-item" target="_blank" href={ComponentRoute.QmarLink}>QMAR*/}
                        {/*            <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon>*/}
                        {/*        </a>*/}
                        {/*    </div>}*/}
                        {/*    {this.props.isResponsive && < div className={`qmar mt-auto mb-0 nav-link d-flex px-2 dropdown-toggle ${this.state.isQmarOpen ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.Qmar ? "active-tab" : ""}`} data-bs-toggle="tab" role="tab" aria-controls="qmar" aria-selected="true" onClick={() => this.toggleQmarDropdown()}>*/}
                        {/*        <span >QMAR <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon></span>*/}
                        {/*    </div>}*/}
                        {/*    <ul className={`dropdown-menu m-0 p-0 menu-options ${this.state.isQmarOpen ? "show" : "hide"}`} onMouseOver={() => this.OnHoverQmar()} onMouseLeave={() => this.closeDropdown()}>*/}
                        {/*        <div className="dropdown-item d-flex">*/}
                        {/*            <ul className="ps-0">*/}
                        {/*                {this.state.regions?.filter((region) => region.Name?.toLowerCase() !== "LATAM".toLowerCase()).map((region, index) => (*/}
                        {/*                    <li key={index} className={`p-1 pe-2 d-flex ${region.IsDisabled ? "disabled-link" : ""}`}>*/}
                        {/*                        <div className={`options`}>*/}
                        {/*                            {this.state.isDocumentsFetched && !region.IsDisabled && <div className={`link-item city-link  ${region.IsDisabled ? "disabled" : ""}`} onClick={() => { this.getDocumentByRegion(region.Name, region.Id) }}>{region.Name}</div>}*/}
                        {/*                        </div>*/}
                        {/*                        {region.IsDisabled && <div className="disabled">{region.Name}</div>}*/}
                        {/*                    </li>*/}
                        {/*                ))}*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        <li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item  pb-0 mt-auto mb-0 dropdown`}>
                            <div className={`mt-auto mb-0 nav-link dropdown-toggle d-flex px-2 ${this.state.isMarketPlanOpen ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.MarketPlan ? "active-tab" : ""} `} data-bs-toggle="tab" role="tab" aria-controls="marketplan" aria-selected="true" onClick={() => this.toggleMarketPlanDropdown()}>
                                <div className="marketPlan-intro d-flex flex-row align-items-baseline">Market Overviews
                                    <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon></div>
                            </div>
                            <div className={`dropdown-menu m-0 p-0 menu-options ${this.state.isMarketPlanOpen ? "show" : "hide"}`} onMouseLeave={() => this.closeDropdown()}>
                                <ul className="dropdown-item d-flex">
                                    <ul className="ps-0">
                                        {this.state.regions?.map((region) => (
                                            <li key={region.Id} className={`p-1 pe-2 d-flex ${region.IsDisabled ? " disabled-link" : ""}`}>
                                                <div className={`options d-flex ${this.state.currentMarket.Region === region.Name ? "filter-selected" : ""}`}>
                                                    <div onClick={(event) => this.selectRegion(event, region.Name, region.Id)}>{region.Name}</div>
                                                    {this.state.currentMarket.Region === region.Name ? <Icon color="black" iconName="ChevronRight" className="chevronright ps-1"></Icon> : ""}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {this.state.isRegionSelected && <ul className={`${this.state.isRegionSelected ? "border-left" : ""}`}>
                                        {this.state.businessRegions?.map((businessRegion) => {
                                            return <li className="p-1 ps-0 pe-2 d-flex">
                                                <div className={`options d-flex ${this.state.currentMarket.BusinessRegion === businessRegion.Name ? "filter-selected" : ""}`}>
                                                    <div onClick={(event) => this.selectBusinessRegion(event, businessRegion.Name, businessRegion.Id)}>{businessRegion.Name}</div>
                                                    {this.state.currentMarket.BusinessRegion === businessRegion.Name ? <Icon color="black" iconName="ChevronRight" className="chevronright ps-1"></Icon> : ""}
                                                </div>
                                            </li>
                                        })}
                                    </ul>}
                                    {this.state.isBusinessRegionSelected && <ul className={`${this.state.isBusinessRegionSelected ? "border-left" : ""}`}>
                                        {this.state.countries?.map((country) => (
                                            <li className="p-1 ps-0 pe-2 d-flex">
                                                <div className={`options  d-flex ${this.state.currentMarket.Country === country.Name ? "filter-selected" : ""}`}>
                                                    <div onClick={(event) => this.selectCountry(event, country.Name, country.Id)}>{country.Name}</div>
                                                    {this.state.currentMarket.Country === country.Name ? <Icon color="black" iconName="ChevronRight" className="chevronright ps-1"></Icon> : ""}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>}
                                    {this.state.isCountrySelected && <ul className={`${this.state.isCountrySelected ? "border-left" : ""}`}>
                                        {this.state.cities?.map((city) => (
                                            <li className={`p-1 pe-2 d-flex ${city.IsDisabled ? "disabled-link" : ""}`}>
                                                <div className={`options ${this.state.currentMarket.City === city.Name ? "filter-selected" : ""}`}>
                                                    {this.state.isDocumentsFetched && !city.IsDisabled && <div className={`link-item city-link  ${city.IsDisabled ? "disabled" : ""}`} onClick={(event) => this.selectCity(event, city.Name, city.Id)}>{city.Name}</div>}
                                                </div>
                                                {city.IsDisabled && <div className="disabled">{city.Name}</div>}
                                            </li>
                                        ))}
                                    </ul>}
                                </ul>
                            </div>
                        </li>

                        <li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item pb-0 mt-auto mb-0 dropdown`}>
                            {!this.props.isResponsive ?
                                <div className={`mt-auto mb-0 nav-link d-flex px-2 dropdown-toggle ${this.state.isAnalytics ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.Analytics ? "active-tab" : ""}`} data-bs-toggle="tab" role="tab" aria-controls="qmar" aria-selected="true" onMouseLeave={() => this.closeDropdown()} onMouseOver={() => this.OnHoverAnalytics()} onClick={() => this.toggleAnalyticsDropdown()}>
                                    <a className="analytics-intro link-item d-flex flex-row align-items-baseline" target="_blank" href={ComponentRoute.Analytics}>  Analytics
                                        <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon></a>
                                </div> :
                                <div className={`analytics mt-auto mb-0 nav-link d-flex px-2 dropdown-toggle ${this.state.isAnalytics ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.Analytics ? "active-tab" : ""}`} data-bs-toggle="tab" role="tab" aria-controls="qmar" aria-selected="true" onClick={() => this.toggleAnalyticsDropdown()}>
                                    <span >Analytics <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon></span>
                                </div>
                            }
                            <ul className={`dropdown-menu m-0 p-0 menu-options analytics-links ${this.state.isAnalytics ? "show" : "hide"}`} onMouseOver={() => this.OnHoverAnalytics()} onMouseLeave={() => this.closeDropdown()}>
                                <div className="dropdown-item d-flex">
                                    <ul className="ps-0">
                                        {AnalyticsNavigations?.map((item, index) => (
                                            <li key={index} className={`p-1 pe-2 d-flex ${item.IsDisabled ? "disabled-link" : ""}`} onClick={() => this.closeDropdown()} onMouseLeave={() => this.closeDropdown()}>
                                                <div className={`options`}>
                                                    {!item.IsDisabled && <div className={`link-item city-link  ${item.IsDisabled ? "disabled" : ""}`} ><a className="link-item d-flex" target="_blank" href={item.link}>{item.name}</a></div>}
                                                </div>
                                                {item.IsDisabled && <div className="disabled">{item.name}</div>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ul>
                        </li>

                        {/*{!this.props.isDLR && < li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item pb-0 mt-auto mb-0`} onClick={() => this.toggleBattleCardPPt()}>*/}
                        {/*    <div className={`nav-link mt-auto mb-0 px-2 ${this.state.activeTab === ComponentRoute.BattleCards ? "active-tab" : ""}`} id="battlecards" data-bs-toggle="tab" role="tab" aria-controls="knowledge" aria-selected="true">*/}
                        {/*        <div className="battlecards-intro ps-0 pe-0 mt-auto mb-auto">Battlecards</div>*/}
                        {/*    </div>*/}
                        {/*</li>}*/}
                        {this.props.isDLR && < li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item pb-0 mt-auto mb-0 dropdown`}>
                            <div className={` mt-auto mb-0 nav-link d-flex px-2 dropdown-toggle ${this.state.isCapacitiOpen ? "active-tab" : ""}`} data-bs-toggle="tab" role="tab" aria-controls="qmar" aria-selected="true" onClick={() => this.toggleCapacityDropdown()}>
                                <div className="capacity-intro d-flex flex-row"> Capacity
                                    <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon></div>
                            </div>

                            <ul className={`dropdown-menu m-0 p-0 menu-options ${this.state.isCapacitiOpen ? "show" : "hide"}`} onMouseLeave={() => this.closeDropdown()}>
                                <div className="dropdown-item d-flex">
                                    <ul className="ps-0">
                                        {this.state.regions?.filter((region) => region.Name?.toLowerCase() !== "LATAM".toLowerCase()).map((region, index) => (
                                            <li key={index} className={`p-1 pe-2 d-flex ${region.IsDisabled ? "disabled-link" : ""}`}>
                                                <div className={`options`}>
                                                    {this.state.isDocumentsFetched && !region.IsDisabled && <div className={`link-item city-link  ${region.IsDisabled ? "disabled" : ""}`} onClick={() => this.getCapacityDocumentByRegion(region.Name)}>{region.Name}</div>}
                                                </div>
                                                {region.IsDisabled && <div className="disabled">{region.Name}</div>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ul>
                        </li>}

                        {!this.props.isDLR && <li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item  pb-0 mt-auto mb-0 dropdown ${this.props.isDLR ? "d-none" : ""}`}>
                            <div className={`mt-auto mb-0 nav-link dropdown-toggle d-flex px-2 ${this.state.isSecretShopperOpen ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.secretshopper ? "active-tab" : ""}`} id="secretshopper" data-bs-toggle="tab" role="tab" aria-controls="knowledge" aria-selected="true" onClick={() => this.toggleSecretShopperDropdown()}>
                                <div className="secretshopper-intro d-flex flex-row">
                                    <div className="ps-0 pe-0 mt-auto mb-auto">Secret Shopper</div>
                                    <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon>
                                </div>
                            </div>
                            <div className={`dropdown-menu m-0 p-0 menu-options ${this.state.isSecretShopperOpen ? "show" : "hide"}`} onMouseLeave={() => this.closeDropdown()}>
                                <ul className="dropdown-item d-flex">
                                    <ul className="ps-0">
                                        {SecretShopperDropdownOptions?.map((region) => (
                                            <li className={`p-1 pe-2 d-flex `}>
                                                <div className={`options d-flex `}>
                                                    <div onClick={() => this.getCapacityDocumentByRegion(region.name)}>{region.name}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                            </div>
                        </li>}
                        {this.props.isDLR && < li className={`${this.props.isResponsive ? "p-0" : "p-0"} nav-item  pb-0 mt-auto mb-0 dropdown`}>
                            <div className={`mt-auto mb-0 nav-link dropdown-toggle d-flex px-2 ${this.state.isInventoryOpen ? "active-tab" : ""} ${this.state.activeTab === ComponentRoute.secretshopper ? "active-tab" : ""}`} id="secretshopper" data-bs-toggle="tab" role="tab" aria-controls="knowledge" aria-selected="true" onClick={() => this.toggleInventoryDropdown()}>
                                <div className="ps-0 pe-0 mt-auto mb-auto"><div className="inventory-intro  d-flex flex-row">Inventory  <Icon color="black" iconName="ChevronDown" className="chevrondown ps-1"></Icon> </div></div>

                            </div>
                            <div className={`dropdown-menu m-0 p-0 menu-options ${this.state.isInventoryOpen ? "show" : "hide"}`} onMouseLeave={() => this.closeDropdown()}>
                                <ul className="dropdown-item d-flex">
                                    <ul className="ps-0">
                                        {InventoryDropdownOptions?.map((region) => (
                                            <li className={`p-1 pe-2 d-flex `}>
                                                <div className={`options d-flex `}>
                                                    <div onClick={() => this.toggleInventoryPPT()}>{region.name}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                            </div>
                        </li>}
                    </ul>
                    {this.state.activeTab === ComponentRoute.Dashboard && !this.props.isResponsive &&
                        <div className="col-3 pe-0 ps-0 row m-0 align-items-end dashboard-options ">
                            
                            <div className={`${this.props.isResponsive ? "ms-0 me-auto" : " p-0  pe-2 pb-2 me-0 d-flex felx-row  "} mb-0 text-light nav align-items-end dashboard-options`}>
                               
                                {(this.state.activeTab === ComponentRoute.Dashboard) && <div className=" sectionType-intro nav-link ms-auto me-0 px-2 pb-0 ">
                                    
                                    <div className="landing-page-dropdown-label ">Section</div>
                                    <SelectDropDownComponent id={this.state.selectedPage} class={`bookmark-select-dropdown-list`} mainClass={`bookmark-select`} disabled={false} toggleOption={this.onToggleDropdownChange} options={PageLevelToggleOptions} selected={this.state.selectedPage} /></div>}
                                {(this.state.activeTab === ComponentRoute.Dashboard) && <>

                                    <div className="px-2 ps-4 nav-link pb-0 ms-auto me-0"><div className="dlr-market-toggle-intro" > <div className="dlr-market-label">Market | DLR</div><Switch isChecked={this.props.isDLR} isFromNavigation={true} label={""} name={"dlr-market"} isFullScreen={false} toggleSwitch={this.props.updateSwitch} isDisabled={((this.props.dashboardFilter?.IsSupplySelected === undefined || this.props.dashboardFilter?.IsSupplySelected)) ? false : true} /></div></div>
                                </>}
                                {(this.state.activeTab === ComponentRoute.Dashboard) && <div className="px-2 nav-link pb-0 ms-auto me-0 ">
                                    <div className="bookmark-intro" onClick={() => this.toggleBookmarks()}>< img alt="" className="save-icon" src={saveWhite} />
                                        <Icon color="black" iconName="ChevronDown" className="bookmark-chevrondown ps-1"></Icon></div>

                                    {this.state.showBookmarks && <BookmarkDropdownComponent
                                        selectedOption={this.state.bookmark.Title as string}
                                        options={this.state.bookmarkOptions}
                                        handleChange={this.onChangeField}
                                        fieldName={this.state.bookmark.Title as string}
                                        placeHolder={this.state.bookmark.Title}
                                        isBookmarkSaved={this.state.bookmark.Id !== 0}
                                        saveBookmark={() => this.state.isBookmarkTitleChanged && this.saveBookmark()}
                                        deleteBookmark={() => this.removeBookmark()}
                                        setTitle={this.setBookmarkTitle}
                                        hideDropdown={(isHidden: boolean) => this.showDropdown(isHidden)}
                                    />}
                                </div>}
                                {(this.state.activeTab === ComponentRoute.Dashboard) && <div className="px-2 nav-link pb-0 me-0 d-flex flex-row justify-content-center " onClick={() => this.resetBookmark()}>
                                    <img alt="" className="refresh-icon " src={refreshWhite} />
                                </div>}
                                {(this.props.userContext.IsAdmin) && !!this.props.activeTab && (this.props.activeTab !== ComponentRoute.Configurations) &&
                                    <div className="">
                                        <li className="px-2 nav-link pb-0 me-0 d-flex flex-row justify-content-center ">
                                        <Link className="settings nav-link p-0 mt-auto mb-auto" onClick={() => this.props.updateActiveTab(ComponentRoute.Configurations)} to={ComponentRoute.Configurations}><GearFill /></Link>
                                        </li>
                                        </div>
                                }
                                {(this.state.activeTab === ComponentRoute.Dashboard) && <div className={`${this.props.width === 1920 ? "px-3 pe-0" : ""} px-2 nav-link pb-0 me-0`} id="themeselectro">
                                    <CallOut id="themeselectro" theme={this.props.defaultTheme} src={colorTheme} changeTheme={this.changeTheme} />
                                </div>}
                            </div>
                        </div>}
                </div>
            </nav>
            {this.state.showBattleCardPPT && <AnalysisPPTComponent closePPT={() => this.toggleBattleCardPPt()} header="Battlecards" link={`https://app.powerbi.com/reportEmbed?reportId=e88cc69b-68bd-4bb9-9daf-fb479a9e4e2c&autoAuth=true&ctid=45d53a40-131c-4896-94ef-8cd3538b3834`/*this.buildPPTUrl(this.props.battlecardDocument)*/} />}
            {this.state.showCapacityPPT && <AnalysisPPTComponent closePPT={() => this.toggleCapacityModal()} header="Capacity" link={`https://app.powerbi.com/reportEmbed?reportId=048ca6bd-674b-443f-babf-3265c32e2236&autoAuth=true&ctid=45d53a40-131c-4896-94ef-8cd3538b3834`/*this.buildPPTUrl(this.state.advancedDocument)*/} />}
            {this.state.showSecretShopperPPT && <AnalysisPPTComponent header="Secret Shopper" closePPT={() => this.togglePPT()} link={this.buildPPTUrl(this.state.advancedDocument)} />}
            {this.state.showInventoryPPT && <AnalysisPPTComponent header="Global Inventory Report" closePPT={() => this.toggleInventoryPPT()} link={`https://digitalrealty.sharepoint.com/sites/MID/_layouts/15/Doc.aspx?sourcedoc={848F5EB1-0FD6-4A8F-88C5-0110C0E6451D}&action=embedview&wdAr=1.7777777777777777`} />}
        </>;
    }
}

export default withRouter(Header);

