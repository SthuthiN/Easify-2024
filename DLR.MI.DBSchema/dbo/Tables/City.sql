CREATE TABLE [dbo].[City] (
    [ID]                        INT           IDENTITY (1, 1) NOT NULL,
    [Name]                      VARCHAR (255) NOT NULL,
    [CountryID]                 INT           NOT NULL,
    [IsActive]                  BIT           DEFAULT ((1)) NOT NULL,
    [CreatedBy]                 VARCHAR (255) DEFAULT ('SYSADMIN') NULL,
    [CreatedOn]                 DATE          DEFAULT (getdate()) NULL,
    [ModifiedBy]                VARCHAR (255) DEFAULT ('SYSADMIN') NULL,
    [ModifiedOn]                DATE          DEFAULT (getdate()) NULL,
    [AvailablePower]            FLOAT (53)    NOT NULL,
    [TotalPower]                FLOAT (53)    NOT NULL,
    [TotalRSF]                  FLOAT (53)    NOT NULL,
    [TotalPowerPercentUtilized] FLOAT (53)    NOT NULL,
    [OperationalStatus]         VARCHAR (50)  NOT NULL
);

