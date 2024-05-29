CREATE TABLE [dbo].[TempImportCompetitorInventory] (
    [Region]           NVARCHAR (255) NULL,
    [Company]          NVARCHAR (255) NULL,
    [Address]          NVARCHAR (255) NULL,
    [QuarterID]        INT            NULL,
    [Market]           NVARCHAR (255) NULL,
    [Suite]            NVARCHAR (255) NULL,
    [ProductType]      NVARCHAR (255) NULL,
    [SF]               FLOAT (53)     NULL,
    [ITLoadMW]         FLOAT (53)     NULL,
    [SuiteCondition]   NVARCHAR (255) NULL,
    [ITLoadKW]         FLOAT (53)     NULL,
    [DateAvailable]    NVARCHAR (255) NULL,
    [DateModified]     DATETIME       NULL,
    [ModifiedBy]       VARCHAR (255)  NULL,
    [Provider]         NVARCHAR (255) NULL,
    [QuarterAvailable] NVARCHAR (255) NULL,
    [Source]           NVARCHAR (255) NULL
);

