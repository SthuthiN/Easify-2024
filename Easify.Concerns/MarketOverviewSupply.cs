using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns
{
    public class MarketOverviewSupply
    {
        public int Id { get; set; }
        public int RegionId { get; set; }
        public int BusinessRegionId { get; set; }
        public int CountryId { get; set; }
        public int CityId { get; set; }
        public int TotalPower { get; set; }
    }
}
