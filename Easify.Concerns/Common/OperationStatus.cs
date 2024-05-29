using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Concerns.Common 
{
    public class OperationStatus 
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public int Id { get; set; }
    }
}