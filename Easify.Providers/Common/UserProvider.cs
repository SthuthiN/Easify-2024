using Easify.Concerns.Common;
using Easify.Contracts.Common;
using Microsoft.AspNetCore.Http;
using System;

namespace Easify.Providers.Common 
{
    public class UserProvider : IUserProvider 
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private IDataProvider _DataProvider { get; set; }

        public UserProvider(IHttpContextAccessor httpContextAccessor, IDataProvider dataProvider)
        {
            _httpContextAccessor = httpContextAccessor;
            _DataProvider = dataProvider;
        }

        public User GetUser()
        {            
            try
            {
                User user = new User();
                //if (_httpContextAccessor.HttpContext.Session != null && _httpContextAccessor.HttpContext.Session.GetString(Constants.CurrentUser) != null)
                //{
                //    user = JsonConvert.DeserializeObject<User>(_httpContextAccessor.HttpContext.Session.GetString(Constants.CurrentUser).ToString());
                //}
                return user;
            }
            catch (Exception ex)
            {
                _DataProvider.AddHistoryLog(ex.Message,Constants.MiUser , Constants.GetUser );
                return null;
            }
        }
    }
}
