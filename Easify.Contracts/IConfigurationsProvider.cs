using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Concerns.Configurations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Easify.Contracts
{
    public interface IConfigurationsProvider
    {
        ConfigurationResource GetConfigurationResources();

        List<IUserContext> GetUserRoles();

        OperationStatus AddorUpdateUser(IUserContext userRole);

        OperationStatus DeleteUserRole(int id);
        List<UserConfiguration> GetUserConfigurations();

        OperationStatus AddorUpdateUserConfiguration(UserConfiguration userRole);

        OperationStatus DeleteUserConfiguration(string email);
        List<Tab> GetTabs();


    }
}
