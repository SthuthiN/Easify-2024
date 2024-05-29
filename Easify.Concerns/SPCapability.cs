using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns
{
    public class SPCapability
    {
        public string GeographicalId { get; set; }
        public string CloudDeploymentId { get; set; }
        public string DataCenterId { get; set; }
        public string DataCenterName { get; set; }
        public string CloudProviderId { get; set; }
        public string CloudProviderName { get; set; }
        public string DataCenterProviderId { get; set; }
        public string DataCenterProviderName { get; set; }
        public int? RegionId { get; set; }
        public string Region { get; set; }
        public int? BusinessRegionId { get; set; }
        public string BusinessRegion { get; set; }
        public int? CountryId { get; set; }
        public string Country { get; set; }
        public int? StateId { get; set; }
        public string State { get; set; }
        public int? CityId { get; set; }
        public string City { get; set; }
        public string Market { get; set; }
        public bool Internal { get; set; }       
        public int? NodeType { get; set;}
        public string MarketId { get; set; }
        public int Year { get; set; }
        public string OperationalStatus { get; set; }
    }
}
