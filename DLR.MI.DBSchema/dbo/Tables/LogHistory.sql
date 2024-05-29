CREATE TABLE [dbo].[LogHistory] (
    [LogHistoryID] INT           IDENTITY (1, 1) NOT NULL,
    [Message]      VARCHAR (MAX) NULL,
    [UserName]     VARCHAR (100) NULL,
    [DateCreated]  DATETIME      CONSTRAINT [DF_LogHistory_DateCreated] DEFAULT (getdate()) NULL,
    [Method]       VARCHAR (100) NULL,
    CONSTRAINT [PK_LogHistory] PRIMARY KEY CLUSTERED ([LogHistoryID] ASC) WITH (FILLFACTOR = 80)
);

