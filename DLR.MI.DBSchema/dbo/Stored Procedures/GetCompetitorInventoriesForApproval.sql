
CREATE PROCEDURE [dbo].[GetCompetitorInventoriesForApproval]
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
		,0 as IsModified
		,sc.IsActive
        FROM [dbo].CompetitorInventory sc
        WHERE sc.QuarterID = @QuarterID  AND sc.IsDeleted = 0 
		and (sc.IsNew = 1 
		or sc.IsActive = 0
		or sc.ID IN (Select SCM.ID FROM CompetitorInventoryModifications SCM WHERE SCM.QuarterID = @QuarterID and SCM.IsActive = 1))
        
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
        ,case when ltrim(rtrim(sc.[Suite Condition]))='Shell' then 'Available Shell'  
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
		,1 as IsModified
		,sc.IsActive
       FROM [dbo].CompetitorInventoryModifications sc
       WHERE sc.IsActive = 1  AND sc.IsDeleted = 0 and sc.QuarterID = @QuarterID
	)
dt order by [DateModified] desc
  
END