
CREATE PROC [dbo].[CopyPrevQuarterCompetitorInventoryData]
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

-- get current quarter id
SET @CurrentID=(SELECT ID FROM [Quarter] WHERE Quarter=@CurrentQuarter and year = @CurrentYear)
-- get previous quarter id
SET @PrevID   =(SELECT ID FROM [Quarter] WHERE Quarter=@PrevQuarter and year = @Year)

/* if the current quarter is already exists in table then leave it. if not exists, then insert 
   previous quarter data as current quarter data in the table */
--IF EXISTS(SELECT TOP 1 * FROM [SupplyCompetitor] WHERE QuarterID=@CurrentID)
--BEGIN

DELETE FROM [dbo].CompetitorInventory WHERE QuarterID=@CurrentID 
                                 AND ID NOT IN (SELECT ID FROM CompetitorInventoryModifications WHERE QuarterID=@CurrentID);
--END
--ELSE
--BEGIN
INSERT INTO [dbo].CompetitorInventory
( [Region],[Company],[Address],[QuarterID],[Market],[Suite],[ProductType],[SF]
      ,[IT Load(MW)],[Suite Condition],[IT Load (kW)],[Date Avail],[ModifiedBy]
      ,[IsActive],[IsNew], [Source], [Quarter Avail], [Provider],[IsDeleted])

SELECT [Region],[Company],[Address],@CurrentID,[Market],[Suite],[ProductType],[SF]
      ,[IT Load(MW)],[Suite Condition],[IT Load (kW)],[Date Avail],[ModifiedBy]
      ,[IsActive],[IsNew],[Source], [Quarter Avail], [Provider],[IsDeleted]
FROM [dbo].CompetitorInventory
WHERE QuarterID=@PrevID and [IsDeleted] = 0
--END
END