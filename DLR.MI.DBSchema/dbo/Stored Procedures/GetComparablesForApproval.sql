

CREATE PROCEDURE [dbo].[GetComparablesForApproval]
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
			,0 as IsModified
			FROM [dbo].[Comparables] sc
			WHERE sc.QuarterID = @QuarterID  AND sc.IsDeleted = 0 
			and (sc.IsNew = 1 
			or sc.IsActive = 0
			or sc.ID IN (Select CM.ID from dbo.[ComparablesModifications] CM WHERE CM.QuarterID = @QuarterID and CM.IsActive = 1))

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
			,1 as IsModified
			FROM [dbo].[ComparablesModifications] sc
			WHERE  sc.IsActive = 1  AND sc.IsDeleted = 0 and sc.QuarterID = @QuarterID
	)
dt order by [DateModified] desc
END