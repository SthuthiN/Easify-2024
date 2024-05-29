using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns 
{
    public class Property 
    {
        public int ID { get; set; }
        public string PropertyCode { get; set; }
        public string PropertyAddress { get; set; }
        public string Market { get; set; }
        public string Region { get; set; }
    } 

    public class PropertyView
    {
        public string PropertyCode { get; set; }
        public string Property { get; set; }
        public string Market { get; set; }
        public string Region { get; set; }
        public string GlobalRegion { get; set; }
        public string Suite { get; set; }
        public string CompanyName { get; set; }
        public string SiteCode { get; set; }
    }
}
