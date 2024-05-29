CREATE TABLE [dbo].[Region] (
    [Id]    INT           IDENTITY (1, 1) NOT NULL,
    [Name]  VARCHAR (50)  NULL,
    [Class] NVARCHAR (10) NULL,
    CONSTRAINT [PK_Region] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (FILLFACTOR = 80)
);

