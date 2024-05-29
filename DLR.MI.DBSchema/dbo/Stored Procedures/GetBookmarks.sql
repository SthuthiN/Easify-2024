
CREATE PROCEDURE [dbo].[GetBookmarks]
@Email nvarchar(255)
as
BEGIN
	SELECT b.Id,
		 b.Title,
		 b.RegionId,
		 b.BusinessRegionId,
		 b.CountryId,
		 b.CityId		
		FROM [dbo].[Bookmark] b
		WHERE b.Email = @Email
		and b.IsActive = 1 
END