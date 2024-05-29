﻿CREATE TABLE [dbo].[Comparables] (
    [ID]                  INT            IDENTITY (1, 1) NOT NULL,
    [Source]              NVARCHAR (255) NULL,
    [Sign Quarter]        NVARCHAR (12)  NULL,
    [Region]              NVARCHAR (255) NULL,
    [Market]              NVARCHAR (255) NULL,
    [Provider]            NVARCHAR (255) NULL,
    [Address]             NVARCHAR (255) NULL,
    [Customer]            NVARCHAR (255) NULL,
    [QuarterID]           INT            NULL,
    [ProductType]         NVARCHAR (255) NULL,
    [Redundancy]          NVARCHAR (255) NULL,
    [NRSF]                FLOAT (53)     NULL,
    [kW]                  FLOAT (53)     NULL,
    [Term in Months]      INT            NULL,
    [Annual GAAP Rent]    FLOAT (53)     NULL,
    [Starting Lease Rate] FLOAT (53)     NULL,
    [Average Lease Rate]  FLOAT (53)     NULL,
    [Total Free Rent]     FLOAT (53)     NULL,
    [Total TI]            FLOAT (53)     NULL,
    [Net Rent]            FLOAT (53)     NULL,
    [DateCreated]         DATE           NULL,
    [DateModified]        DATETIME       NULL,
    [ModifiedBy]          VARCHAR (255)  NULL,
    [IsActive]            BIT            NULL,
    [IsNew]               BIT            NULL,
    [Escalations]         FLOAT (53)     NULL,
    [RSF]                 FLOAT (53)     NULL,
    [IsDeleted]           BIT            NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
);
