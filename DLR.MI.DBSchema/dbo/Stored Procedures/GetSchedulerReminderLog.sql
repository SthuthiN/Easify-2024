CREATE PROCEDURE [dbo].[GetSchedulerReminderLog]
@status Varchar(255)



AS
BEGIN
SELECT 
s.ReminderDate,
s.SchedulerLogID,
s.Status,
s.IsActive,
s.CreatedDate,
s.CreatedBy,
s.ModifiedDate,
s.ModifiedBy,
q.Quarter + ' ' +(CONVERT(varchar(10), q.Year)) As [Quarter]

FROM [dbo].[SchedulerReminderLog] s
 join SchedulerLog sl on  sl.ID = s.SchedulerLogID
 join Quarter q on  q.ID = sl.QuarterID

 where s.Status=@status and sl.Type='Initiate'

END


---------------------------------------------------------------------
/* [AnalysisQuarter] used in all Reports to get Analysis Quarter */
---------------------------------------------------------------------

SET ANSI_NULLS ON