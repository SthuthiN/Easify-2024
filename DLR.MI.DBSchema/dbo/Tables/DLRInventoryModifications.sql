﻿CREATE TABLE [dbo].[DLRInventoryModifications] (
    [Region]                             VARCHAR (255)  NULL,
    [Market]                             VARCHAR (255)  NULL,
    [QuarterID]                          INT            NULL,
    [Name]                               VARCHAR (255)  NULL,
    [TotalRentableSqft]                  FLOAT (53)     NULL,
    [TotalRaisedFloorSqft]               FLOAT (53)     NULL,
    [kWofUPS]                            FLOAT (53)     NULL,
    [SuiteCondition]                     VARCHAR (255)  NULL,
    [RecordTypeId]                       VARCHAR (255)  NULL,
    [Property]                           VARCHAR (255)  NULL,
    [Status]                             VARCHAR (255)  NULL,
    [DateAvailable]                      DATETIME       NULL,
    [InventoryType]                      VARCHAR (255)  NULL,
    [PropertyCode]                       VARCHAR (255)  NULL,
    [DateModified]                       DATETIME       NULL,
    [ModifiedBy]                         VARCHAR (255)  NULL,
    [DateCreated]                        DATE           NULL,
    [IsActive]                           BIT            NULL,
    [ProductType]                        VARCHAR (255)  NULL,
    [IsNew]                              BIT            NULL,
    [GlobalRegion]                       VARCHAR (200)  NULL,
    [EarliestDeliveryDate]               DATETIME       NULL,
    [Signed/PendingLease(s)]             INT            NULL,
    [TotalSigned/Pending]                INT            NULL,
    [TotalROFO(kW)]                      FLOAT (53)     NULL,
    [ROFOCustomer]                       VARCHAR (MAX)  NULL,
    [TotalActive3rdPartyInterest(kW)]    FLOAT (53)     NULL,
    [Prospect(s)]                        VARCHAR (MAX)  NULL,
    [Comments]                           VARCHAR (MAX)  NULL,
    [TotalPlannedITLoad(kW)]             FLOAT (53)     NULL,
    [StrategicInitiative]                BIT            NULL,
    [MoveInReadyInitiative]              BIT            NULL,
    [ID]                                 INT            NULL,
    [IsDeleted]                          BIT            NULL,
    [CompanyName]                        VARCHAR (255)  NULL,
    [AirportCode]                        VARCHAR (255)  NULL,
    [AssetScoring]                       VARCHAR (255)  NULL,
    [ProjectScope]                       VARCHAR (MAX)  NULL,
    [DeliveryStatus]                     VARCHAR (255)  NULL,
    [ResponsibleParty]                   VARCHAR (255)  NULL,
    [WaterCooling]                       VARCHAR (100)  NULL,
    [SecurePerimeter]                    VARCHAR (255)  NULL,
    [IndustryOrComplianceCertifications] VARCHAR (255)  NULL,
    [CloudOnRamp]                        VARCHAR (255)  NULL,
    [NetworkDensity]                     VARCHAR (255)  NULL,
    [SmartHands]                         VARCHAR (255)  NULL,
    [EstimatedCostsUSD]                  FLOAT (53)     NULL,
    [PowerDensity]                       FLOAT (53)     NULL,
    [TargetProductSize]                  NVARCHAR (100) NULL,
    [LargestContiguousSuite]             FLOAT (53)     NULL,
    [CPS]                                VARCHAR (100)  NULL,
    [ChilledWater]                       VARCHAR (10)   NULL,
    [DesignedDensity]                    VARCHAR (100)  NULL,
    [ElectricalTopology]                 VARCHAR (100)  NULL,
    [MechanicalTopology]                 VARCHAR (100)  NULL,
    [DesignedDensityUnit]                VARCHAR (10)   NULL
);

