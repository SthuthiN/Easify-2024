namespace Easify.Concerns.Common
{
    public static class QueryHelper
    {
        public class Tables
        {
            public static string EmployeeDetails = "[dbo].[EmployeeDetails]";
            public static string UserRoles = "[dbo].[UserRoles]";
            public static string UserAccessRoles = "[dbo].[UserAccessRoles]";
            public static string Bookmarks = "[dbo].[Bookmark]";
            public static string UserSettings = "[dbo].[UserSettings]";
            public static string UserConfiguration = "[dbo].[UserConfiguration]";
            public static string Tabs = "[dbo].[Tab]";
        }

        public class DataLakeTables
        {
            public static string MarketActivities = "[3_PRP].[V_MARKET_ACTIVITIES]";
            public static string DataCenterSupplies = "[3_PRP].[V_MID_DATACENTER_SUPPLY]";
            public static string SPCapabilities = "[3_PRP].[V_MID_CAPABILITIES]";
            public static string Connectivities = "[3_PRP].[V_MID_CONNECTIVITIES]";
            public static string AggregateConnectivities = "[3_PRP].[V_MID_CONNECTIVITY_AGGREGATE]";
            public static string ConnectivityCoordinates = "[3_PRP].V_MID_CONNECTIVITIES_GEO";
        }

        public class DataLakeViews
        {
            public static string GetMarketActivities = "[3_PRP].[V_MARKET_ACTIVITIES]";
            public static string GetDataCenterSupplies = "[3_PRP].[V_MID_DATACENTER_SUPPLY]";
            public static string GetSPCapabilities = "[3_PRP].[V_MID_CAPABILITIES]";
            public static string GetConnectivities = "[3_PRP].[V_MID_CONNECTIVITIES]";
            public static string GetAggregateConnectivities = "[3_PRP].[V_MID_CONNECTIVITY_AGGREGATE]";
            public static string GetConnectivityCoordinates = "[3_PRP].V_MID_CONNECTIVITIES_GEO";
            public static string GetComparables = "[3_PRP].[V_LP_MARKET_INTELLIGENCE_COMPARABLES]";
            public static string GetInventoriesByType = "[3_PRP].V_GLOBAL_CAPACITY_REPORT";
        }
        public class Views
        {
            public static string GetMarkets = "[dbo].[GetMarkets]";
            public static string GetFooterLinks = "[dbo].[GetFooterLinks]";
            public static string GetEmails = "[dbo].[GetEmails]";
            public static string GetRegions = "[dbo].[GetRegions]";
            public static string GetTopCompetitorInventories = "[dbo].[GetTopCompetitorInventories]";
            public static string GetDataCenterSupplies = "[dbo].[GetDataCenterSupplies]";
            public static string GetSPCapabilities = "[dbo].[GetSPCapabilities]";
            public static string GetConnectivities = "[dbo].[GetConnectivities]";
            public static string GetMarketActivities = "[dbo].[GetMarketActivities]";
            public static string GetRegionWiseMetrics = "[dbo].[GetRegionWiseMetrics]";
            public static string GetUserConfigurations = "[dbo].[GetUserConfigurations]";
        }
        public class StoredProcedures
        {
            public static string GetBootmarks = "[dbo].[GetBookmarks]";
            public static string SaveUserSettings = "[dbo].[SaveUserSettings]";
            public static string GetConnectivities = "[dbo].[GetConnectivities]";
        }
        public class Queries
        {
            // TODO: Change Admin logic in Query...
            public static string GetUserRoles = $"SELECT * FROM {Tables.UserRoles} WHERE [IsActive] = 1";
            public static string GetUsers = $"SELECT * FROM {Tables.EmployeeDetails} WHERE [IsActive] = 1";
            public static string GetAccessRoles = $"SELECT * FROM {Tables.UserAccessRoles} WHERE [IsActive] = 1";
            public static string GetUserRole = $"SELECT UR.*, CASE WHEN UR.[RoleId] = 1 THEN CONVERT(bit, 1) ELSE CONVERT(bit, 0) END AS [IsAdmin] FROM {Tables.EmployeeDetails} ED LEFT JOIN {Tables.UserRoles} UR ON (UR.[Email] = ED.[Email] AND UR.[IsActive] = 1) WHERE ED.[Email] = @Email AND ED.[IsActive] = 1";
            public static string AddUserRole = $"INSERT INTO {Tables.UserRoles} ([Email], [Name], [RoleId],[CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn]) VALUES (@Email, @Name, @RoleId, @CreatedBy, @CreatedOn, @ModifiedBy, @ModifiedOn)";
            public static string UpdateUserRole = $"UPDATE {Tables.UserRoles} SET [RoleId] = @RoleId, [ModifiedBy]=@ModifiedBy, [ModifiedOn]=@ModifiedOn WHERE Id=@Id";
            public static string DeleteUserRole = $"UPDATE {Tables.UserRoles} SET [IsActive]=0 WHERE [Id]=@Id";
            public static string GetMarkets = $"SELECT * FROM {Views.GetMarkets}";
            public static string GetFooterLinks = $"SELECT * FROM {Views.GetFooterLinks}";
            public static string GetEmails = $"SELECT * FROM {Views.GetEmails}";
            public static string GetRegions = $"SELECT * FROM {Views.GetRegions}";
            public static string saveBookmark = $"INSERT INTO {Tables.Bookmarks} ([Title], [Email], [RegionId], [BusinessRegionId], [CountryId], [CityId], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn],[IsDLR]) VALUES(@Title, @Email, @RegionId, @BusinessRegionId, @CountryId, @CityId, @CreatedBy, @CreatedOn, @ModifiedBy, @ModifiedOn,@IsDLR)";
            public static string GetBookmarkById = $"SELECT [Id], [Title], [Email], [RegionId], [BusinessRegionId], [CountryId], [CityId],[IsDLR] FROM {Tables.Bookmarks} WHERE Id=@Id";
            public static string DeleteBookmark = $"UPDATE {Tables.Bookmarks} SET [IsActive]=0 WHERE [Id]=@Id";
            public static string GetTopCompetitorInventories = $"SELECT * FROM {Views.GetTopCompetitorInventories}";
            public static string GetUserSettings = $"SELECT * FROM {Tables.UserSettings} WHERE [Email]=@Email";
            public static string GetDataCenterSupplies = $"SELECT * FROM {DataLakeViews.GetDataCenterSupplies}";
            public static string GetSPCapabilities = $"SELECT * FROM {DataLakeViews.GetSPCapabilities}";
            public static string GetConnectivities = $"SELECT * FROM {DataLakeTables.Connectivities}";
            public static string GetAggregateConnectivities = $"SELECT * FROM {DataLakeViews.GetAggregateConnectivities}";
            public static string GetMarketActivities = $"SELECT * FROM {DataLakeViews.GetMarketActivities}";
            public static string GetConnectivityCoordinates = $"SELECT * FROM {DataLakeViews.GetConnectivityCoordinates}";
            //public static string GetRegionWiseMetrics= $"SELECT * FROM {Views.GetRegionWiseMetrics}";
            public static string GetComparables = $"SELECT [ID],[Source],[Region],[Market],[Provider],[Address],[Customer],[QuarterID],[ProductType],[Redundancy],[NRSF],[kW],[DateCreated],[DateModified],[ModifiedBy],[IsActive],[IsNew],[Escalations],[RSF],[IsDeleted],[geoid] FROM {DataLakeViews.GetComparables} WHERE DateCreated IS NOT NULL AND DateModified IS NOT NULL";
            public static string GetInventoriesByType = $"SELECT * FROM {DataLakeViews.GetInventoriesByType}";
            public static string GetUserConfiguration = $"SELECT * FROM {Views.GetUserConfigurations} WHERE [Email]=@Email";
            public static string GetUserConfigurations = $"SELECT * FROM {Views.GetUserConfigurations}";
            public static string GetTabs = $"SELECT * FROM {Tables.Tabs} WHERE [IsActive]=1";
            public static string AddUserConfiguration = $"INSERT INTO {Tables.UserConfiguration} ([Email],[Name], [DefaultTabId],[CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn],[IsDLR]) VALUES (@Email,@Name, @DefaultTabId, @CreatedBy, @CreatedOn, @ModifiedBy, @ModifiedOn,@IsDLR)";
            public static string UpdateUserConfiguration = $"UPDATE {Tables.UserConfiguration} SET  [DefaultTabId]=@DefaultTabId,[IsDLR]=@IsDLR, [ModifiedBy]=@ModifiedBy, [ModifiedOn]=@ModifiedOn WHERE Id=@Id";
            public static string DeleteUserConfiguration = $"UPDATE {Tables.UserConfiguration} SET [IsActive]=0 WHERE [Email]=@Email";
        }
    }
}
