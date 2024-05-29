CREATE TABLE [dbo].[Bookmark] (
    [Id]               INT           IDENTITY (1, 1) NOT NULL,
    [Title]            VARCHAR (255) NOT NULL,
    [Email]            VARCHAR (255) NOT NULL,
    [RegionId]         INT           NOT NULL,
    [BusinessRegionId] INT           NULL,
    [CountryId]        INT           NULL,
    [CityId]           INT           NULL,
    [IsActive]         BIT           DEFAULT ((1)) NOT NULL,
    [CreatedBy]        VARCHAR (255) DEFAULT ('SYSADMIN') NOT NULL,
    [CreatedOn]        DATE          DEFAULT (getdate()) NULL,
    [ModifiedBy]       VARCHAR (255) DEFAULT ('SYSADMIN') NOT NULL,
    [ModifiedOn]       DATE          DEFAULT (getdate()) NULL,
    CONSTRAINT [PK_Bookmark] PRIMARY KEY CLUSTERED ([Id] ASC)
);

