CREATE TABLE [dbo].[CompetitorSuiteCondition] (
    [SuiteConditionID] INT          IDENTITY (1, 1) NOT NULL,
    [SuiteCondition]   VARCHAR (50) NULL,
    CONSTRAINT [PK_CompetitorSuiteCondition] PRIMARY KEY CLUSTERED ([SuiteConditionID] ASC)
);

