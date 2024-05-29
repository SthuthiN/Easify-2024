using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns.Common {
    #region Tables
    public class Tables {
        public static string DLRInventory = "[dbo].[DLRInventory]";
        public static string TempImportDLRInventory = "[dbo].[TempImportDLRInventory]";
        public static string DLRInventoryModifications = "[dbo].[DLRInventoryModifications]";
        public static string Opportunity = "[dbo].[Opportunity]";
        public static string TempImportOpportunity = "[dbo].[TempImportOpportunity]";
        public static string OpportunityModifications = "[dbo].[OpportunityModifications]";
        public static string Comparables = "[dbo].[Comparables]";
        public static string TempImportComparables = "[dbo].[TempImportComparables]";
        public static string ComparableModifications = "[dbo].[ComparablesModifications]";
        public static string CompetitorInventory = "[dbo].[CompetitorInventory]";
        public static string TempImportCompetitorInventory = "[dbo].[TempImportCompetitorInventory]";
        public static string CompetitorInventoryModifications = "[dbo].[CompetitorInventoryModifications]";
        public static string MarketIntelligenceConfiguration = "[dbo].[MarketIntelligenceConfiguration]";
        public static string Quarter = "[dbo].[Quarter]";
        public static string DimProperty = "[dbo].[DimProperty]";
        public static string ComparablesSource = "[dbo].[ComparablesSource]";
        public static string Market = "[dbo].[Market]";
        public static string ProductType = "[dbo].[ProductType]";
        public static string Property = "[dbo].[Property]";
        public static string Redundancy = "[dbo].[Redundancy]";
        public static string Region = "[dbo].[Region]";
        public static string SDRating = "[dbo].[SDRating]";
        public static string Stage = "[dbo].[Stage]";
        public static string SuiteCondition = "[dbo].[SuiteCondition]";
        public static string LogHistory = "[dbo].[LogHistory]";
        public static string CompetitorSuiteCondition = "[dbo].[CompetitorSuiteCondition]";
        public static string AssetScoring = "[dbo].[AssetScoring]";
        public static string CPS = "[dbo].[CPS]";
        public static string DeliveryStatus = "[dbo].[DeliveryStatus]";
        public static string ResponsibleParty = "[dbo].[ResponsibleParty]";
        public static string WaterCooling = "[dbo].[WaterCooling]";
        public static string TargetProductSize = "[dbo].[TargetProductSize]";
        public static string SecurePerimeter = "[dbo].[SecurePerimeter]";
        public static string IndustryOrComplianceCertifications = "[dbo].[IndustryOrComplianceCertifications]";
        public static string CloudOnRamp = "[dbo].[CloudOnRamp]";
        public static string NetworkDensity = "[dbo].[NetworkDensity]";
        public static string SmartHands = "[dbo].[SmartHands]";
        public static string ChilledWater = "[dbo].[ChilledWater]";
    }
    #endregion

    #region StoredProcedures
    public class StoredProcedures {
        public static string GetDLRInventories = "[dbo].[GetDLRInventories]";  /*update*/
        public static string GetDLRInventoriesForApproval = "[dbo].[GetDLRInventoriesForApproval]";  /*update*/
        public static string GetDLRInventory = "[dbo].[GetDLRInventory]";  /*update*/
        public static string GetDLRInventoryModifications = "[dbo].[GetDLRInventoryModifications]";  /*update*/
        public static string DumpToMainDLRInventory = "[dbo].[DumpToMainDLRInventory]";  /*update*/
        public static string GetCompetitorInventories = "[dbo].[GetCompetitorInventories]";
        public static string GetCompetitorInventoriesForApproval = "[dbo].[GetCompetitorInventoriesForApproval]";
        public static string GetCompetitorInventory = "[dbo].[GetCompetitorInventory]";
        public static string GetCompetitorInventoryModifications = "[dbo].[GetCompetitorInventoryModifications]";
        public static string DumpToMainCompetitorInventory = "[dbo].[DumpToMainCompetitorInventory]";
        public static string GetComparables = "[dbo].[GetComparables]";
        public static string GetComparablesForApproval = "[dbo].[GetComparablesForApproval]";
        public static string GetComparablesByID = "[dbo].[GetComparablesByID]";
        public static string GetComparablesModifications = "[dbo].[GetComparablesModifications]";
        public static string DumpToMainComparables = "[dbo].[DumpToMainComparables]";
        public static string GetOpportunities = "[dbo].[GetOpportunities]";
        public static string GetOpportunitiesForApproval = "[dbo].[GetOpportunitiesForApproval]";
        public static string GetOpportunity = "[dbo].[GetOpportunity]";
        public static string GetOpportunityModifications = "[dbo].[GetOpportunityModifications]";
        public static string DumpToMainOpportunities = "[dbo].[DumpToMainOpportunities]";

        #region Admin
        public static string CopyPrevQuarterComparablesData = "[dbo].[CopyPrevQuarterComparablesData]";
        public static string CopyPrevQuarterDLRInventoryData = "[dbo].[CopyPrevQuarterDLRInventoryData]";  /*update*/
        public static string CopyPrevQuarterCompetitorInventoryData = "[dbo].[CopyPrevQuarterCompetitorInventoryData]";
        public static string IsCurrentQuarterLockable = "[dbo].[IsCurrentQuarterLockable]"; /*update*/
        #endregion
    }
    #endregion

    #region Views
    public class Views {

    }
    #endregion

    #region QueryStrings
    public class QueryStrings {
        #region Common
        public static string GetCurrentAnalysisQuarter = $"Select [Value] from {Tables.MarketIntelligenceConfiguration} Where [Key] = '{Constants.AnalysisQuarterKey}'";
        public static string GetNextQuarter = $"Select Top 1 * from {Tables.Quarter} Where [ID] > @CurrentQuarterID";
        public static string UpdateAnalysisQuarter = $"Update {Tables.MarketIntelligenceConfiguration} Set Value = @AnalysisQuarter,CreatedBy = @CreatedBy, DateCreated = @DateCreated Where [Key] = '{Constants.AnalysisQuarterKey}'";
        public static string GetQuarterByYearAndQuarter = $"Select * from {Tables.Quarter} Where [Quarter] = @Quarter and [Year] = @Year";
        public static string UpdateQuarterByID = $"Update {Tables.Quarter} Set [IsLocked] = @IsLocked Where [ID] = @QuarterID";
        public static string GetSignQuarters = $"Select * from {Tables.Quarter} where ID >= @ID";
        public static string GetDistinctGlobalRegions = $"Select distinct GlobalRegion from {Tables.DimProperty}";
        public static string GetGlobalRegions = $"Select distinct Region, GlobalRegion from {Tables.DimProperty}";
        public static string GetGlobalMarkets = $"Select distinct Market, Region from {Tables.DimProperty}";
        public static string GetGlobalProperties = $"Select distinct PropertyCode, Property as PropertyAddress, Market from {Tables.DimProperty}";
        public static string GetProperties = $"Select * from {Tables.DimProperty}";
        public static string GetComparablesSource = $"Select * from {Tables.ComparablesSource}";
        public static string GetSDRatings = $"Select * from {Tables.SDRating} order by [Order]";
        public static string AddHistoryLog = $"INSERT INTO {Tables.LogHistory} ([Message], [UserName], [DateCreated], [Method]) VALUES (@Message, @UserName , @DateCreated, @Method)";
        #endregion

        #region DLRInventoy
        public static string AddDLRInventory = $"INSERT INTO {Tables.DLRInventory} ([GlobalRegion],[Region],[Market],[Property],[PropertyCode],[Name],[TotalRentableSqft],[kWofUPS],[SuiteCondition],[ProductType],[EarliestDeliveryDate],[TotalROFO(kW)],[ROFOCustomer]," +
            $"[TotalActive3rdPartyInterest(kW)], [Prospect(s)], [Comments], [DateModified],[DateCreated],[ModifiedBy],[IsActive],[IsNew],[QuarterID],[Status],[IsDeleted], [CompanyName], [AirportCode], [CPS], [ProjectScope], [DeliveryStatus], [ResponsibleParty], [TargetProductSize], [IndustryOrComplianceCertifications], [EstimatedCostsUSD], [LargestContiguousSuite], [ChilledWater], [DesignedDensity], [DesignedDensityUnit], [ElectricalTopology], [MechanicalTopology] ) Values " +
            $"(@GlobalRegion,@Region,@Market,@Property,@PropertyCode,@Name,@TotalRentableSqft,@KWofUPS,@SuiteCondition,@ProductType,@EarliestDeliveryDate,@TotalROFO,@ROFOCustomer," +
            $"@TotalActive3rdPartyInterest,@Prospect,@Comments,@DateModified,@CreatedOn,@ModifiedBy,@IsActive,@IsNew,@QuarterID,@Status,0, @CompanyName, @AirportCode, @CPS, @ProjectScope, @DeliveryStatus, @ResponsibleParty, @TargetProductSize, @IndustryOrComplianceCertifications, @EstimatedCostsUSD, @LargestContiguousSuite, @ChilledWater, @DesignedDensity, @DesignedDensityUnit, @ElectricalTopology, @MechanicalTopology)";
        public static string SoftDeleteDLRInventory = $"Update {Tables.DLRInventory} Set IsActive= @IsActive, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string HardDeleteDLRInventory = $"Update {Tables.DLRInventory} Set IsDeleted= @IsDeleted, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string AddDLRInventoryModifications = $"INSERT INTO {Tables.DLRInventoryModifications} ([ID],[GlobalRegion],[Region],[Market],[Property],[PropertyCode],[Name],[TotalRentableSqft],[kWofUPS],[SuiteCondition],[ProductType],[EarliestDeliveryDate],[TotalROFO(kW)],[ROFOCustomer],[TotalActive3rdPartyInterest(kW)], [Prospect(s)], [Comments], [DateModified],[ModifiedBy],[IsActive],[IsNew],[QuarterID],[Status],[IsDeleted], [CompanyName], [AirportCode], [CPS], [ProjectScope], [DeliveryStatus], [ResponsibleParty], [TargetProductSize], [IndustryOrComplianceCertifications], [EstimatedCostsUSD], [LargestContiguousSuite],[ChilledWater], [DesignedDensity], [DesignedDensityUnit], [ElectricalTopology], [MechanicalTopology])" +
            $" Values (@ID,@GlobalRegion,@Region,@Market,@Property,@PropertyCode,@Name,@TotalRentableSqft,@KWofUPS,@SuiteCondition,@ProductType,@EarliestDeliveryDate,@TotalROFO,@ROFOCustomer,@TotalActive3rdPartyInterest,@Prospect,@Comments,@DateModified,@ModifiedBy,@IsActive,@IsNew,@QuarterID,@Status,0, @CompanyName, @AirportCode, @CPS, @ProjectScope, @DeliveryStatus, @ResponsibleParty, @TargetProductSize, @IndustryOrComplianceCertifications, @EstimatedCostsUSD, @LargestContiguousSuite, @ChilledWater, @DesignedDensity, @DesignedDensityUnit, @ElectricalTopology, @MechanicalTopology)";
        public static string DeleteDLRInventoryModifications = $"Delete from {Tables.DLRInventoryModifications} WHERE ID = @ID";
        public static string UpdateDLRInventoryModifications = $"Update {Tables.DLRInventoryModifications} Set [GlobalRegion] = @GlobalRegion,[Region] = @Region,[Market] = @Market,[Property] = @Property,[PropertyCode] = @PropertyCode,[Name] = @Name,[TotalRentableSqft] = @TotalRentableSqft,[kWofUPS] = @KWofUPS,[SuiteCondition] = @SuiteCondition,[ProductType] = @ProductType,[EarliestDeliveryDate] = @EarliestDeliveryDate,[TotalROFO(kW)] = @TotalROFO,[ROFOCustomer] = @ROFOCustomer,[TotalActive3rdPartyInterest(kW)] = @TotalActive3rdPartyInterest, [Prospect(s)] = @Prospect, [Comments] = @Comments, " +
            $"[DateModified] = @DateModified,[ModifiedBy] = @ModifiedBy,[IsNew] = @IsNew,[QuarterID] = @QuarterID,[Status] = @Status, [CompanyName] = @CompanyName, [AirportCode] = @AirportCode, [CPS] = @CPS, [ProjectScope] = @ProjectScope, [DeliveryStatus] = @DeliveryStatus, [ResponsibleParty] = @ResponsibleParty, [TargetProductSize] = @TargetProductSize, [IndustryOrComplianceCertifications] = @IndustryOrComplianceCertifications, [EstimatedCostsUSD] = @EstimatedCostsUSD, [LargestContiguousSuite] = @LargestContiguousSuite, [ChilledWater]=@ChilledWater, [DesignedDensity]=@DesignedDensity, [DesignedDensityUnit]=@DesignedDensityUnit, [ElectricalTopology]=@ElectricalTopology, [MechanicalTopology]=@MechanicalTopology WHERE ID = @ID";
        public static string UpdateDLRInventory = $"Update {Tables.DLRInventory} Set [GlobalRegion] = @GlobalRegion,[Region] = @Region,[Market] = @Market,[Property] = @Property,[PropertyCode] = @PropertyCode,[Name] = @Name,[TotalRentableSqft] = @TotalRentableSqft,[kWofUPS] = @KWofUPS,[SuiteCondition] = @SuiteCondition,[ProductType] = @ProductType,[EarliestDeliveryDate] = @EarliestDeliveryDate,[TotalROFO(kW)] = @TotalROFO,[ROFOCustomer] = @ROFOCustomer,[TotalActive3rdPartyInterest(kW)] = @TotalActive3rdPartyInterest, [Prospect(s)] = @Prospect, [Comments] = @Comments, " +
            $"[DateModified] = @DateModified,[ModifiedBy] = @ModifiedBy,[IsNew] = @IsNew,[QuarterID] = @QuarterID,[Status] = @Status,  [CompanyName] = @CompanyName, [AirportCode] = @AirportCode, [CPS] = @CPS, [ProjectScope] = @ProjectScope, [DeliveryStatus] = @DeliveryStatus, [ResponsibleParty] = @ResponsibleParty, [TargetProductSize] = @TargetProductSize, [IndustryOrComplianceCertifications] = @IndustryOrComplianceCertifications, [EstimatedCostsUSD] = @EstimatedCostsUSD, [LargestContiguousSuite] = @LargestContiguousSuite, [ChilledWater]=@ChilledWater, [DesignedDensity]=@DesignedDensity, [DesignedDensityUnit]=@DesignedDensityUnit, [ElectricalTopology]=@ElectricalTopology, [MechanicalTopology]=@MechanicalTopology WHERE ID = @ID";
        public static string TruncateTempDLRInventory = $"TRUNCATE TABLE {Tables.TempImportDLRInventory}";
        #endregion

        #region CompetitorInventory
        public static string AddCompetitorInventory = $"INSERT INTO {Tables.CompetitorInventory} ([Region] ,[Company] ,[Address] ,[QuarterID] ,[Market] ,[Suite] ,[ProductType] ,[SF] ,[IT Load(MW)] ,[Suite Condition] ,[IT Load (kW)] ,[Date Avail] ,[DateCreated] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[IsNew] ,[Provider] ,[Quarter Avail] ,[Source],[IsDeleted]) " +
            $"VALUES (@Region, @Company, @Address, @QuarterID, @Market, @Suite, @ProductType, @SF, @ITLoadMW, @SuiteCondition, @ITLoadKW, @DateAvailable, @DateCreated, @DateModified, @ModifiedBy, @IsActive, @IsNew, @Provider, @QuarterAvailable, @Source,0)";
        public static string AddCompetitorInventoryModifications = $"INSERT INTO {Tables.CompetitorInventoryModifications} ([ID], [Region] ,[Company] ,[Address] ,[QuarterID] ,[Market] ,[Suite] ,[ProductType] ,[SF] ,[IT Load(MW)] ,[Suite Condition] ,[IT Load (kW)] ,[Date Avail] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[IsNew] ,[Provider] ,[Quarter Avail] ,[Source],[IsDeleted]) " +
            $"VALUES (@ID, @Region, @Company, @Address, @QuarterID, @Market, @Suite, @ProductType, @SF, @ITLoadMW, @SuiteCondition, @ITLoadKW, @DateAvailable, @DateModified, @ModifiedBy, @IsActive, @IsNew, @Provider, @QuarterAvailable, @Source,0)";
        public static string SoftDeleteCompetitorInventory = $"Update {Tables.CompetitorInventory} Set IsActive= @IsActive, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string HardDeleteCompetitorInventory = $"Update {Tables.CompetitorInventory} Set IsDeleted= @IsDeleted, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string DeleteCompetitorInventoryModifications = $"Delete from {Tables.CompetitorInventoryModifications} WHERE ID = @ID";
        public static string UpdateCompetitorInventoryModifications = $"UPDATE {Tables.CompetitorInventoryModifications} SET [Region] = @Region ,[Company] = @Company ,[Address] = @Address,[QuarterID] = @QuarterID ,[Market] = @Market,[Suite] = @Suite ,[ProductType] = @ProductType, [SF] = @SF ," +
            $"[IT Load(MW)] = @ITLoadMW ,[Suite Condition] = @SuiteCondition ,[IT Load (kW)] = @ITLoadKW ,[Date Avail] = @DateAvailable ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[IsNew] = @IsNew ,[Provider] = @Provider ,[Quarter Avail] = @QuarterAvailable ,[Source] = @Source WHERE ID = @ID";
        public static string UpdateCompetitorInventory = $"UPDATE {Tables.CompetitorInventory} SET [Region] = @Region ,[Company] = @Company ,[Address] = @Address,[QuarterID] = @QuarterID ,[Market] = @Market,[Suite] = @Suite ,[ProductType] = @ProductType, [SF] = @SF ," +
           $"[IT Load(MW)] = @ITLoadMW ,[Suite Condition] = @SuiteCondition ,[IT Load (kW)] = @ITLoadKW ,[Date Avail] = @DateAvailable ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[IsNew] = @IsNew ,[Provider] = @Provider ,[Quarter Avail] = @QuarterAvailable ,[Source] = @Source WHERE ID = @ID";
        public static string TruncateTempCompetitorInventory = $"TRUNCATE TABLE {Tables.TempImportCompetitorInventory}";
        #endregion

        #region Comparables
        public static string AddComparables = $"INSERT INTO {Tables.Comparables} ([Source] ,[Sign Quarter] ,[Region] ,[Market] ,[Provider] ,[Address] ,[Customer] ,[QuarterID] ,[ProductType] ,[Redundancy] ,[NRSF] ,[kW] ,[Term in Months] ,[Annual GAAP Rent] ,[Starting Lease Rate] ,[Average Lease Rate] ,[Total Free Rent] ,[Total TI] ,[Net Rent] ,[DateCreated] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[IsNew] ,[Escalations] ,[RSF],[IsDeleted]) " +
            $"VALUES (@Source, @SignQuarter, @Region, @Market, @Provider, @Address, @Customer, @QuarterID, @ProductType, @Redundancy, @NRSF, @KW, @TermInMonths, @AnnualGAAPRent, @StartingLeaseRate, @AverageLeaseRate, @TotalFreeRent, @TotalTI, @NetRent, @DateCreated, @DateModified, @ModifiedBy, @IsActive, @IsNew, @Escalations, @RSF ,0)";
        public static string AddComparablesModifications = $"INSERT INTO {Tables.ComparableModifications} ([ID], [Source] ,[Sign Quarter] ,[Region] ,[Market] ,[Provider] ,[Address] ,[Customer] ,[QuarterID] ,[ProductType] ,[Redundancy] ,[NRSF] ,[kW] ,[Term in Months] ,[Annual GAAP Rent] ,[Starting Lease Rate] ,[Average Lease Rate] ,[Total Free Rent] ,[Total TI] ,[Net Rent] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[IsNew] ,[Escalations] ,[RSF],[IsDeleted]) " +
            $"VALUES (@ID, @Source, @SignQuarter, @Region, @Market, @Provider, @Address, @Customer, @QuarterID, @ProductType, @Redundancy, @NRSF, @KW, @TermInMonths, @AnnualGAAPRent, @StartingLeaseRate, @AverageLeaseRate, @TotalFreeRent, @TotalTI, @NetRent, @DateModified, @ModifiedBy, @IsActive, @IsNew, @Escalations, @RSF,0 )";
        public static string SoftDeleteComparables = $"Update {Tables.Comparables} Set IsActive= @IsActive, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string HardDeleteComparables = $"Update {Tables.Comparables} Set IsDeleted= @IsDeleted, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string DeleteComparablesModifications = $"Delete from {Tables.ComparableModifications} WHERE ID = @ID";
        public static string UpdateComparablesModifications = $"UPDATE {Tables.ComparableModifications} SET [Source] = @Source ,[Sign Quarter] = @SignQuarter ,[Region] = @Region ,[Market] = @Market ,[Provider] = @Provider ,[Address] = @Address ,[Customer] = @Customer ,[QuarterID] = @QuarterID ,[ProductType] = @ProductType ,[Redundancy] = @Redundancy ,[NRSF] = @NRSF ,[kW] = @KW ,[Term in Months] = @TermInMonths ,[Annual GAAP Rent] = @AnnualGAAPRent ,[Starting Lease Rate] = @StartingLeaseRate ," +
            $"[Average Lease Rate] = @AverageLeaseRate ,[Total Free Rent] = @TotalFreeRent ,[Total TI] = @TotalTI ,[Net Rent] = @NetRent ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[IsNew] = @IsNew ,[Escalations] = @Escalations ,[RSF] = @RSF WHERE ID = @ID ";
        public static string UpdateComparables = $"UPDATE {Tables.Comparables} SET [Source] = @Source ,[Sign Quarter] = @SignQuarter ,[Region] = @Region ,[Market] = @Market ,[Provider] = @Provider ,[Address] = @Address ,[Customer] = @Customer ,[QuarterID] = @QuarterID ,[ProductType] = @ProductType ,[Redundancy] = @Redundancy ,[NRSF] = @NRSF ,[kW] = @KW ,[Term in Months] = @TermInMonths ,[Annual GAAP Rent] = @AnnualGAAPRent ,[Starting Lease Rate] = @StartingLeaseRate ," +
            $"[Average Lease Rate] = @AverageLeaseRate ,[Total Free Rent] = @TotalFreeRent ,[Total TI] = @TotalTI ,[Net Rent] = @NetRent ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[IsNew] = @IsNew ,[Escalations] = @Escalations ,[RSF] = @RSF WHERE ID = @ID ";
        public static string TruncateTempComparables = $"TRUNCATE TABLE {Tables.TempImportComparables}";
        #endregion

        #region Opportunities
        public static string AddOpportunity = $"INSERT INTO {Tables.Opportunity} ([Market], [Stag] ,[Probability] ,[QuarterID] ,[OpportunityName] ,[Property] ,[Industry] ,[ProductType] ,[TotalkW] ,[RaisedSqFt] ,[RentableSf] ,[AnnualizedGAAPRent] ,[TransactionType] ,[OpportunityOwner] ,[DateCreated] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[Region] ,[IsNew] ,[RC First Month Rent] ,[Supply/Demand Rating] ,[Starting $/kW] ,[AverageRent] ,[Average $/kW],[IsDeleted]) VALUES " +
            $" (@Market, @Stage, @Probability, @QuarterID, @OpportunityName, @Property, @Industry, @ProductType, @TotalKW, @RaisedSqFt, @RentableSf, @AnnualizedGAAPRent, @TransactionType, @OpportunityOwner, @DateCreated, @DateModified, @ModifiedBy, @IsActive, @Region, @IsNew, @RCFirstMonthRent, @SupplyDemandRating, @StartingKW, @AverageRent, @AverageKW,0)";
        public static string AddOpportunityModifications = $"INSERT INTO {Tables.OpportunityModifications} ([ID], [Market], [Stag] ,[Probability] ,[QuarterID] ,[OpportunityName] ,[Property] ,[Industry] ,[ProductType] ,[TotalkW] ,[RaisedSqFt] ,[RentableSf] ,[AnnualizedGAAPRent] ,[TransactionType] ,[OpportunityOwner] ,[DateModified] ,[ModifiedBy] ,[IsActive] ,[Region] ,[IsNew] ,[RC First Month Rent] ,[Supply/Demand Rating] ,[Starting $/kW] ,[AverageRent] ,[Average $/kW],[IsDeleted]) VALUES " +
            $" (@ID, @Market, @Stage, @Probability, @QuarterID, @OpportunityName, @Property, @Industry, @ProductType, @TotalKW, @RaisedSqFt, @RentableSf, @AnnualizedGAAPRent, @TransactionType, @OpportunityOwner, @DateModified, @ModifiedBy, @IsActive, @Region, @IsNew, @RCFirstMonthRent, @SupplyDemandRating, @StartingKW, @AverageRent, @AverageKW,0)";
        public static string SoftDeleteOpportunity = $"Update {Tables.Opportunity} Set IsActive= @IsActive, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string HardDeleteOpportunity = $"Update {Tables.Opportunity} Set IsDeleted= @IsDeleted, ModifiedBy=@ModifiedBy, DateModified=@DateModified WHERE ID = @ID";
        public static string DeleteOpportunityModifications = $"Delete from {Tables.OpportunityModifications} WHERE ID = @ID";
        public static string UpdateOpportunityModifications = $" UPDATE {Tables.OpportunityModifications} SET [Market] = @Market, [Stag] = @Stage ,[Probability] = @Probability, [QuarterID] = @QuarterID, [OpportunityName] = @OpportunityName ,[Property] = @Property ,[Industry] = @Industry ,[ProductType] = @ProductType ,[TotalkW] = @TotalKW ,[RaisedSqFt] = @RaisedSqFt ,[RentableSf] = @RentableSf ,[AnnualizedGAAPRent] = @AnnualizedGAAPRent ," +
            $"[TransactionType] = @TransactionType ,[OpportunityOwner] = @OpportunityOwner ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[Region] = @Region, [IsNew] = @IsNew ,[RC First Month Rent] = @RCFirstMonthRent ,[Supply/Demand Rating] = @SupplyDemandRating ,[Starting $/kW] = @StartingKW ,[AverageRent] = @AverageRent  ,[Average $/kW] = @AverageKW WHERE ID = @ID";
        public static string UpdateOpportunity = $" UPDATE {Tables.Opportunity} SET [Market] = @Market, [Stag] = @Stage ,[Probability] = @Probability, [QuarterID] = @QuarterID, [OpportunityName] = @OpportunityName ,[Property] = @Property ,[Industry] = @Industry ,[ProductType] = @ProductType ,[TotalkW] = @TotalKW ,[RaisedSqFt] = @RaisedSqFt ,[RentableSf] = @RentableSf ,[AnnualizedGAAPRent] = @AnnualizedGAAPRent ," +
            $"[TransactionType] = @TransactionType ,[OpportunityOwner] = @OpportunityOwner ,[DateModified] = @DateModified ,[ModifiedBy] = @ModifiedBy ,[Region] = @Region, [IsNew] = @IsNew ,[RC First Month Rent] = @RCFirstMonthRent ,[Supply/Demand Rating] = @SupplyDemandRating ,[Starting $/kW] = @StartingKW ,[AverageRent] = @AverageRent  ,[Average $/kW] = @AverageKW WHERE ID = @ID";
        public static string TruncateTempOpportunities = $"TRUNCATE TABLE {Tables.TempImportOpportunity}";
        #endregion
    }
    #endregion 
}
