

CREATE PROCEDURE [dbo].[GetComparables_old]
@Market Varchar(255),
@Region Varchar(255)
as
BEGIN

Select		 sc.[ID]
			,sc.[Source]
			,sc.[Sign Quarter]
			,sc.[Region]
			,sc.[Market]
			,sc.[Provider]
			,sc.[Address]
			,sc.[Customer]
			,sc.[ProductType]
			,sc.[Redundancy]
			,sc.[NRSF]
			,sc.[kW]
			,sc.[Term in Months]
			,sc.[Annual GAAP Rent]
			,sc.[Starting Lease Rate]
			,sc.[Average Lease Rate]
			,sc.[Total Free Rent]
			,sc.[Total TI]
			,sc.[Net Rent]
			,sc.[Escalations]
			,sc.[QuarterID]
			,r.RegionID
			,m.MarketID
			,p.ProductTypeID
			,[DateCreated]
			,[DateModified]
			,[ModifiedBy]
			,sc.[RSF]
 FROM [dbo].[Comparables] sc
      left join Region r on  sc.Region =r.Region
	  left join Market m on  sc.Market = m.Market
	  left join ProductType p ON sc.[ProductType]=p.ProductType
       WHERE ((CASE WHEN @Market is not null AND sc.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @Region is not null AND sc.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1) and sc.IsActive = 1
             AND sc.ID NOT IN (SELECT ID FROM dbo.ComparablesModifications)

UNION

Select		 sc.[ID]
			,sc.[Source]
			,sc.[Sign Quarter]
			,sc.[Region]
			,sc.[Market]
			,sc.[Provider]
			,sc.[Address]
			,sc.[Customer]
			,sc.[ProductType]
			,sc.[Redundancy]
			,sc.[NRSF]
			,sc.[kW]
			,sc.[Term in Months]
			,sc.[Annual GAAP Rent]
			,sc.[Starting Lease Rate]
			,sc.[Average Lease Rate]
			,sc.[Total Free Rent]
			,sc.[Total TI]
			,sc.[Net Rent]
			,sc.[Escalations]
			,sc.[QuarterID]
			,r.RegionID
			,m.MarketID
			,p.ProductTypeID
			,[DateCreated]
			,[DateModified]
			,[ModifiedBy]
			,sc.[RSF]
 FROM [dbo].[ComparablesModifications] sc
      left join Region r on  sc.Region =r.Region
	  left join Market m on  sc.Market = m.Market
	  left join ProductType p ON sc.[ProductType]=p.ProductType
      WHERE ((CASE WHEN @Market is not null AND sc.Market=@Market THEN 1 
             WHEN @Market is null THEN 1 END)=1) and ((CASE WHEN @Region is not null AND sc.Region=@Region THEN 1 
             WHEN @Region is null THEN 1 END)=1) and sc.IsActive = 1
END