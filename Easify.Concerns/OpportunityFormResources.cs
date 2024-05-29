using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns 
{
    public class OpportunityFormResources 
    {
        public List<MarketView> Markets { get; set; }
        public List<SDRating> SDRatings { get; set; }
        public List<StageView> Stages { get; set; }
        public List<ProductTypeView> ProductTypes { get; set; }
        public List<Property> Properties { get; set; }
    }
}
