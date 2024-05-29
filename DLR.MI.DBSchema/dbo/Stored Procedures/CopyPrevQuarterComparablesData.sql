

CREATE PROC [dbo].[CopyPrevQuarterComparablesData]
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

--IF EXISTS(SELECT TOP 1 * FROM dbo.[Comparables] WHERE QuarterID=@CurrentID)
--BEGIN
--PRINT 'Already Exists'
--END
--ELSE
--BEGIN
DELETE FROM [dbo].[Comparables] WHERE QuarterID=@CurrentID 
                                 AND ID NOT IN (SELECT ID FROM [dbo].[ComparablesModifications] WHERE QuarterID=@CurrentID);
INSERT INTO [dbo].[Comparables]
( [Source]
			,[Sign Quarter]
			,[QuarterID]
			,[Region]
			,[Market]
			,[Provider]
			,[Address]
			,[Customer]
			,[ProductType]
			,[Redundancy]
			,[NRSF]
			,[kW]
			,[Term in Months]
			,[Annual GAAP Rent]
			,[Starting Lease Rate]
			,[Average Lease Rate]
			,[Total Free Rent]
			,[Total TI]
			,[Net Rent]
			,[Escalations]
			,[IsActive]
			,[ModifiedBy]
			,[IsNew]
			,[RSF]
			,[IsDeleted])

SELECT [Source]
			,[Sign Quarter]
			,@CurrentID
			,[Region]
			,[Market]
			,[Provider]
			,[Address]
			,[Customer]
			,[ProductType]
			,[Redundancy]
			,[NRSF]
			,[kW]
			,[Term in Months]
			,[Annual GAAP Rent]
			,[Starting Lease Rate]
			,[Average Lease Rate]
			,[Total Free Rent]
			,[Total TI]
			,[Net Rent]
			,[Escalations]
			,[IsActive]
			,[ModifiedBy]
			,[IsNew]
			,[RSF] 
			,[IsDeleted]
FROM [dbo].[Comparables]
WHERE QuarterID=@PrevID and [IsDeleted] = 0
--END
END