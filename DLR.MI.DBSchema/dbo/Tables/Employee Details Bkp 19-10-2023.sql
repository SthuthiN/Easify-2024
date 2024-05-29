﻿CREATE TABLE [dbo].[Employee Details Bkp 19-10-2023] (
    [ID]                   INT            NULL,
    [EE ID]                NVARCHAR (255) NULL,
    [Employee Name]        NVARCHAR (511) NULL,
    [Cost Center]          NVARCHAR (255) NULL,
    [SiteCode]             NVARCHAR (255) NULL,
    [UserName]             NVARCHAR (100) NULL,
    [Email]                NVARCHAR (255) NULL,
    [EmployeeRole]         NVARCHAR (255) NULL,
    [Cost Center ID]       INT            NULL,
    [ConsultantFirm]       NVARCHAR (255) NULL,
    [HourlyPaidOrSalaried] NVARCHAR (255) NULL,
    [isEmpManagerView]     BIT            NULL,
    [CreatedDate]          DATETIME       NULL,
    [ModifiedDate]         DATETIME       NULL,
    [CreatedBy]            NVARCHAR (MAX) NULL,
    [ModifiedBy]           NVARCHAR (MAX) NULL,
    [IsActive]             BIT            NULL,
    [Corporate Job Title]  NVARCHAR (255) NULL,
    [Functional Job Title] NVARCHAR (255) NULL,
    [ManagerID]            NVARCHAR (MAX) NULL,
    [ManagerEmail]         NVARCHAR (MAX) NULL,
    [ManagerName]          NVARCHAR (255) NULL,
    [EmployeeType]         VARCHAR (255)  NULL,
    [Function]             VARCHAR (255)  NULL,
    [MobileNumber]         VARCHAR (MAX)  NULL,
    [FirstName]            NVARCHAR (255) NULL,
    [LastName]             VARCHAR (255)  NULL,
    [PreferredName]        VARCHAR (255)  NULL,
    [WorkCountry]          VARCHAR (50)   NULL,
    [AssignmentCategory]   VARCHAR (100)  NULL,
    [OfficeNumber]         VARCHAR (255)  NULL,
    [IsColoUser]           BIT            NULL,
    [IsInclude]            BIT            NULL,
    [IsUpdateAllow]        BIT            NULL,
    [IsInActiveOn]         DATE           NULL,
    [IsHidden]             BIT            NULL,
    [AlteredOnByPackage]   DATETIME       NULL,
    [AlteredByPackage]     NVARCHAR (MAX) NULL,
    [IsInterxion]          BIT            NULL
);
