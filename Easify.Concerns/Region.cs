using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns 
{
    public class RegionView
    {
        public int RegionID { get; set; }
        public string Region { get; set; }
        public string GlobalRegion { get; set; }
    }
    public class Region
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Class { get; set; }
    }
}
