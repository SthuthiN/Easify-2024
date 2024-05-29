CREATE TABLE [dbo].[ProductType] (
    [ProductTypeID]    INT          IDENTITY (1, 1) NOT NULL,
    [ProductType]      VARCHAR (20) NULL,
    [ProductTypeValue] VARCHAR (50) NULL,
    CONSTRAINT [PK_ProductType] PRIMARY KEY CLUSTERED ([ProductTypeID] ASC) WITH (FILLFACTOR = 80)
);

