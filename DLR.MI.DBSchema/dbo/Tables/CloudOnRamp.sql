CREATE TABLE [dbo].[CloudOnRamp] (
    [ID]          INT           IDENTITY (1, 1) NOT NULL,
    [CloudOnRamp] VARCHAR (150) NULL,
    CONSTRAINT [PK_CloudOnRamp] PRIMARY KEY CLUSTERED ([ID] ASC)
);

