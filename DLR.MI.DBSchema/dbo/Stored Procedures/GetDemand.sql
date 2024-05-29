

CREATE PROCEDURE [dbo].[GetDemand]
@Market Varchar(255)=Null,
@ProductType varchar(255)=Null
AS
BEGIN
SELECT [ID]
      ,d.[Market]
      ,m.MarketID
      ,d.[Stag]
      ,[Probability]
	  ,[Property]
      ,[OpportunityName]
      ,[Industry]
      ,d.[ProductType]
      ,[TotalkW]
      ,[RaisedSqFt]
      ,[RentableSf]
      ,[AnnualizedGAAPRent]
      ,d.[TransactionType]
      ,[OpportunityOwner]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,t.TransactionTypeID
      ,s.StageID
      ,p.ProductTypeID
	  ,d.QuarterID
	  ,d.[RC First Month Rent]
	  ,d.[Supply/Demand Rating]
	  ,d.[Starting $/kW]
	  ,d.[AverageRent]
	  ,d.[Average $/kw]
FROM [dbo].[Demand] d 

left join Market m on  d.Market = m.Market
left join Stage s on s.Stage = d.Stag
left join ProductType p ON p.ProductType=d.ProductType
left join TransactionType t on t.TransactionType=d.TransactionType
WHERE 
((CASE WHEN @Market is not null AND d.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @ProductType is not null AND d.ProductType=@ProductType THEN 1 
             WHEN @ProductType is null THEN 1 END)=1) and d.IsActive = 1  AND d.IsDeleted = 0 
             
AND D.ID not in (SELECT ID FROM DemandModifications) 

UNION

SELECT [ID]
      ,d.[Market]
      ,m.MarketID
      ,d.[Stag]
      ,[Probability]
	  ,[Property]
      ,[OpportunityName]
      ,[Industry]
      ,d.[ProductType]
      ,[TotalkW]
      ,[RaisedSqFt]
      ,[RentableSf]
      ,[AnnualizedGAAPRent]
      ,d.[TransactionType]
      ,[OpportunityOwner]
      ,[DateCreated]
      ,[DateModified]
      ,[ModifiedBy]
      ,t.TransactionTypeID
      ,s.StageID
      ,p.ProductTypeID
	  ,d.QuarterID
	  ,d.[RC First Month Rent]
	  ,d.[Supply/Demand Rating]
	  ,d.[Starting $/kW]
	  ,d.[AverageRent]
	  ,d.[Average $/kw]
FROM [dbo].DemandModifications d 

left join Market m on  d.Market = m.Market
left join Stage s on s.Stage = d.Stag
left join ProductType p ON p.ProductType=d.ProductType
left join TransactionType t on t.TransactionType=d.TransactionType
WHERE 
((CASE WHEN @Market is not null AND d.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @ProductType is not null AND d.ProductType=@ProductType THEN 1 
             WHEN @ProductType is null THEN 1 END)=1) and d.IsActive = 1  AND d.IsDeleted = 0 
            
END