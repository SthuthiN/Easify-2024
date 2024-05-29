CREATE VIEW [dbo].[GetFooterLinks]
AS
SELECT F.[ID], F.[Name], F.[Link], F.[IsDisabled]
FROM [FooterLink] F
WHERE F.[IsActive] = 1