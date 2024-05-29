
CREATE PROCEDURE [dbo].[GetSupplyCompetitor]
@Market Varchar(255),
@Region Varchar(255)
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
      ,case when ltrim(rtrim(sc.[Suite Condition]))='Shell' then 'Available Shell'  
			 when ltrim(rtrim(sc.[Suite Condition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(sc.[Suite Condition])) end 
	  
	  [Suite Condition]
      ,[IT Load (kW)]
      ,[Date Avail]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,r.RegionID
      ,m.MarketID
      ,s.SuiteConditionID
      ,p.ProductTypeID
	  ,sc.QuarterID
      ,sc.[Source]
	  ,sc.[Provider]
	  ,sc.[Quarter Avail]
      FROM [dbo].[SupplyCompetitor] sc
      left join SuiteCondition s ON sc.[Suite Condition]=s.SuiteCondition
      left join Region r on  sc.Region =r.Region
	  left join Market m on  sc.Market = m.Market
	  left join ProductType p ON sc.[ProductType]=p.ProductType
       WHERE ((CASE WHEN @Market is not null AND sc.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @Region is not null AND sc.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1) and sc.IsActive = 1  AND sc.IsDeleted = 0 
             AND SC.ID NOT IN (SELECT ID FROM SupplyCompetitorModifications)
             
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
      ,r.RegionID
      ,m.MarketID
      ,s.SuiteConditionID
      ,p.ProductTypeID
	  ,sc.QuarterID
      ,sc.[Source]
	  ,sc.[Provider]
	  ,sc.[Quarter Avail]
      FROM [dbo].SupplyCompetitorModifications sc
      left join SuiteCondition s ON sc.[Suite Condition]=s.SuiteCondition
      left join Region r on  sc.Region =r.Region
	  left join Market m on  sc.Market = m.Market
	  left join ProductType p ON sc.[ProductType]=p.ProductType
       WHERE ((CASE WHEN @Market is not null AND sc.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @Region is not null AND sc.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1) and sc.IsActive = 1 AND sc.IsDeleted = 0 
            
             
END