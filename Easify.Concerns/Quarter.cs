using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns 
{
    public class QuarterView 
    {
        public int ID { get; set; }
        public string Quarter { get; set; }
        public int Year { get; set; }
        public bool IsLocked { get; set; }
    }
}
