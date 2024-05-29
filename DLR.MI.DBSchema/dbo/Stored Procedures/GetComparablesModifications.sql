

CREATE PROCEDURE [dbo].[GetComparablesModifications]
@ID int
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
			,sc.[DateCreated]
			,sc.[DateModified]
			,sc.[ModifiedBy]
			,sc.[RSF]
			,sc.IsActive
			,sc.IsNew
 FROM [dbo].[ComparablesModifications] sc
      WHERE  sc.IsActive = 1  AND sc.IsDeleted = 0 and sc.ID = @ID
END