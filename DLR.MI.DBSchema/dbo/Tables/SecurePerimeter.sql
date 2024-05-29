CREATE TABLE [dbo].[SecurePerimeter] (
    [ID]              INT           IDENTITY (1, 1) NOT NULL,
    [SecurePerimeter] VARCHAR (150) NULL,
    CONSTRAINT [PK_SecurePerimeter] PRIMARY KEY CLUSTERED ([ID] ASC)
);

