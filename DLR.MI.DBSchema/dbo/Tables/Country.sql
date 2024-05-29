﻿CREATE TABLE [dbo].[Country] (
    [CountryId]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]             NVARCHAR (255) NOT NULL,
    [BusinessRegionID] INT            NOT NULL,
    [IsActive]         BIT            DEFAULT ((1)) NOT NULL,
    [CreatedBy]        VARCHAR (255)  DEFAULT ('SYSADMIN') NULL,
    [CreatedOn]        DATE           DEFAULT (getdate()) NULL,
    [ModifiedBy]       VARCHAR (255)  DEFAULT ('SYSADMIN') NULL,
    [ModifiedOn]       DATE           DEFAULT (getdate()) NULL
);
