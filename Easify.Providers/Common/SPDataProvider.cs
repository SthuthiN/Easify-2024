using Easify.Contracts.Common;
using Microsoft.Extensions.Logging;
using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SPUser = Microsoft.SharePoint.Client.User;
using User = Easify.Concerns.Common.User;

namespace Easify.Providers.Common
{
    public class SPDataProvider : ISPDataProvider
    {
        private IConfigurationProvider _ConfigurationProvider;
        private ILogger<DashboardProvider> _Logger;

        public SPDataProvider(IConfigurationProvider configurationProvider, ILogger<DashboardProvider> logger)
        {
            this._ConfigurationProvider = configurationProvider;
            _Logger = logger;
        }

        async public Task<bool> IsUserInGroup(string email, string groupName)
        {
            try
            {
                using (var clientContext = new ClientContext(this._ConfigurationProvider.SiteUrl))
                {
                    clientContext.Credentials = new SharePointOnlineCredentials(this._ConfigurationProvider.UserName, this._ConfigurationProvider.Password);
                    var web = clientContext.Web;
                    SPUser user = web.SiteUsers.GetByEmail(email);
                    clientContext.Load(user, u => u.Groups.Include(it => it.Title));
                    await clientContext.ExecuteQueryAsync();
                    bool isUserInGrp = user.Groups.Any(g => g.Title.Equals(groupName));
                    return isUserInGrp;
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return false;
            }
        }
        public async Task<List<User>> GetUsers()
        {
            try
            {
                List<User> users = new List<User>();

                using (var clientContext = new ClientContext(this._ConfigurationProvider.SiteUrl))
                {
                    clientContext.Credentials = new SharePointOnlineCredentials(this._ConfigurationProvider.UserName, this._ConfigurationProvider.Password);

                    GroupCollection collGroup = clientContext.Web.SiteGroups;
                    Group group = collGroup.GetByName("MID v2 Members");
                    UserCollection collUser = group.Users;

                    clientContext.Load(collUser);

                    await clientContext.ExecuteQueryAsync();

                    foreach (SPUser oUser in collUser)
                    {
                        users.Add(new User()
                        {
                            Email = oUser.Email,
                            LoginName = oUser.LoginName,
                            IsMember = true,
                            UserRole = "Member",
                            Id = oUser.Id,
                            Title = oUser.Title
                        });
                    }
                }
                return users;
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return new List<User>();
            }
            return new List<User>();
        }
    }
}
