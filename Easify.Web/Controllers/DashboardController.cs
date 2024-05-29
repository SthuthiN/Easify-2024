using Easify.Concerns;
using Easify.Contracts;
using Easify.Contracts.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Easify.Web.Controllers
{
    /// <summary>
    /// Class DashboardController.
    /// Implements the <see cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardProvider DashboardProvider;

        private readonly ISPDataProvider _spDataProvider;

        /// <summary>
        /// Initializes a new instance of the <see cref="DashboardController"/> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        /// <param name="dashboardProvider">The dashboard provider.</param>
        public DashboardController(IDashboardProvider dashboardProvider, ISPDataProvider sPDataProvider)
        {
            this.DashboardProvider = dashboardProvider;
            this._spDataProvider = sPDataProvider;
        }

        /// <summary>
        /// Gets the user context.
        /// </summary>
        /// <returns>ClientUserContext.</returns>
        [Route("usercontext")]
        [HttpGet]
        public async Task<IUserContext> GetUserContext()
        {
            var userContext = await Task.Run(() => this.DashboardProvider.GetUserContext());
            userContext.hasAccess = await this._spDataProvider.IsUserInGroup(userContext.Email, "MID v2 Members");
            return userContext;
        }
    }
}