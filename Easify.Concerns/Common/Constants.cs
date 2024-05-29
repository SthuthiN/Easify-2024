﻿
namespace Easify.Concerns.Common
{
    /// <summary>
    /// Class Constants.
    /// </summary>
    public static class Constants
    {
        public static string ConnectionStringKey = "DefaultConnection";
        public static string SupportTeam = "SMTPSettings:SupportTeam";
        public static string Host = "SMTPSettings:Host";
        public static string Port = "SMTPSettings:Port";
        public static string TestMailNote = "SMTPSettings:TestMailNote";
        public static string AutoGeneratedNote = "SMTPSettings:AutoGeneratedNote";
        public static string EmailSender = "SMTPSettings:EmailSender";
        public static string UserName = "Sharepoint:UserName";
        public static string Password = "Sharepoint:Password";
        public static string SiteUrl = "Sharepoint:SiteUrl";
        public static string AppUrl = "Application:AppUrl";
        public static string DocumentLibrary = "Sharepoint:DocumentLibrary";
        public static string AnalysisQuarterKey = "AnalysisQuarter";
        public static string AnalysisDocumentLibrary = "Sharepoint:AnalysisDocumentLibrary";
        public static string BattlecardsDocumentLibrary = "Sharepoint:BattlecardsDocumentLibrary";
        public static string CapacityDocumentLibrary = "Sharepoint:CapacityDocumentLibrary";
        public static string SecretShopperDocumentLibrary = "Sharepoint:SecretShopperDocumentLibrary";
        public static string UnderConstruction = "Under Construction";
        public static string Planned = "Planned";
        public static string Land = "Land";
        public static string Region = "Region";
        public static string BusinessRegion = "BusinessRegion";
        public static string Country = "Country";
        public static string City = "City";
        public static string DocumentType = "DocumentType";
        public static string ModifiedDate = "Modified";
        public static string ModifiedBy = "Modified_x0020_By";
        public static string ReportType = "ReportType";
        public static string FileName = "FileLeafRef";
        public static string MiUser = "MI User";
        public static string GetUser = "GetUser";
        public static string DataLakeConnection = "DataLakeConnection";
        public static string GetItem= "GetItem";
        public static string GetItems = "GetItems";
        public static string ExcecuteBulkUploadProcedure = "ExecuteBulkUploadPrcedure";
        public static string RootSite = "https://digitalrealty.sharepoint.com";
        public static string DLREmail = "SMTPSettings:DLREmail";
        public static string MIDSupport = "MID Support";
        public static string BCCMail = "snakkina@digitalraealty.com";

        public static class ReportsData
        {
            public static string Supplies = "supplies";
            public static string Capabilities = "capabilities";
            public static string Markets = "markets";
            public static string Connectivities = "connectivities";
        }
    }
    public class QoqValues
    {
        public double? TotalInventoryQoq { get; set; }
        public double? TotalInventoryPercentage { get; set; }
        public double? TotalSpaceQoq { get; set; }
        public double? TotalSpacePercentage { get; set; }
        public double? VacantSpaceQoq { get; set; }
        public double? VacantSpacePercentage { get; set; }
        public double? VacantInventoryQoq { get; set; }
        public double? VacantInventoryPercentage { get; set; }
    }
    
}