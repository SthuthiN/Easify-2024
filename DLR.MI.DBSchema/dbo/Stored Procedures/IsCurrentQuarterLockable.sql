

CREATE PROC [dbo].[IsCurrentQuarterLockable]
	@QuarterID int
AS
BEGIN
	Declare @IsCurrentQuarterLockable INT,
	 @DLRInventoryRecordsCount INT,
	 @CompetitorInventoryRecordsCount INT,
	 @ComparablesRecordsCount INT,
	 @OpportunityRecordsCount INT

	 SET @IsCurrentQuarterLockable = 1
	 SET @DLRInventoryRecordsCount = (Select count(*) from DLRInventoryModifications Where QuarterID = @QuarterID  and isDeleted = 0)
	 SET @CompetitorInventoryRecordsCount = (Select count(*) from CompetitorInventoryModifications Where QuarterID = @QuarterID  and isDeleted = 0)
	 SET @ComparablesRecordsCount = (Select count(*) from ComparablesModifications Where QuarterID = @QuarterID  and isDeleted = 0)
	 SET @OpportunityRecordsCount = (Select count(*) from OpportunityModifications Where QuarterID = @QuarterID  and isDeleted = 0)

	 If(@DLRInventoryRecordsCount > 0 or @CompetitorInventoryRecordsCount > 0 or @ComparablesRecordsCount > 0 or @OpportunityRecordsCount > 0)
	 Begin
		SET @IsCurrentQuarterLockable = 0
	 End

	 If(@IsCurrentQuarterLockable = 1)
	 Begin
		SET @DLRInventoryRecordsCount = (Select count(*) from DLRInventory Where QuarterID = @QuarterID and (IsActive = 0 or IsNew = 1) and isDeleted = 0)
		SET @CompetitorInventoryRecordsCount = (Select count(*) from CompetitorInventory Where QuarterID = @QuarterID and (IsActive = 0 or IsNew = 1) and isDeleted = 0)
		SET @ComparablesRecordsCount = (Select count(*) from Comparables Where QuarterID = @QuarterID and (IsActive = 0 or IsNew = 1) and isDeleted = 0)
		SET @OpportunityRecordsCount = (Select count(*) from Opportunity Where QuarterID = @QuarterID and (IsActive = 0 or IsNew = 1) and isDeleted = 0)
		If(@DLRInventoryRecordsCount > 0 or @CompetitorInventoryRecordsCount > 0 or @ComparablesRecordsCount > 0 or @OpportunityRecordsCount > 0)
		Begin
			SET @IsCurrentQuarterLockable = 0
		End
	 End
     
	 Select @IsCurrentQuarterLockable as IsCurrentQuarterLockable
END