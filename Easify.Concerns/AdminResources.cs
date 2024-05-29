using Easify.Concerns.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns 
{
    public class AdminResources 
    {
        public string AnalysisQuarter { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsReviewer { get; set; }
        public bool IsLocked { get; set; }
        public List<User> Admins { get; set; }
        public List<User> Members { get; set; }
        public List<User> Reviewers { get; set; }
    }
}
