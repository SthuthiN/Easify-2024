CREATE TABLE [dbo].[Stage] (
    [StageID] INT          IDENTITY (1, 1) NOT NULL,
    [Stage]   VARCHAR (50) NULL,
    CONSTRAINT [PK_Stage] PRIMARY KEY CLUSTERED ([StageID] ASC) WITH (FILLFACTOR = 80)
);

