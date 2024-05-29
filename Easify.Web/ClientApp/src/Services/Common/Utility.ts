/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
import * as React from 'react';
import { orderBy } from 'lodash';
import { NotificationManager } from "react-notifications";
import { FileExtentions, Months, SummaryReportTemplate, ReportPDFBodyTotal, SummaryReportHead, QuarterlyReportHead, SummaryReportBody, QuarterlyReportBody, QuarterlyReportTemplate, RejectedReportTemplate, RejectedReportBody, RejectedReportHead, Approvals, MonthsShort } from '../../Common/Constants';
import { FieldType, NotificationType, SortOrder } from '../../Common/Enums';
import { IUploadFile } from '../../Interfaces/Common/IUploadFile'
import { IUserContext } from '../../Interfaces/Common/IUserContext';
import { IDocument } from '../../Interfaces/Dashboard/IDocument';
import { IMarket } from '../../Interfaces/Dashboard/IMarket';
import { IDLRInventory } from '../../Interfaces/DLRInventory/IDLRInventory';
import { IDonation } from '../../Interfaces/IDonation';
import { ISummaryReport } from '../../Interfaces/ISummaryReport';
import { ITimeline } from '../../Interfaces/ITimeline';
import * as Excel from '../../../node_modules/exceljs';
import { store } from 'react-notifications';
import {
      DLRInventoryFields, DLRInventoryFormFields,NotificationTypes} from '../../Assets/Enums';
import { IDLRInventoryFormResources } from '../../Interfaces/DLRInventory/IDLRInventoryFormResources';
import { IProperty } from '../../Interfaces/DLRInventory/IProperty';
import { ISuiteCondition } from '../../Interfaces/DLRInventory/ISuiteCondition';
import { IAssetScoring } from '../../Interfaces/DLRInventory/IAssetScoring';
import { ICPS } from '../../Interfaces/DLRInventory/ICPS';
import { IDeliveryStatus } from '../../Interfaces/DLRInventory/IDeliveryStatus';
import { IResponsibleParty } from '../../Interfaces/DLRInventory/IResponsibleParty';
import { ITargetProductSize } from '../../Interfaces/DLRInventory/ITargetProductSize';
import { IWaterCooling } from '../../Interfaces/DLRInventory/IWaterCooling';
import { ISecurePerimeter } from '../../Interfaces/DLRInventory/ISecurePerimeter';
import { IIndustryOrComplianceCertifications } from '../../Interfaces/DLRInventory/IIndustryOrComplianceCertifications';
import { ICloudOnRamp } from '../../Interfaces/DLRInventory/ICloudOnRamp';
import { INetworkDensity } from '../../Interfaces/DLRInventory/INetworkDensity';
import { ISmartHands } from '../../Interfaces/DLRInventory/ISmartHands';
import { IProductType } from '../../Interfaces/DLRInventory/IProductType';
import { IRedundancy } from '../../Interfaces/DLRInventory/IRedundancy';
import { IStage } from '../../Interfaces/DLRInventory/IStage';
import { ISDRating } from '../../Interfaces/DLRInventory/ISDRating';
import { IComparablesSource } from '../../Interfaces/DLRInventory/IComparablesSource';
import { ICity } from '../../Interfaces/Dashboard/ICity';
import { IChilledWater } from '../../Interfaces/DLRInventory/IChilledWater';
import { IBusinessRegion } from '../../Interfaces/Dashboard/IBusinessRegion';
import { ICountry } from '../../Interfaces/Dashboard/ICountry';
import { IRegion } from '../../Interfaces/Dashboard/IRegion';
import * as XLSX from 'xlsx';
import { IState } from '../../Interfaces/Dashboard/IState';
import { IConnectivity } from '../../Interfaces/Dashboard/Report/MarketOverview/IConnectivity';
import { ISupply } from '../../Interfaces/Dashboard/Report/DataTableAll/ISupply';
import { Filter } from 'react-bootstrap-icons';
import { IAdvancedDocument } from '../../Interfaces/Dashboard/IAdvancedDocument';
import { IEmail } from '../../Interfaces/Dashboard/IEmail';

export class Utility {


    isNotificationShowing: boolean = false;

    isFloat(n: number) {
        return Number(n) === n && n % 1 !== 0;
    }
    isEmptyObject(obj: any): boolean {
        return obj == undefined || obj == null || obj == "" || obj == 0;
    }

    isEmptyArray(arrObj: Array<any>): boolean {
        return arrObj == undefined || arrObj == null || arrObj.length == 0;
    }

    getRandomColor() {
        let profileColors = ['initials-85', 'initials-52', 'initials-72', 'initials-86', 'initials-87', 'initials-85', 'initials-88', 'initials-67', 'initials-89', 'initials-90', 'initials-73', 'initials-92', 'initials-96'];
        return profileColors[Math.floor(Math.random() * profileColors.length)];
    }

    gethttpurl(url: string) {
        return url && (url.includes('http://') || url.includes('https://')) ? url : `http://${url}`;
    }

    getlocalnumber(value: any) {
        return !!value && !isNaN(value) ? Number(value).toLocaleString() : value;
    }
    getZeroHoursUTCDate(date: any) {
        //Used for pushing the date with UTC Zero Hours. 
        if (date == undefined || date == null || new Date(date).toString() == 'Invalid Date') return '-';
        return new Date(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString());
    }
    convertToDate(date?: any) {
        if (date == undefined || date == null) return '-';
        var convertedDate = new Date(date);
        return (convertedDate.getMonth() + 1) + '/' + convertedDate.getDate() + '/' + convertedDate.getFullYear();
    }

    public convertToDDMMMYYYY(date?: any) {
        if (date == undefined || date == null || new Date(date).toString() == 'Invalid Date') return '-';
        var convertedDate = new Date(date);
        return Months[convertedDate.getMonth()] + ' ' + convertedDate.getDate() + ', ' + convertedDate.getFullYear();
    }

    public getYear(date?: string) {
        return date ? new Date(date).getFullYear() : 0;
    }

    public getQuarterYear(date: any) {
        return !!date ? `Q${Math.floor((new Date(date).getMonth() + 3) / 3)} ${new Date(date).getFullYear()}` : 0;
    }

    isWebsiteValid(url: string) {
        return /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/.test(url);
    }
    pushNotification(message: string, type: string): number {
        return store.addNotification({
            message: message,
            type: type,
            insert: "top",
            container: "top-center",
            width: 260,
            dismiss: {
                duration: NotificationTypes.Danger ? 3000 : 2000
            }
        });
    }
    async blobToBase64(selectedFile: any) {
        let file = {} as IUploadFile;
        file.Name = selectedFile.name;
        file.ContentType = selectedFile.type;
        file.IsActive = true;
        return new Promise<IUploadFile>((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = (event: any) => {
                var dataUrl = reader?.result?.toString();
                file.Data = dataUrl ? dataUrl.split(",")[1] : "";
                resolve(file);
            };
            reader.readAsDataURL(selectedFile);
        });
    }

