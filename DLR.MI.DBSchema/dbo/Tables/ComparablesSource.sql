CREATE TABLE [dbo].[ComparablesSource] (
    [SourceID] INT          IDENTITY (1, 1) NOT NULL,
    [Source]   VARCHAR (30) NULL,
    CONSTRAINT [PK_Source] PRIMARY KEY CLUSTERED ([SourceID] ASC) WITH (FILLFACTOR = 80)
);

