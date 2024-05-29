CREATE TABLE [dbo].[MarketIntelligenceConfiguration] (
    [ID]             INT            IDENTITY (1, 1) NOT NULL,
    [Key]            NVARCHAR (50)  NOT NULL,
    [Value]          NVARCHAR (100) NOT NULL,
    [SecondaryValue] NVARCHAR (100) NULL,
    [DateCreated]    DATETIME       NOT NULL,
    [CreatedBy]      NVARCHAR (50)  NULL,
    [IsDeleted]      BIT            NOT NULL,
    [IsDisplay]      BIT            NOT NULL,
    CONSTRAINT [PK_FluxConfiguration] PRIMARY KEY CLUSTERED ([ID] ASC) WITH (FILLFACTOR = 80)
);

