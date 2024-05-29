using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns.Common
{
    public class UserConfiguration:Audit
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public int DefaultRegionId { get; set; }
        public int DefaultTabId { get; set; }
        public string DefaultTab { get; set; }
        public string DefaultRegion { get; set; }
        public string DefaultModule { get; set; }
        public string DefaultSection { get; set; }
        public bool IsDLR { get; set; }
    }
}
