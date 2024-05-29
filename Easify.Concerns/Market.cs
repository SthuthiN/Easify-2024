using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns
{
    public class MarketView
    {
        public int MarketID { get; set; }
        public string Market { get; set; }
        public string Region { get; set; }
        public bool IsReport { get; set; }
        public string DisplayOrder { get; set; }
    }

    public class Market
    {
        public string GeographicalId { get; set; }
        public int Id { get; set; }
        public string City { get; set; }
        public int CountryId { get; set; }
        public string State { get; set; }
        public int StateId { get; set; }
        public string Country { get; set; }
        public int BusinessRegionId { get; set; }
        public string BusinessRegion { get; set; }
        public int RegionId { get; set; }
        public string Region { get; set; }
        public string RegionClass { get; set; }
        public double AvailablePower { get; set; }
        public double TotalPower { get; set; }
        public double TotalRSF { get; set; }
        public double TotalPowerPercentUtilized { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public bool IsInternal { get; set; }
        public string MarketId { get; set; }
    }

}
