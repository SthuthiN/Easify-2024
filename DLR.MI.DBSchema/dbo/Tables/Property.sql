CREATE TABLE [dbo].[Property] (
    [ID]              INT           IDENTITY (1, 1) NOT NULL,
    [PropertyCode]    CHAR (10)     NULL,
    [PropertyAddress] VARCHAR (100) NULL,
    [Market]          VARCHAR (255) NULL,
    [Region]          VARCHAR (255) NULL,
    CONSTRAINT [PK_Property] PRIMARY KEY CLUSTERED ([ID] ASC) WITH (FILLFACTOR = 80)
);

