using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Concerns.Configurations;
using Easify.Contracts;
using Easify.Contracts.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Easify.Web.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ConfigurationsController : ControllerBase
    {
        private readonly IConfigurationsProvider ConfigurationsProvider;
        private readonly ISPDataProvider _spDataProvider;

        public ConfigurationsController(IConfigurationsProvider configurationsProvider, ISPDataProvider sPDataProvider)
        {
            this.ConfigurationsProvider = configurationsProvider;
            _spDataProvider = sPDataProvider;
        }

        [Route("resources")]
        [HttpGet]
        public async Task<ConfigurationResource> GetConfigurationResources()
        {
            return await Task.Run(() => this.ConfigurationsProvider.GetConfigurationResources());
        }

        [Route("userroles")]
        [HttpGet]
        public async Task<List<IUserContext>> GetUserRoles()
        {
            return await Task.Run(() => this.ConfigurationsProvider.GetUserRoles());
        }

        [Route("userroles/{id}")]
        [HttpDelete]
        public async Task<OperationStatus> RemoveUserRole(int id)
        {
            return await Task.Run(() => this.ConfigurationsProvider.DeleteUserRole(id));
        }

        [Route("userroles")]
        [HttpPost]
        public async Task<OperationStatus> AddOrUpdateUserRole(IUserContext userRole)
        {
            return await Task.Run(() => this.ConfigurationsProvider.AddorUpdateUser(userRole));
        }

        [Route("userconfigurations")]
        [HttpGet]
        public async Task<List<UserConfiguration>> GetUserConfigurations()
        {
            return await Task.Run(() => this.ConfigurationsProvider.GetUserConfigurations());
        }

        [Route("tabs")]
        [HttpGet]
        public async Task<List<Tab>> GetTabs()
        {
            return await Task.Run(() => this.ConfigurationsProvider.GetTabs());
        }
        [Route("sharepointusers")]
        [HttpGet]
        public async Task<List<User>> GetSharePointUsers()
        {
            return await this._spDataProvider.GetUsers();
        }
        [Route("userconfigurations")]
        [HttpPost]
        public async Task<OperationStatus> AddOrUpdateUserConfiguration(UserConfiguration userRole)
        {
            return await Task.Run(() => this.ConfigurationsProvider.AddorUpdateUserConfiguration(userRole));
        }

        [Route("userconfigurations/{email}")]
        [HttpDelete]
        public async Task<OperationStatus> RemoveUserConfiguration(string email)
        {
            return await Task.Run(() => this.ConfigurationsProvider.DeleteUserConfiguration(email));
        }
    }
}
