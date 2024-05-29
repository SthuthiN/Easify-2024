CREATE TABLE [dbo].[FooterLink] (
    [ID]         INT           NOT NULL,
    [Name]       VARCHAR (255) NOT NULL,
    [Link]       VARCHAR (400) NULL,
    [IsActive]   BIT           NOT NULL,
    [CreatedBy]  VARCHAR (255) NOT NULL,
    [CreatedOn]  DATETIME      NOT NULL,
    [ModifiedBy] VARCHAR (255) NOT NULL,
    [ModifiedOn] DATETIME      NOT NULL,
    [IsDisabled] BIT           NOT NULL
);

