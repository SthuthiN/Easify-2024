using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns
{
    public class MarketActivity
    {
        public string Id { get; set; }
        public string GeoId { get; set; }
        public string MarketId { get; set; }
        public string Market { get; set; }
        public int CountryId { get; set; }
        public string Country { get; set; }
        public int StateId { get; set; }
        public string State { get; set; }
        public int RegionId { get; set; }
        public string Region { get; set; }
        public int BusinessRegionId { get; set; }
        public string BusinessRegion { get; set; }
        public string MediumStrategic { get; set; }
        public string HighStrategic { get; set; }
        public string? Url {get; set;} 
    }
}
