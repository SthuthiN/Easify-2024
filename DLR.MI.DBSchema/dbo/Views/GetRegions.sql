
CREATE VIEW [dbo].[GetRegions]
AS 
SELECT R.[Id], R.[Name], R.[Class]
FROM [Region] R