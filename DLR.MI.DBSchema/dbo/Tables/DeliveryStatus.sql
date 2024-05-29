CREATE TABLE [dbo].[DeliveryStatus] (
    [ID]             INT           IDENTITY (1, 1) NOT NULL,
    [DeliveryStatus] VARCHAR (150) NULL,
    CONSTRAINT [PK_DeliveryStatus] PRIMARY KEY CLUSTERED ([ID] ASC)
);

