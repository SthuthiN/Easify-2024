using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns.Common
{
    public class Email
    {
        public string Title { get; set; }
        public string Message { get; set; }
        public IFormFile Attachment { get; set; }
    }
}
