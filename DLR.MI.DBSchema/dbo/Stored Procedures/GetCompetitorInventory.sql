
CREATE PROCEDURE [dbo].[GetCompetitorInventory]
@ID int
as
BEGIN
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
	  ,sc.IsActive
	  FROM [dbo].CompetitorInventory sc
       WHERE sc.IsActive = 1  AND sc.IsDeleted = 0  AND sc.ID = @ID
	   --AND SC.ID NOT IN (SELECT ID FROM SupplyCompetitorModifications) 
                        
END