using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns
{
    public class TopCompetitorInventory
    {
        public string GeographicalId { get; set; }
        public string DataCenterId { get; set; }
        public string DataCenterName { get; set; }
        public string Region { get; set; }
        public int RegionId { get; set; }
        public string BusinessRegion { get; set; }
        public int BusinessRegionId { get; set; }
        public string Country { get; set; }
        public int CountryId { get; set; }
        public string State { get; set; }
        public int StateId { get; set; }
        public string City { get; set; }
        public int CityId { get; set; }
        //public int MarketId { get; set; }
        public string CompanyName { get; set; }
        public float TotalPower { get; set; }
        public float TotalPowerAvailable { get; set; }
        //public float TotalPowerExpansions { get; set; }

    }
}
