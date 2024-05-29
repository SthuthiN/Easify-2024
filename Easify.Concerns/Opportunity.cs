using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns {
    public class Opportunity {
        public int ID { get; set; }
        public string Market { get; set; }
        public string Region { get; set; }
        public string Stage { get; set; }
        public double Probability { get; set; }
        public int QuarterID { get; set; }
        public string OpportunityName { get; set; }
        public string Property { get; set; }
        public string Industry { get; set; }
        public string ProductType { get; set; }
        public double TotalKW { get; set; }
        public double RaisedSqFt { get; set; }
        public double RentableSf { get; set; }
        public double AnnualizedGAAPRent { get; set; }
        public string TransactionType { get; set; }
        public string OpportunityOwner { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public string ModifiedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsUpdated { get; set; }
        public bool IsNew { get; set; }
        public double RCFirstMonthRent { get; set; }
        public string SupplyDemandRating { get; set; }
        public double StartingKW { get; set; }
        public double AverageRent { get; set; }
        public double AverageKW { get; set; }
        public bool IsModified { get; set; }
    }

    public class OpportunityImport
    {
        public string Market { get; set; }
        public string Region { get; set; }
        public string Stage { get; set; }
        public double Probability { get; set; }
        public int QuarterID { get; set; }
        public string OpportunityName { get; set; }
        public string Property { get; set; }
        public string Industry { get; set; }
        public string ProductType { get; set; }
        public double TotalKW { get; set; }
        public double RaisedSqFt { get; set; }
        public double RentableSf { get; set; }
        public double AnnualizedGAAPRent { get; set; }
        public string TransactionType { get; set; }
        public string OpportunityOwner { get; set; }
        public DateTime DateModified { get; set; }
        public string ModifiedBy { get; set; }
        public double RCFirstMonthRent { get; set; }
        public string SupplyDemandRating { get; set; }
        public double StartingKW { get; set; }
        public double AverageRent { get; set; }
        public double AverageKW { get; set; }
    }
}