    sortArrayByProperty(array: any, property: string, isDesc: boolean, type: FieldType) {
        try {
            if (this.isEmptyArray(array))
                return [];
            if (this.isEmptyObject(property))
                return array;
            if (type == FieldType.Number) {
                if (isDesc) {
                    return array.sort((a, b) => b[property] - a[property]);
                }
                return array.sort((a, b) => a[property] - b[property] );
            }
            else if (type == FieldType.String) {
                const collator = new Intl.Collator(undefined);

                if (isDesc) {
                    return array.sort((a, b) => collator.compare(b[property]?.trim(), a[property]?.trim()));
                } else {
                    return array.sort((a, b) => collator.compare(a[property]?.trim(), b[property]?.trim()));
                }
            }
            else if (type == FieldType.Date) {
                if (isDesc) {
                    return array.sort(function (a, b) {
                        return (b[property] != null ? new Date(b[property]).getTime() : 0) - (a[property] != null ? new Date(a[property]).getTime() : 0);
                    });
                }
                return array.sort(function (a, b) {
                    return (a[property] != null ? new Date(a[property]).getTime() : 0) - (b[property] != null ? new Date(b[property]).getTime() : 0);
                });
            }
            else
                return array;
        }
        catch (err) {
            console.log("Error at sortArrayByProperty method : " + err);
            return array;
        }
    }

    getAttachment(fileURL: string): any {
        let strDocUrl = !!fileURL ? fileURL : '';
        if (!!strDocUrl) {
            let fileparts = !!strDocUrl && strDocUrl.split('/') ? strDocUrl.split('/') : [];
            let filePop = fileparts ? fileparts.pop() : '';
            let fileExt = !!filePop && filePop.split('.') && filePop.split('.')[1] ? filePop.split('.')[1].toLowerCase() : '';
            if (fileExt == 'pdf')
                strDocUrl = fileURL;
            else if (FileExtentions.indexOf(fileExt) > -1) {
                strDocUrl = `${strDocUrl.split('FileUploader')[0]}_layouts/15/WopiFrame.aspx?sourcedoc=${strDocUrl}&action=default`;
            }

            return { url: strDocUrl, fileName: filePop };
        }

        return { url: strDocUrl, fileName: strDocUrl };
    }

    showNotification = (msg: string, type: NotificationType) => {
        if (this.isNotificationShowing || (NotificationManager.listNotify && NotificationManager.listNotify.length > 0)) {
            NotificationManager.listNotify = [];
        }
        this.isNotificationShowing = true;

        switch (type) {
            case NotificationType.Info:
                NotificationManager.info(msg, "", 5000)
                break;

            case NotificationType.Failure:
                NotificationManager.error(msg, "", 5000)
                break;

            case NotificationType.Success:
                NotificationManager.success(msg, "", 5000)
                break;

            case NotificationType.Warning:
                NotificationManager.warning(msg, "", 5000)
                break;
        }

        setTimeout(() => {
            this.isNotificationShowing = false
        }, 2000);
    }

    getTimelineText(timeline: ITimeline, context: IUserContext): any {
        if (context.IsAdmin) {
            if (timeline.ApprovalStatus == "In Progress" || timeline.ApprovalStatus == "Pending Verification") {
                return context.Email == timeline.SubmitterEmail ? `You added a donation for ${timeline.OrganizationName}` : `${timeline.SubmitterName} added a new donation for ${timeline.OrganizationName}`;
            }
            else
                return context.Email == timeline.SubmitterEmail ? `Your donation status for ${timeline.OrganizationName} changed to ${timeline.ApprovalStatus}` : `Donation for ${timeline.OrganizationName} has been ${timeline.ApprovalStatus}`;
        }
        else {
            if (timeline.ApprovalStatus == "In Progress" || timeline.ApprovalStatus == "Pending Verification")
                return `${timeline.SubmitterName} added a new donation for ${timeline.OrganizationName}`;
            else
                return `Donation added for ${timeline.OrganizationName} has been ${timeline.ApprovalStatus}`;
        }
    }

    getMatchAmount(amount: number, remaining: number) {
        return !!remaining && remaining > 0 ? (amount <= remaining ? amount : remaining) : 0;
    }

