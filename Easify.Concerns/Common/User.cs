using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns.Common 
{
    public class User 
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Email { get; set; }

        public string JobTitle { get; set; }

        public string LoginName { get; set; }

        public string UserRole { get; set; }

        public bool IsAdmin { get; set; }

        public bool IsReviewer { get; set; }

        public bool IsMember { get; set; }
    }
}
