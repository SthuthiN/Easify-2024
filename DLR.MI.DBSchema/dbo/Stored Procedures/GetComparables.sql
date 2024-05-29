﻿

CREATE PROCEDURE [dbo].[GetComparables]
@QuarterID int
as
BEGIN
Select * from 
	(
		Select sc.[ID]
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
			,sc.[DateCreated]
			,sc.[DateModified]
			,sc.[ModifiedBy]
			,sc.[RSF]
			,sc.IsActive
			,sc.IsNew
			FROM [dbo].[Comparables] sc
			WHERE sc.IsActive = 1  AND sc.IsDeleted = 0 AND sc.ID NOT IN (SELECT ID FROM dbo.ComparablesModifications) and sc.QuarterID = @QuarterID

	UNION

		Select sc.[ID]
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
			,sc.[DateCreated]
			,sc.[DateModified]
			,sc.[ModifiedBy]
			,sc.[RSF]
			,sc.IsActive
			,sc.IsNew
			FROM [dbo].[ComparablesModifications] sc
			WHERE  sc.IsActive = 1 AND sc.IsDeleted = 0 AND sc.QuarterID = @QuarterID
	)
dt order by [DateModified] desc
END