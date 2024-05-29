using Easify.Concerns.Common;
using System;

namespace Easify.Concerns
{
    public class Tab:Audit
    {
        public int Id { get; set; }
        public string Module { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public bool IsDLR { get; set; }
        public string DefaultSection { get; set; }
    }
}