    getCurrencyFormat(value: any) {
        let val = !!value ? ((value).toString().indexOf('.') > -1 ? Number(value).toFixed(2) : value.toString()) : '0';
        return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    downloadCSV(csvContent: any, filename: string) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Browsers that support HTML5 download attribute
            const url = window.URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    getSummaryTemplate(reports: Array<ISummaryReport>, username: string) {
        let template = SummaryReportTemplate;
        let tbody = '';
        reports.forEach(report => {
            report.Donations.forEach(donation => {
                let record = SummaryReportBody;
                record = record.replace('{EmployeeName}', report.EmployeeName).replace('{Donated Amount (USD)}', this.getCurrencyFormat(donation.DonatedAmount_USD)).replace('{Matched Donation(USD)}', this.getCurrencyFormat(donation.MatchDonation_USD)).replace('{Approval Status}', donation.ApprovalStatus).replace('{Year Of Donation}', this.getYear(donation.DonatedOn).toString()).replace('{Policy Accepted}', 'Yes').replace('{User Type}', donation.UserType).replace('{Action}', `${window.location.origin}/approvals?donationid=${donation.ID}`);
                tbody = tbody.concat(record);
            });

            let recordTotal = ReportPDFBodyTotal;
            recordTotal = recordTotal.replace('{Total}', this.getCurrencyFormat(report.Total));
            tbody = tbody.concat(recordTotal);
        });

        template = template.replace('{Head}', SummaryReportHead).replace('{tbody}', tbody).replace("{UserName}", username).replace("{DateTime}", new Date().toLocaleString());

        return template;
    }

    getQuarterlyTemplate(donations: Array<IDonation>, username: string) {
        let template = QuarterlyReportTemplate;
        let tbody = '';
        donations.forEach(donation => {
            let record = QuarterlyReportBody;
            record = record.replace('{CreatedOn}', this.convertToDate(donation.CreatedOn)).replace('{DonatedOn}', this.convertToDate(donation.DonatedOn)).replace('{CreatedBy}', donation.CreatedEmployeeName).replace('{DonatedAmount_USD}', this.getCurrencyFormat(donation.DonatedAmount_USD)).replace('{MatchDonation_USD}', this.getCurrencyFormat(donation.MatchDonation_USD)).replace('{ApprovalStatus}', donation.ApprovalStatus).replace('{CorporateCounselOn}', this.convertToDate(donation.CorporateCounselOn)).replace('{Team1ApprovedOn}', this.convertToDate(donation.Team1ApprovedOn)).replace('{Team2ApprovedOn}', this.convertToDate(donation.Team2ApprovedOn)).replace('{AdminApprovedOn}', this.convertToDate(donation.AdminApprovedOn)).replace('{PaidApprovedOn}', this.convertToDate(donation.PaidApprovedOn)).replace('{OrganizationName}', donation.OrganizationName).replace('{TaxId}', donation.TaxId).replace('{OrganizationAddress}', donation.OrganizationAddress).replace('{UserType}', donation.UserType).replace('{Action}', `${window.location.origin}/approvals?donationid=${donation.ID}`);
            tbody = tbody.concat(record);
        });

        template = template.replace('{Head}', QuarterlyReportHead).replace('{tbody}', tbody).replace("{UserName}", username).replace("{DateTime}", new Date().toLocaleString());

        return template;
    }

    getRejectedTemplate(donations: Array<IDonation>, username: string) {
        let template = RejectedReportTemplate;
        let tbody = '';
        donations.forEach(donation => {
            let record = RejectedReportBody;
            record = record.replace('{CreatedBy}', donation.CreatedEmployeeName).replace('{DonatedAmount_USD}', this.getCurrencyFormat(donation.DonatedAmount_USD)).replace('{OrganizationName}', donation.OrganizationName).replace('{TaxId}', donation.TaxId).replace('{OrganizationAddress}', donation.OrganizationAddress).replace('{DonatedOn}', this.convertToDate(donation.DonatedOn)).replace('{CommentsHistory}', donation.CommentsHistory.map(cmt => `Stage ${cmt.Stage} ${cmt.IsApproved ? 'appoval' : 'rejection'} Comment: ${cmt.Comment}`).join(' ')).replace('{RejectedBy}', donation.CommentsHistory.map(cmt => `Stage: ${cmt.Stage}: ${cmt.EmployeeName}`).join(' ')).replace('{CreatedOn}', donation.CreatedOn).replace('{UserType}', donation.UserType).replace('{Action}', `${window.location.origin}/approvals?donationid=${donation.ID}`);
            tbody = tbody.concat(record);
        });

        template = template.replace('{Head}', RejectedReportHead).replace('{tbody}', tbody).replace("{UserName}", username).replace("{DateTime}", new Date().toLocaleString());

        return template;
    }

    sortStatus = (statuses: Array<any>) => {
        return Approvals.filter(_ => !!_ && statuses.indexOf(_) > -1);
    }

    sortYearQuarters = (data: Array<any>) => {
        let quarters: Array<any> = [];

        let years = (data.map(_ => _.split(' ')[1])).filter((item, index, arr) => item && arr.indexOf(item) === index).sort().reverse();
        years.forEach(year => {
            quarters = quarters.concat((data.filter(_ => Number(_.split(' ')[1]) == year).map(_ => `${_.split(' ')[0]} ${year}`)).filter((item, index, arr) => item && arr.indexOf(item) === index).sort().reverse());
        })

        return quarters;
    }

    base64toBlob(base64Data: any) {
        const byteCharacters = window.atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: 'application/pdf' });
    }
    convertImageToBlob(file) {
        if (file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result instanceof ArrayBuffer) {
                        const blob = new Blob([reader.result], { type: file.type });
                        resolve(blob);
                    } else {
                        reject(new Error('Failed to read file as ArrayBuffer.'));
                    }
                };
                reader.onerror = reject;
                reader.readAsArrayBuffer(file);
            });
        }
        return Promise.resolve(null);
    }


    getFormattedDate(inputDate?: any) {
        var defaultDate: any = null;
        var date: any = !!inputDate && new Date(inputDate).toString() != 'Invalid Date' && (new Date(inputDate) > new Date(defaultDate)) ? new Date(inputDate) : '';
        return !!date ? `${MonthsShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}` : '';
    }

    getBusinessRegions(markets: IMarket[], regionId: number) {
        var businessRegions: IBusinessRegion[] = markets.filter(market => market.RegionId === regionId).map(market => ({ Id: market.BusinessRegionId, Name: market.BusinessRegion }));
        var filteredBusinessRegions: IBusinessRegion[] = [];

        businessRegions.forEach((businessRegion) => {
            if (filteredBusinessRegions.filter(br => br.Id == businessRegion.Id).length == 0) {
                filteredBusinessRegions.push(businessRegion);
            }
        });
        return this.sortArrayByProperty(filteredBusinessRegions, "Name", false, FieldType.String);;
    }

    getCountries(markets: IMarket[], businessRegionId: number, isState: boolean) {
        if (isState) {           
            var states: IState[] = markets.filter(item => item.BusinessRegionId == businessRegionId).map(market => ({ Id: market.StateId, Name: market.State }));
            var filteredStates: IState[] = [];

            states.forEach((state) => {
                if (filteredStates.filter(c => c.Id == state.Id).length == 0) {
                    filteredStates.push(state);
                }
            });
            return this.sortArrayByProperty(filteredStates, "Name", false, FieldType.String);
        }
        else {
            var countries: ICountry[] = markets.filter(item => item.BusinessRegionId == businessRegionId).map(market => ({ Id: market.CountryId, Name: market.Country }));
            var filteredCountries: ICountry[] = [];

            countries.forEach((country) => {
                if (filteredCountries.filter(c => c.Id == country.Id).length == 0) {
                    filteredCountries.push(country);
                }
            });
            return this.sortArrayByProperty(filteredCountries, "Name", false, FieldType.String);
        }
    }

    getCities(markets: IMarket[], countryId: number, documents: IDocument[] | null,isState:boolean): ICity[] {
        var filteredCities: ICity[] = [];
        try {
            var Markets: IMarket[] = [];
            if (isState) {
                Markets = markets.filter(item => item.StateId === countryId);
            }
            else {
                Markets = markets.filter(item => item.CountryId === countryId);
            }
            Markets.forEach((market) => {
                var isDisabled = !this.hasDocument(true, market, (!!documents ? documents : []));
                var city: ICity = { Id: "", Name: "", IsDisabled: false };
                city.IsDisabled = isDisabled;
                city.Id = market.MarketId;
                city.Name = market.City;
                if (filteredCities.filter(c => c.Name == market.City).length == 0) {
                    filteredCities.push(city);
                }
            });
        }
        catch (ex) {
           
        }
        return this.sortArrayByProperty(filteredCities, "Name", false, FieldType.String);
    }

    getRegions(markets: IMarket[], documents: IDocument[]): IRegion[] {
        var filteredRegions: IRegion[] = [];
        markets.forEach((market) => {
            var isDisabled = !this.hasDocument(false, market, (!!documents ? documents : []));
            var region:IRegion = { Id: 0,Class:"", Name: "", IsDisabled: false };
            region.IsDisabled = isDisabled;
            region.Id = market.RegionId;
            region.Name = market.Region;
            region.Class = market.RegionClass;

            if (filteredRegions.filter(r => r.Id == market.RegionId).length == 0) {
                filteredRegions.push(region);
            }
        })
        return filteredRegions;
    }

    hasDocument(isCity: boolean, market: IMarket, documents: IDocument[]) {
        if (!!documents && documents.length == 0)
            return false;
        var doc = [] as IDocument[];
        try {
            if (isCity) {
                doc = documents?.filter((document) => document?.Region?.toLowerCase() === (market?.Region !== undefined || market?.Region !== null ? market?.Region?.toLowerCase() : "") && (document?.City?.toLowerCase() === (market?.City !== undefined || market?.City !== null ? market?.City?.toLowerCase() : "")) && (document?.BusinessRegion?.toLowerCase() === (market?.BusinessRegion !== undefined || market?.BusinessRegion !== null ? market?.BusinessRegion?.toLowerCase() : "")) && (document?.Country?.toLowerCase() === (market?.RegionId === 1 ? (market?.State !== undefined || market?.State !== null ? market?.State?.toLowerCase() : "") : market?.Country !== undefined || market?.Country !== null?market?.Country?.toLowerCase():"")) && document?.Type?.toLowerCase() === "Market Plan".toLowerCase());
            }
            else {
                doc = documents?.filter((document) => document.Region?.toLowerCase() === market.Region?.toLowerCase() && document.Type?.toLowerCase() == "QMAR"?.toLowerCase())
            }
        }
        catch (ex) {
            console.log(ex);
        }
        return (doc.length !== 0);
    }

    getDocumentByCity(documents: IDocument[], market: IMarket) {
        try {
            var document = documents.find(document => document?.City === market.City && document?.Region === market.Region && document?.BusinessRegion === market.BusinessRegion && document?.Country === market.Country && document?.Type.toLowerCase() === "Market Plan".toLowerCase())
            return document;
        }
        catch (ex) {
            console.log(ex);
        }

    }

    getDocumentByRegion(documents: IDocument[], region: string) {
        try {
            var document = documents.find(document => document?.Region === region && document?.Type === "QMAR")
            return document;
        }
        catch (ex) {
            console.log(ex);
        }
    }

    getDocument(documents: IDocument[], isRegion: boolean, isCity: boolean, market: IMarket | null) {
        var document: IDocument | undefined;
        try {
            if (isCity) {
                document = documents.find(document => document?.City.toLowerCase() === market?.City.toLowerCase() && document?.Country.toLowerCase() === market?.Country.toLowerCase()
                    && document?.BusinessRegion.toLowerCase() === market?.BusinessRegion.toLowerCase() && document?.Region.toLowerCase() === market?.Region.toLowerCase()
                    && document?.Type.toLowerCase() === "Market Plan".toLowerCase())
                return document;
            }
            else if (isRegion) {
                document = documents.find(document => document?.Region.toLowerCase() === market?.Region.toLowerCase() && document?.Type.toLowerCase() === "QMAR".toLowerCase());
                return document;
            }
        }
        catch (error) {
        }

    }

    getCapacityDocument(documents: IAdvancedDocument[], region: string) {
        var document: IAdvancedDocument | undefined;
        try {
            document = documents.find(document => document?.Type?.toLowerCase() === region.toLowerCase());
            return document;

        }
        catch (error) {
            this.showNotification("Error while loading document for region", NotificationType.Failure)
        }

    }

    popNotification(id: number) {
        store.removeNotification(id);
    }

    downloadDLRInventoryFormResources(dLRInventoryFormResources: IDLRInventoryFormResources) {
        let workbook = new Excel.Workbook();
        var PWorksheet = workbook.addWorksheet('Global Properties');
        PWorksheet = this.getGlobalPropertiesWorksheet(PWorksheet, dLRInventoryFormResources.Properties);
        var PTWorksheet = workbook.addWorksheet('Product Types');
        PTWorksheet = this.getProductTypeWorksheet(PTWorksheet, dLRInventoryFormResources.ProductTypes);
        var SCWorksheet = workbook.addWorksheet('Suite Conditions');
        SCWorksheet = this.getSuiteConditionWorksheet(SCWorksheet, dLRInventoryFormResources.SuiteConditions);
        //var ASWorksheet = workbook.addWorksheet('Asset Scoring');
        //ASWorksheet = this.getAssetScoringWorksheet(ASWorksheet, dLRInventoryFormResources.AssetScorings);
        var DSWorksheet = workbook.addWorksheet('Delivery Status');
        DSWorksheet = this.getDeliveryStatusWorksheet(DSWorksheet, dLRInventoryFormResources.DeliveryStatuses);
        //var WCWorksheet = workbook.addWorksheet('Water Cooling');
        //WCWorksheet = this.getWaterCoolingWorksheet(WCWorksheet, dLRInventoryFormResources.WaterCoolings);
        var CPSWorksheet = workbook.addWorksheet('CPS');
        CPSWorksheet = this.getCPSWorksheet(CPSWorksheet, dLRInventoryFormResources.CPS);
        var TPZWorksheet = workbook.addWorksheet('Target Product Size');
        TPZWorksheet = this.getTargetProductSizeWorksheet(TPZWorksheet, dLRInventoryFormResources.TargetProductSizes);
        //var SPWorksheet = workbook.addWorksheet('Secure Perimeter');
        //SPWorksheet = this.getSecurePerimeterWorksheet(SPWorksheet, dLRInventoryFormResources.SecurePerimeters);
        var RPWorksheet = workbook.addWorksheet('Responsible Party');
        RPWorksheet = this.getResponsiblePartyWorksheet(RPWorksheet, dLRInventoryFormResources.ResponsibleParties);
        var ICCWorksheet = workbook.addWorksheet('Industry or Compliance Certifications');
        ICCWorksheet = this.getIndustryOrComplianceCertificationsWorksheet(ICCWorksheet, dLRInventoryFormResources.IndustryOrComplianceCertifications);
        var CWWorksheet = workbook.addWorksheet('Chilled Water');
        CWWorksheet = this.getChilledWaterWorkSheet(CWWorksheet, dLRInventoryFormResources.ChilledWaters);
        //var CRWorksheet = workbook.addWorksheet('Cloud On-Ramps');
        //CRWorksheet = this.getCloudOnRampWorksheet(CRWorksheet, dLRInventoryFormResources.CloudOnRamps);
        //var NDWorksheet = workbook.addWorksheet('Network Density');
        //NDWorksheet = this.getNetworkDensityWorksheet(NDWorksheet, dLRInventoryFormResources.NetworkDensities);
        //var SHWorksheet = workbook.addWorksheet('Smart Hands');
        //SHWorksheet = this.getSmartHandsWorksheet(SHWorksheet, dLRInventoryFormResources.SmartHands);

        workbook.xlsx.writeBuffer().then((data: any) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "DLR Inventory resources";
            a.click();
        });
    }

    downloadDLRInventoryExcel(dlrInventoryData: any, fileName: string, isTemplate: boolean = false) {
        var dataFields: any = [];
        for (let value in DLRInventoryFormFields) {
            if (typeof DLRInventoryFormFields[value] === 'string' && DLRInventoryFormFields[value] !== DLRInventoryFormFields.DesignedDensityUnit) {
                dataFields.push(value);
            }
        }
        if (!isTemplate) {
            dataFields.push("DateModified");
            dataFields.push("ModifiedBy");
        }

        let csvdata = dlrInventoryData.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                if (fieldName == DLRInventoryFormFields.Property) {
                    row[fieldName] = (row[fieldName] && row[fieldName].length > 0) ? row[fieldName].substring(row[fieldName].indexOf('>') + 1).trim() : "";
                    return row[fieldName];
                }
                else if (fieldName == DLRInventoryFormFields.EarliestDeliveryDate || fieldName == "DateModified") {
                    return this.getFormattedDate(new Date(row[fieldName]));
                }
                else if (fieldName == DLRInventoryFormFields.TotalActive3rdPartyInterest || fieldName == DLRInventoryFormFields.TotalRentableSqft ||
                    fieldName == DLRInventoryFormFields.LargestContiguousSuite || fieldName == DLRInventoryFormFields.EstimatedCostsUSD ||
                    fieldName == DLRInventoryFormFields.KWofUPS || fieldName == DLRInventoryFormFields.TotalROFO) {
                    var rowVal = this.isFloat(Number(row[fieldName])) ? Number(row[fieldName]).toFixed(2).toString() : Number(row[fieldName]).toString();
                    return Number(rowVal) > 0 ? rowVal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : "";
                }
                else if (fieldName == DLRInventoryFormFields.DesignedDensity) {
                    var designedDensity = Number(row[fieldName]) >= 0 ? row[fieldName]?.toString()?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : "";
                    var designedDensityUnit = row[DLRInventoryFormFields.DesignedDensityUnit] != null ? row[DLRInventoryFormFields.DesignedDensityUnit] : "";
                    return (designedDensityUnit != "") ? `${designedDensity} ${designedDensityUnit}` : "";
                }
                else {
                    return row[fieldName];
                }
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        var data = csvdata;
        let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet('DLR Inventory');
        worksheet.getRow(1).values = isTemplate ? [DLRInventoryFields.GlobalRegion, DLRInventoryFields.Region, DLRInventoryFields.Market, DLRInventoryFields.CompanyName, DLRInventoryFields.Property, DLRInventoryFields.PropertyCode, DLRInventoryFields.AirportCode,
        DLRInventoryFields.Name, DLRInventoryFields.TotalRentableSqft, DLRInventoryFields.KWofUPS, DLRInventoryFields.SuiteCondition, DLRInventoryFields.ProductType, DLRInventoryFields.CPS,
        DLRInventoryFields.TargetProductSize, DLRInventoryFields.LargestContiguousSuite, DLRInventoryFields.ChilledWater, DLRInventoryFields.DesignedDensity, DLRInventoryFields.ElectricalTopology, DLRInventoryFields.MechanicalTopology, DLRInventoryFields.EarliestDeliveryDate,
        DLRInventoryFields.TotalROFO, DLRInventoryFields.ROFOCustomer, DLRInventoryFields.TotalActive3rdPartyInterest, DLRInventoryFields.Prospect, DLRInventoryFields.Comments,
        DLRInventoryFields.EstimatedCostsUSD, DLRInventoryFields.ProjectScope, DLRInventoryFields.DeliveryStatus, DLRInventoryFields.ResponsibleParty, /*DLRInventoryFields.SecurePerimeter,*/
        DLRInventoryFields.IndustryOrComplianceCertifications/*, DLRInventoryFields.CloudOnRamp, DLRInventoryFields.NetworkDensity, DLRInventoryFields.SmartHands*/] :
            [DLRInventoryFields.GlobalRegion, DLRInventoryFields.Region, DLRInventoryFields.Market, DLRInventoryFields.CompanyName, DLRInventoryFields.Property, DLRInventoryFields.PropertyCode, DLRInventoryFields.AirportCode,
            DLRInventoryFields.Name, DLRInventoryFields.TotalRentableSqft, DLRInventoryFields.KWofUPS, DLRInventoryFields.SuiteCondition, DLRInventoryFields.ProductType, DLRInventoryFields.CPS, DLRInventoryFields.TargetProductSize,
            DLRInventoryFields.LargestContiguousSuite, DLRInventoryFields.ChilledWater, DLRInventoryFields.DesignedDensity, DLRInventoryFields.ElectricalTopology, DLRInventoryFields.MechanicalTopology, DLRInventoryFields.EarliestDeliveryDate, DLRInventoryFields.TotalROFO, DLRInventoryFields.ROFOCustomer,
            DLRInventoryFields.TotalActive3rdPartyInterest, DLRInventoryFields.Prospect, DLRInventoryFields.Comments,
            DLRInventoryFields.EstimatedCostsUSD, DLRInventoryFields.ProjectScope, DLRInventoryFields.DeliveryStatus, DLRInventoryFields.ResponsibleParty,/* DLRInventoryFields.SecurePerimeter,*/
            DLRInventoryFields.IndustryOrComplianceCertifications, /*DLRInventoryFields.CloudOnRamp, DLRInventoryFields.NetworkDensity, DLRInventoryFields.SmartHands,*/ DLRInventoryFields.DateModified, DLRInventoryFields.ModifiedBy];

        worksheet.columns = isTemplate ? [
            { key: DLRInventoryFormFields.GlobalRegion, width: 20, values: [] },
            { key: DLRInventoryFormFields.Region, width: 20 },
            { key: DLRInventoryFormFields.Market, width: 20 },
            { key: DLRInventoryFormFields.CompanyName, width: 20 },
            { key: DLRInventoryFormFields.Property, width: 25 },
            { key: DLRInventoryFormFields.PropertyCode, width: 18 },
            { key: DLRInventoryFormFields.AirportCode, width: 16 },
            { key: DLRInventoryFormFields.Name, width: 20 },
            { key: DLRInventoryFormFields.TotalRentableSqft, width: 10 },
            { key: DLRInventoryFormFields.KWofUPS, width: 20 },
            { key: DLRInventoryFormFields.SuiteCondition, width: 16 },
            { key: DLRInventoryFormFields.ProductType, width: 14 },
            { key: DLRInventoryFormFields.CPS, width: 20 },
            { key: DLRInventoryFormFields.TargetProductSize, width: 20 },
            { key: DLRInventoryFormFields.LargestContiguousSuite, width: 28 },
            { key: DLRInventoryFormFields.ChilledWater, width: 24 },
            { key: DLRInventoryFormFields.DesignedDensity, width: 24 },
            { key: DLRInventoryFormFields.ElectricalTopology, width: 24 },
            { key: DLRInventoryFormFields.MechanicalTopology, width: 24 },
            { key: DLRInventoryFormFields.EarliestDeliveryDate, width: 24 },
            { key: DLRInventoryFormFields.TotalROFO, width: 18 },
            { key: DLRInventoryFormFields.ROFOCustomer, width: 20 },
            { key: DLRInventoryFormFields.TotalActive3rdPartyInterest, width: 27 },
            { key: DLRInventoryFormFields.Prospect, width: 25 },
            { key: DLRInventoryFormFields.Comments, width: 25 },
            { key: DLRInventoryFormFields.EstimatedCostsUSD, width: 20 },
            { key: DLRInventoryFormFields.ProjectScope, width: 25 },
            { key: DLRInventoryFormFields.DeliveryStatus, width: 20 },
            { key: DLRInventoryFormFields.ResponsibleParty, width: 20 },
            { key: DLRInventoryFormFields.IndustryOrComplianceCertifications, width: 32 },
        ] : [
            { key: DLRInventoryFormFields.GlobalRegion, width: 20, values: [] },
            { key: DLRInventoryFormFields.Region, width: 20 },
            { key: DLRInventoryFormFields.Market, width: 20 },
            { key: DLRInventoryFormFields.CompanyName, width: 20 },
            { key: DLRInventoryFormFields.Property, width: 25 },
            { key: DLRInventoryFormFields.PropertyCode, width: 18 },
            { key: DLRInventoryFormFields.AirportCode, width: 16 },
            { key: DLRInventoryFormFields.Name, width: 20 },
            { key: DLRInventoryFormFields.TotalRentableSqft, width: 10 },
            { key: DLRInventoryFormFields.KWofUPS, width: 20 },
            { key: DLRInventoryFormFields.SuiteCondition, width: 16 },
            { key: DLRInventoryFormFields.ProductType, width: 14 },
            { key: DLRInventoryFormFields.CPS, width: 20 },
            { key: DLRInventoryFormFields.TargetProductSize, width: 20 },
            { key: DLRInventoryFormFields.LargestContiguousSuite, width: 28 },
            { key: DLRInventoryFormFields.ChilledWater, width: 24 },
            { key: DLRInventoryFormFields.DesignedDensity, width: 24 },
            { key: DLRInventoryFormFields.ElectricalTopology, width: 24 },
            { key: DLRInventoryFormFields.MechanicalTopology, width: 24 },
            { key: DLRInventoryFormFields.EarliestDeliveryDate, width: 24 },
            { key: DLRInventoryFormFields.TotalROFO, width: 18 },
            { key: DLRInventoryFormFields.ROFOCustomer, width: 20 },
            { key: DLRInventoryFormFields.TotalActive3rdPartyInterest, width: 27 },
            { key: DLRInventoryFormFields.Prospect, width: 25 },
            { key: DLRInventoryFormFields.Comments, width: 25 },
            { key: DLRInventoryFormFields.EstimatedCostsUSD, width: 20 },
            { key: DLRInventoryFormFields.ProjectScope, width: 25 },
            { key: DLRInventoryFormFields.DeliveryStatus, width: 20 },
            { key: DLRInventoryFormFields.ResponsibleParty, width: 20 },
            { key: DLRInventoryFormFields.IndustryOrComplianceCertifications, width: 32 },
            { key: "DateModified", width: 15 },
            { key: "ModifiedBy", width: 20 }
        ]

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 32) {
                cell = this.getExcelStyles(cell);
                if (number == 9 || number == 10 || number == 15 || number == 21 || number == 26) {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            }
        });

        worksheet.getColumn(DLRInventoryFormFields.GlobalRegion).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Region).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Market).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.CompanyName).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Property).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.PropertyCode).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.AirportCode).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Name).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.TotalRentableSqft).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.KWofUPS).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.SuiteCondition).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ProductType).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.EarliestDeliveryDate).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.TotalROFO).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ROFOCustomer).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.TotalActive3rdPartyInterest).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.LargestContiguousSuite).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.EstimatedCostsUSD).style = { alignment: { horizontal: 'right', vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Prospect).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.Comments).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ProjectScope).style = { alignment: { wrapText: true, vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.CPS).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.DeliveryStatus).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ResponsibleParty).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.TargetProductSize).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.IndustryOrComplianceCertifications).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ChilledWater).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.DesignedDensity).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.ElectricalTopology).style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn(DLRInventoryFormFields.MechanicalTopology).style = { alignment: { vertical: 'middle' } };
        if (!isTemplate) {
            worksheet.getColumn("DateModified").style = { alignment: { vertical: 'middle' } };
            worksheet.getColumn("ModifiedBy").style = { alignment: { wrapText: true, vertical: 'middle' } };
        }

        worksheet.addRows(data);
        workbook.xlsx.writeBuffer().then((data: any) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            a.click();
        });
    }

    getMarketsWorksheet(wrksheet: Excel.Worksheet, markets: Array<IMarket>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Region");
        dataFields.push("Market");

        let data = markets.map((row: any) => dataFields.map((fieldName: any) => {
            try {

                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Region", "Market"];

        worksheet.columns = [
            { key: "Region", width: 20 },
            { key: "Market", width: 20 }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 4) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Region").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("Market").style = { alignment: { vertical: 'middle' } };

        worksheet.addRows(data);
        return worksheet;
    }

    getPropertiesWorksheet(wrksheet: Excel.Worksheet, properties: Array<IProperty>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Market");
        dataFields.push("PropertyAddress");

        let data = properties.map((row: any) => dataFields.map((fieldName: any) => {
            try {

                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Market", "Property"];

        worksheet.columns = [
            { key: "Market", width: 20 },
            { key: "PropertyAddress", width: 50 }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 4) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Market").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("PropertyAddress").style = { alignment: { vertical: 'middle' } };

        worksheet.addRows(data);
        return worksheet;
    }

    getGlobalPropertiesWorksheet(wrksheet: Excel.Worksheet, properties: IProperty[]) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("GlobalRegion");
        dataFields.push("Region");
        dataFields.push("Market");
        dataFields.push("CompanyName");
        dataFields.push("Property");
        dataFields.push("PropertyCode");
        dataFields.push("SiteCode");

        let data = properties.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                if (fieldName == "Property")
                    return row[fieldName].substring(row[fieldName].indexOf('>') + 1).trim();
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Global Region", "Region", "Market", "Company Name", "Property Name", "Property Code", "Airport Code"];

        worksheet.columns = [
            { key: "GlobalRegion", width: 20, values: [] },
            { key: "Region", width: 20 },
            { key: "Market", width: 20 },
            { key: "CompanyName", width: 20 },
            { key: "Property", width: 56 },
            { key: "PropertyCode", width: 20 },
            { key: "SiteCode", width: 16 }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 7) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("GlobalRegion").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("Region").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("Market").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("CompanyName").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("Property").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("PropertyCode").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("SiteCode").style = { alignment: { vertical: 'middle' } };

        worksheet.addRows(data);
        return worksheet;
    }

    getSuiteConditionWorksheet(wrksheet: Excel.Worksheet, suiteConditions: Array<ISuiteCondition>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("SuiteCondition");

        let data = suiteConditions.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Suite Conditions"];

        worksheet.columns = [
            { key: "SuiteCondition", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("SuiteCondition").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getAssetScoringWorksheet(wrksheet: Excel.Worksheet, assetScorings: Array<IAssetScoring>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("AssetScoring");

        let data = assetScorings.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Asset Scoring"];

        worksheet.columns = [
            { key: "AssetScoring", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("AssetScoring").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getCPSWorksheet(wrksheet: Excel.Worksheet, cps: Array<ICPS>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Name");

        let data = cps.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["CPS"];

        worksheet.columns = [
            { key: "Name", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Name").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getDeliveryStatusWorksheet(wrksheet: Excel.Worksheet, deliveryStatuses: Array<IDeliveryStatus>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("DeliveryStatus");

        let data = deliveryStatuses.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Delivery Status"];

        worksheet.columns = [
            { key: "DeliveryStatus", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("DeliveryStatus").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getResponsiblePartyWorksheet(wrksheet: Excel.Worksheet, responsibleParties: Array<IResponsibleParty>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("ResponsibleParty");

        let data = responsibleParties.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Responsible Party"];

        worksheet.columns = [
            { key: "ResponsibleParty", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("ResponsibleParty").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getWaterCoolingWorksheet(wrksheet: Excel.Worksheet, waterCooling: Array<IWaterCooling>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("WaterCooling");

        let data = waterCooling.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Water Cooling"];

        worksheet.columns = [
            { key: "WaterCooling", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("WaterCooling").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getTargetProductSizeWorksheet(wrksheet: Excel.Worksheet, targetProductSizes: Array<ITargetProductSize>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("TargetProductSize");

        let data = targetProductSizes.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Target Product Size"];

        worksheet.columns = [
            { key: "TargetProductSize", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("TargetProductSize").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getSecurePerimeterWorksheet(wrksheet: Excel.Worksheet, securePerimeters: Array<ISecurePerimeter>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("SecurePerimeter");

        let data = securePerimeters.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Secure Perimeter"];

        worksheet.columns = [
            { key: "SecurePerimeter", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("SecurePerimeter").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getIndustryOrComplianceCertificationsWorksheet(wrksheet: Excel.Worksheet, securePerimeters: Array<IIndustryOrComplianceCertifications>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("IndustryOrComplianceCertifications");

        let data = securePerimeters.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Industry/Compliance Certifications"];

        worksheet.columns = [
            { key: "IndustryOrComplianceCertifications", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("IndustryOrComplianceCertifications").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getCloudOnRampWorksheet(wrksheet: Excel.Worksheet, cloudOnRamp: Array<ICloudOnRamp>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("CloudOnRamp");

        let data = cloudOnRamp.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Cloud On-Ramp"];

        worksheet.columns = [
            { key: "CloudOnRamp", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("CloudOnRamp").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getNetworkDensityWorksheet(wrksheet: Excel.Worksheet, networkDensity: Array<INetworkDensity>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("NetworkDensity");

        let data = networkDensity.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Network Density"];

        worksheet.columns = [
            { key: "NetworkDensity", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("NetworkDensity").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getSmartHandsWorksheet(wrksheet: Excel.Worksheet, smartHands: Array<ISmartHands>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("SmartHands");

        let data = smartHands.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Smart-Hands"];

        worksheet.columns = [
            { key: "SmartHands", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("SmartHands").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getProductTypeWorksheet(wrksheet: Excel.Worksheet, productTypes: Array<IProductType>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("ProductType");
        dataFields.push("ProductTypeValue");

        let data = productTypes.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Product Type", "Display Value"];

        worksheet.columns = [
            { key: "ProductType", width: 20, values: [] },
            { key: "ProductTypeValue", width: 20 }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 2) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("ProductType").style = { alignment: { vertical: 'middle' } };
        worksheet.getColumn("ProductTypeValue").style = { alignment: { vertical: 'middle' } };

        worksheet.addRows(data);

        return worksheet;
    }

    getSourcesWorksheet(wrksheet: Excel.Worksheet, sources: Array<IComparablesSource>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Source");

        let data = sources.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Sources"];

        worksheet.columns = [
            { key: "Source", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Source").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getQuartersWorksheet(wrksheet: Excel.Worksheet, quartersAvailable: Array<string>, isComparables: boolean) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("QuartersAvailable");
        var qsAvailable: string[] = [];
        if (isComparables) {
            for (var i = 14; i <= Number(quartersAvailable[0].slice(-2)); i++) {
                for (var j = 1; j <= 4; j++) {
                    if (quartersAvailable[0] == (j + "Q" + i))
                        break;
                    qsAvailable.push(j.toString() + "Q" + i.toString());
                }
            }
            qsAvailable = qsAvailable.concat(quartersAvailable);
        }
        else {
            qsAvailable = quartersAvailable;
        }

        let data = qsAvailable.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row;
            }
            catch (err) {
                return row;
            }
        }));

        worksheet.getRow(1).values = ["Quarters Available"];

        worksheet.columns = [
            { key: "QuartersAvailable", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("QuartersAvailable").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getRedundanciesWorksheet(wrksheet: Excel.Worksheet, redundancies: Array<IRedundancy>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Redundancy");

        let data = redundancies.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Redundancies"];

        worksheet.columns = [
            { key: "Redundancy", width: 26, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Redundancy").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getStagesWorksheet(wrksheet: Excel.Worksheet, stages: Array<IStage>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Stage");

        let data = stages.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Stages"];

        worksheet.columns = [
            { key: "Stage", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Stage").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getSDRatingsWorksheet(wrksheet: Excel.Worksheet, sdRatings: Array<ISDRating>) {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("Rating");

        let data = sdRatings.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Supply/Demand Ratings"];

        worksheet.columns = [
            { key: "Rating", width: 30, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("Rating").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getChilledWaterWorkSheet(wrksheet: Excel.Worksheet, chilledWaters: IChilledWater[]): Excel.Worksheet {
        var worksheet = wrksheet;
        var dataFields: any = [];
        dataFields.push("ChilledWater");

        let data = chilledWaters.map((row: any) => dataFields.map((fieldName: any) => {
            try {
                return row[fieldName];
            }
            catch (err) {
                return row[fieldName];
            }
        }));

        worksheet.getRow(1).values = ["Chilled Water"];

        worksheet.columns = [
            { key: "ChilledWater", width: 20, values: [] }
        ];

        worksheet.getRow(1).eachCell((cell, number) => {
            if (number <= 1) {
                cell = this.getExcelStyles(cell);
            }
        });

        worksheet.getColumn("ChilledWater").style = { alignment: { vertical: 'middle' } };
        worksheet.addRows(data);

        return worksheet;
    }

    getExcelStyles(excelCell: Excel.Cell) {
        var cell: Excel.Cell = excelCell;
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
                argb: '2F75B5'
            },
            bgColor: {
                argb: '2F75B5'
            },
        };
        cell.font = {
            color: {
                argb: 'FFFFFF',
            },
            bold: true
        }
        cell.border = {
            top: {
                style: 'thin',
                color: {
                    argb: 'FFFFFF',
                },
            },
            left: {
                style: 'thin',
                color: {
                    argb: 'FFFFFF',
                },
            },
            bottom: {
                style: 'thin',
                color: {
                    argb: 'FFFFFF',
                },
            },
            right: {
                style: 'thin',
                color: {
                    argb: 'FFFFFF',
                },
            }
        };
        return cell;
    }

    getOriginalValueWithProperty(value: string, values: any[], property: string) {
        var originalValue = value;
        values.map((v) => {
            if (property != null && property != undefined && v[property] != null && v[property] != undefined && v[property]!.toLowerCase().trim() == value!.toLowerCase())
                originalValue = v[property];
        });
        return originalValue;
    }

    getProductTypeValue(productType: string, productTypes: Array<IProductType>) {
        var originalProductType = productType;
        productTypes.map((pType) => {
            if (pType.ProductType.toLowerCase().trim() == productType.toLowerCase() || pType.ProductTypeValue.toLowerCase().trim() == productType.toLowerCase())
                originalProductType = pType.ProductType;
        });
        return originalProductType;
    }

    getPropertyAddressValue(value: string, values: Array<IProperty>) {
        var originalValue = value;
        values.map((v) => {
            if (v.Property?.substring(v.Property.indexOf('>') + 1).toLowerCase().trim() == value.toLowerCase())
                originalValue = v.Property;
        });
        return originalValue;
    }

    excelSerialDateToJSDate = (serialDate): Date => {
        var hours = Math.floor((serialDate % 1) * 24);
        var minutes = Math.floor((((serialDate % 1) * 24) - hours) * 60)
        return new Date(Date.UTC(0, 0, serialDate, hours - 17, minutes));
    }

    initializeDLRInventory(): IDLRInventory {
        return {
            ID: 0,
            GlobalRegion: "",
            Region: "",
            Market: "",
            Property: "",
            PropertyCode: "",
            PropertyName: "",
            Name: "",
            QuarterID: 0,
            TotalRentableSqft: 0,
            KWofUPS: 0,
            SuiteCondition: "",
            ProductType: "",
            TotalROFO: 0,
            ROFOCustomer: "",
            TotalActive3rdPartyInterest: 0,
            Prospect: "",
            Comments: "",
            Status: "",
            CompanyName: "",
            AirportCode: "",
            AssetScoring: "",
            CPS: "",
            ProjectScope: "",
            DeliveryStatus: "",
            ResponsibleParty: "",
            WaterCooling: "",
            TargetProductSize: "",
            SecurePerimeter: "",
            IndustryOrComplianceCertifications: "",
            CloudOnRamp: "",
            NetworkDensity: "",
            SmartHands: "",
            EstimatedCostsUSD: 0,
            PowerDensity: 0,
            LargestContiguousSuite: 0,
            ChilledWater: "",
            DesignedDensity: 0,
            DesignedDensityUnit: "",
            ElectricalTopology: "",
            MechanicalTopology: "",
        }
    }

    exportTabletoExcel(data: any,filename:string) {
        if (data) {
            const filteredData = data.map((row: any) =>
                Object.fromEntries(Object.entries(row).filter(([key, value]) => key !== "" && value !== ""))
            ).filter((row: any) => Object.keys(row).length > 0);
            const worksheet = XLSX.utils.json_to_sheet(filteredData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            XLSX.writeFile(workbook, `${filename}.xlsx`);
        }
    }

    getPops(provider: IConnectivity, connectivities: IConnectivity[]): number {
        return connectivities.filter(connectivity => connectivity.ProviderName !== null && connectivity.ProviderName === provider.ProviderName && connectivity.LocalAsn !== null).length;
    }


    getNetworks(provider: IConnectivity, connectivities: IConnectivity[]): number {
        var distinctLocalAsn: number[] = [];
        connectivities.forEach(connectivity => {
            if (connectivity.ProviderName === provider.ProviderName && !distinctLocalAsn.includes(connectivity.LocalAsn)) {
                distinctLocalAsn.push(connectivity.LocalAsn);
            }
        });
        return distinctLocalAsn.length
    }
    segregateLineChartsPerYear(filteredSupplies: ISupply[], dataCenterSupplies: ISupply[]) {
        if (filteredSupplies.length !== 0 && dataCenterSupplies.length !== 0) {
            var providers: string[] = [];
            filteredSupplies.forEach((provider) => {
                if (!providers.includes(provider.DataCenterProviderId)) {
                    providers.push(provider.DataCenterProviderId)
                }
            })
            var suppliesPerYear: ISupply[] = [];

            providers.forEach((supply) => {
                var x = dataCenterSupplies.filter((s) => s.DataCenterProviderId === supply);
                if (x !== null) {
                    suppliesPerYear.push(...x)
                }
            })
            return suppliesPerYear
        }
        return [];
    }

    getFormData(email: IEmail): FormData {
        var formData = new FormData();
        try {
            formData.append('Title', email?.Title?.trim());
            formData.append('Message', email?.Message?.trim());
            if (email.Attachment instanceof Blob && email.Attachment.size > 0) {
                formData.append('Attachment', email.Attachment);
            }
            return formData;
        }
        catch (ex) {
            this.showNotification("Error while sending mail to support team", NotificationType.Failure);
        }
        return formData;
    }

    validateFormData(email: IEmail) {
        if (email?.Title === undefined || email?.Title?.trim().length === 0) {
            return false
        } else if (email?.Message === undefined || email?.Message?.trim().length === 0) {
            return false
        } else if (email?.Title?.trim().length === 0 && email?.Message?.trim().length === 0) {
            return false
        } else {
            return true
        }
    }
}


