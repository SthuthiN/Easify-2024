CREATE TABLE [dbo].[UserAccessRoles] (
    [Id]         INT            IDENTITY (1, 1) NOT NULL,
    [Name]       NVARCHAR (250) NULL,
    [IsActive]   BIT            NULL,
    [CreatedBy]  NVARCHAR (250) DEFAULT ('SYSADMIN') NULL,
    [CreatedOn]  DATETIME       DEFAULT (getdate()) NULL,
    [ModifiedBy] NVARCHAR (250) DEFAULT ('SYSADMIN') NULL,
    [ModifiedOn] DATETIME       DEFAULT (getdate()) NULL,
    CONSTRAINT [PK_UserAccessRoles] PRIMARY KEY CLUSTERED ([Id] ASC)
);

