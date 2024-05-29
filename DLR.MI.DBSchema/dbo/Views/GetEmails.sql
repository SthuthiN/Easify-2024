
CREATE VIEW [dbo].[GetEmails]
AS
SELECT E.[ID], E.[EE ID], E.[Name], E.Email
FROM [EmployeeDetails] E
WHERE E.[IsActive] = 1