CREATE TABLE [dbo].[Redundancy] (
    [RedundancyID] INT           IDENTITY (1, 1) NOT NULL,
    [Redundancy]   NVARCHAR (30) NULL,
    CONSTRAINT [PK_Redundancy] PRIMARY KEY CLUSTERED ([RedundancyID] ASC) WITH (FILLFACTOR = 80)
);

