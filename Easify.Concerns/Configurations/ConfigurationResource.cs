using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Concerns.Configurations
{
    public class ConfigurationResource
    {
        public List<IUserContext> Users { get; set; }

        public List<AccessRole> AccessRoles { get; set; }

        public List<IUserContext> UserRoles { get; set; }
    }
}
