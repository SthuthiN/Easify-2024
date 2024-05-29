using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns
{
    public class FooterLink
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public bool IsDisabled {  get; set; }
    }
}
