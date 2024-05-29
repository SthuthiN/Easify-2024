using Easify.Contracts;
using Easify.Contracts.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Easify.Web.Controllers
{
    [Authorize]

    [Route("api/Admin")]
    public class AdminController : Controller
    {
        private IAdminProvider _AdminProvider;
        private IUserProvider _UserProvider;

        public AdminController(IUserProvider userProvider, IAdminProvider adminProvider)
        {
            this._AdminProvider = adminProvider;
            this._UserProvider = userProvider;
        }
    }
}