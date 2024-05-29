CREATE TABLE [dbo].[EmployeeDetails] (
    [ID]         INT            IDENTITY (1, 1) NOT NULL,
    [EE ID]      NVARCHAR (255) NULL,
    [Name]       NVARCHAR (511) NULL,
    [Email]      NVARCHAR (255) NOT NULL,
    [Role]       NVARCHAR (255) NULL,
    [IsActive]   BIT            NULL,
    [CreatedBy]  NVARCHAR (250) DEFAULT ('SYSADMIN') NULL,
    [CreatedOn]  DATETIME       DEFAULT (getdate()) NULL,
    [ModifiedBy] NVARCHAR (250) DEFAULT ('SYSADMIN') NULL,
    [ModifiedOn] DATETIME       DEFAULT (getdate()) NULL,
    CONSTRAINT [PK_EmployeeDetails_ID] PRIMARY KEY CLUSTERED ([ID] ASC)
);

