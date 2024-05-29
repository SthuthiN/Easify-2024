using Easify.Concerns.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Easify.Contracts.Common 
{
    public interface IUserProvider 
    {        
        User GetUser();
    }
}
