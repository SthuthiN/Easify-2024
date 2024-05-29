CREATE TABLE [dbo].[Quarter] (
    [ID]       INT          IDENTITY (1, 1) NOT NULL,
    [Quarter]  NVARCHAR (8) NOT NULL,
    [Year]     INT          NOT NULL,
    [IsLocked] BIT          CONSTRAINT [DF_Quarter_IsLocked] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_Yardi.Quarter] PRIMARY KEY CLUSTERED ([ID] ASC) WITH (FILLFACTOR = 80)
);

