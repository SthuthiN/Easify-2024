
CREATE PROCEDURE [dbo].[GetCompetitorInventories]
@QuarterID int
as
BEGIN

Select * from (
	SELECT [ID]
		,sc.[Region]
		,[Company]
        ,[Address]
        ,sc.[Market]
        ,[Suite]
        ,sc.[ProductType]
        ,[SF]
        ,[IT Load(MW)]
        ,case 
			 when ltrim(rtrim(sc.[Suite Condition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(sc.[Suite Condition])) end 
	    [Suite Condition]
        ,[IT Load (kW)]
        ,[Date Avail]
        ,[DateCreated]
        ,[DateModified]
        ,[ModifiedBy]
	    ,sc.QuarterID
        ,sc.[Source]
	    ,sc.[Provider]
	    ,sc.[Quarter Avail]
	    ,sc.[IsNew]
        FROM [dbo].[CompetitorInventory] sc
        WHERE sc.IsActive = 1  AND sc.IsDeleted = 0  AND 
		SC.ID NOT IN (SELECT ID FROM CompetitorInventoryModifications) and sc.QuarterID = @QuarterID
        
	UNION

	SELECT [ID]
		,sc.[Region]
		,[Company]
        ,[Address]
        ,sc.[Market]
        ,[Suite]
        ,sc.[ProductType]
        ,[SF]
        ,[IT Load(MW)]
        ,case  
			 when ltrim(rtrim(sc.[Suite Condition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(sc.[Suite Condition])) end 
	    [Suite Condition]
        ,[IT Load (kW)]
        ,[Date Avail]
        ,[DateCreated]
        ,[DateModified]
        ,[ModifiedBy]
	    ,sc.QuarterID
        ,sc.[Source]
	    ,sc.[Provider]
	    ,sc.[Quarter Avail]
	    ,sc.[IsNew]
       FROM [dbo].CompetitorInventoryModifications sc
       WHERE sc.IsActive = 1 AND sc.IsDeleted = 0  and sc.QuarterID = @QuarterID
	)
dt order by [DateModified] desc
  
END