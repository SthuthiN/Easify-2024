CREATE TABLE [dbo].[Market] (
    [MarketID]     INT           IDENTITY (1, 1) NOT NULL,
    [Market]       VARCHAR (50)  NULL,
    [Region]       VARCHAR (50)  NULL,
    [IsReport]     BIT           NULL,
    [DisplayOrder] NVARCHAR (50) NULL,
    CONSTRAINT [PK_Market] PRIMARY KEY CLUSTERED ([MarketID] ASC) WITH (FILLFACTOR = 80)
);

