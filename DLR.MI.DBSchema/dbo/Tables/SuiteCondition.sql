CREATE TABLE [dbo].[SuiteCondition] (
    [SuiteConditionID] INT          IDENTITY (1, 1) NOT NULL,
    [SuiteCondition]   VARCHAR (50) NULL,
    CONSTRAINT [PK_SuiteCondition] PRIMARY KEY CLUSTERED ([SuiteConditionID] ASC) WITH (FILLFACTOR = 80)
);

