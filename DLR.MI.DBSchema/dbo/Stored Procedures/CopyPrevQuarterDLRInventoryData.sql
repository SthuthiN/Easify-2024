

CREATE PROC [dbo].[CopyPrevQuarterDLRInventoryData]
		@CurrentQuarter NVARCHAR(2)='Q4',
        @CurrentYear INT=2015

AS
BEGIN
DECLARE @PrevQuarter NVARCHAR(2),
        @Year INT,
        @QuarterValue INT,
		@CurrentID INT,
		@PrevID INT
SET     @QuarterValue= (SELECT SUBSTRING (@CurrentQuarter,2,1))

IF @QuarterValue =1
BEGIN
SET @PrevQuarter='Q4'
SET @Year= @CurrentYear-1
END 

IF @QuarterValue IN (2,3,4)
BEGIN
SET @QuarterValue=@QuarterValue-1
SET @PrevQuarter = 'Q'+ CAST(@QuarterValue AS NVARCHAR(1))
SET @Year= @CurrentYear
END


SET @CurrentID=(SELECT ID FROM [Quarter] WHERE Quarter=@CurrentQuarter and year = @CurrentYear)
SET @PrevID   =(SELECT ID FROM [Quarter] WHERE Quarter=@PrevQuarter and year = @Year)

DELETE FROM [dbo].DLRInventory WHERE QuarterID=@CurrentID 
                                 AND ID NOT IN (SELECT ID FROM [dbo].DLRInventoryModifications WHERE QuarterID=@CurrentID);
INSERT INTO [dbo].DLRInventory
           ([Region]
           ,[Market]
           ,[QuarterID]
           ,[Name]
           ,[TotalRentableSqft]
           ,[TotalRaisedFloorSqft]
           ,[kWofUPS]
           ,[SuiteCondition]
           ,[Status]
           ,[DateAvailable]
           ,[InventoryType]
           ,[PropertyCode]
           ,[Property]
           ,[DateModified]
           ,[ModifiedBy]
           ,[DateCreated]
           ,[IsActive]
           ,[IsNew]
           ,[ProductType]
           ,[GlobalRegion]
           ,[EarliestDeliveryDate]
           ,[TotalSigned/Pending]
           ,[TotalROFO(kW)]
           ,[ROFOCustomer]
           ,[TotalActive3rdPartyInterest(kW)]
           ,[Prospect(s)]
           ,[Comments]
		   ,[IsDeleted]
		   ,[CompanyName]
		   ,[AirportCode]
		   ,[CPS]
		   ,[ProjectScope]
		   ,[DeliveryStatus]
		   ,[ResponsibleParty]
		   ,[WaterCooling]
		   ,[SecurePerimeter]
		   ,[IndustryOrComplianceCertifications]
		   ,[CloudOnRamp], [NetworkDensity]
		   ,[SmartHands]
		   ,[EstimatedCostsUSD]
		   ,[PowerDensity]
		   ,[LargestContiguousSuite]
		   ,[TargetProductSize])
SELECT [Region]
      ,[Market]
      ,@CurrentID
      ,[Name]
      ,[TotalRentableSqft]
      ,[TotalRaisedFloorSqft]
      ,[kWofUPS]
      ,[SuiteCondition]
      ,[Status]
      ,[DateAvailable]
      ,[InventoryType]
      ,[PropertyCode]
      ,[Property]
      ,[DateModified]
      ,[ModifiedBy]
      ,[DateCreated]
      ,[IsActive]
      ,[IsNew]
      ,[ProductType]
      ,[GlobalRegion]
      ,[EarliestDeliveryDate]
      ,[TotalSigned/Pending]
      ,[TotalROFO(kW)]
      ,[ROFOCustomer]
      ,[TotalActive3rdPartyInterest(kW)]
      ,[Prospect(s)]
      ,[Comments]
	  ,[IsDeleted]
	  ,[CompanyName]
		   ,[AirportCode]
		   ,[CPS]
		   ,[ProjectScope]
		   ,[DeliveryStatus]
		   ,[ResponsibleParty]
		   ,[WaterCooling]
		   ,[SecurePerimeter]
		   ,[IndustryOrComplianceCertifications]
		   ,[CloudOnRamp], [NetworkDensity]
		   ,[SmartHands]
		   ,[EstimatedCostsUSD]
		   ,[PowerDensity]	
		   ,[LargestContiguousSuite]
		   ,[TargetProductSize]
FROM [dbo].DLRInventory
WHERE QuarterID=@PrevID and [IsDeleted] = 0
END