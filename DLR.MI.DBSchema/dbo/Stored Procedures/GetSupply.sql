
CREATE PROCEDURE [dbo].[GetSupply]
@Market Varchar(255),
@Region Varchar(255),
@SuiteCondition varchar(255)
as
BEGIN
SELECT s.ID,
r.[Region]
      ,m.[Market]
      ,[Name]
      ,[TotalRentableSqft]
      ,[TotalRaisedFloorSqft]
      ,[kWofUPS]
      ,case when ltrim(rtrim(s.[SuiteCondition]))='Shell' then 'Available Shell'  
			 when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(s.[SuiteCondition])) end 
	   [SuiteCondition]
      ,[Status]
      ,[DateAvailable]
      ,[InventoryType]
	  ,[Property]
      ,[PropertyCode]
      ,r.RegionID,
	   [ProductType],
  m.MarketID,
  sc.SuiteConditionID,
  s.DateModified,
  s.DateCreated,
  s.ModifiedBy,
  s.QuarterID,
  q.Quarter as Quarter

FROM [dbo].[Supply] s
left join Region r on  s.Region =r.Region
left join Market m on  s.Market = m.Market
left join SuiteCondition sc ON  case when ltrim(rtrim(s.[SuiteCondition]))='Shell' then 'Available Shell'  
									 when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
									 else ltrim(rtrim(s.[SuiteCondition])) end  = sc.SuiteCondition
left join Quarter q ON q.ID = s.QuarterID

WHERE ((CASE WHEN @Market is not null AND s.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @Region is not null AND s.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1)
			 and ((CASE WHEN @SuiteCondition is not null AND sc.SuiteCondition=@SuiteCondition THEN 1 
             WHEN @SuiteCondition is null THEN 1 END)=1)  
			 --and  
    --         ((CASE WHEN @SuiteCondition ='Market Ready' and  s.InventoryType in ('TKF - Available','COLO - Available','') THEN 1 
    --                WHEN @SuiteCondition ='Under Construction' and  s.InventoryType in ('TKF - Available','COLO - Available','') THEN 1
    --                WHEN @SuiteCondition ='Planned' and  s.InventoryType in ('TKF - Available','COLO - Available','PBB - Available','SHELL - Available','') THEN 1  
    --                WHEN @SuiteCondition ='Shell' and  s.InventoryType in ('TKF - Available','COLO - Available','PBB - Available','SHELL - Available','') THEN 1 end)=1)
             and s.IsActive = 1 AND s.IsDeleted = 0 
AND s.ID NOT IN (Select ID from dbo.SupplyModifications) 

UNION

SELECT s.ID,
r.[Region]
      ,m.[Market]
      ,[Name]
      ,[TotalRentableSqft]
      ,[TotalRaisedFloorSqft]
      ,[kWofUPS]
      ,case when ltrim(rtrim(s.[SuiteCondition]))='Shell' then 'Available Shell'  
			 when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
			 else ltrim(rtrim(s.[SuiteCondition])) end 
	    [SuiteCondition]
       ,[Status]
      ,[DateAvailable]
      ,[InventoryType]
	  ,[Property]
      ,[PropertyCode]
      ,r.RegionID,
	    [ProductType],
  m.MarketID,
  sc.SuiteConditionID,
  s.DateModified,
  s.DateCreated,
  s.ModifiedBy,
  s.QuarterID,
  q.Quarter as Quarter

FROM [dbo].[SupplyModifications] s
left join Region r on  s.Region =r.Region
left join Market m on  s.Market = m.Market
left join SuiteCondition sc ON   case when ltrim(rtrim(s.[SuiteCondition]))='Shell' then 'Available Shell'  
									  when ltrim(rtrim(s.[SuiteCondition]))='Planned' then 'Planned Shell' 
									  else ltrim(rtrim(s.[SuiteCondition])) end = sc.SuiteCondition
left join Quarter q ON q.ID = s.QuarterID

WHERE ((CASE WHEN @Market is not null AND s.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) 
             and ((CASE WHEN @Region is not null AND s.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1) 
             and ((CASE WHEN @SuiteCondition is not null AND sc.SuiteCondition=@SuiteCondition THEN 1 
             WHEN @SuiteCondition is null THEN 1 END)=1) and s.IsActive = 1  AND s.IsDeleted = 0 
END