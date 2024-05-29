using Easify.Contracts.Common;
using Microsoft.AspNetCore.Http;

namespace Easify.Providers
{
    public class UtilityProvider : IUtilityProvider
    {
        #region GloalVariables
        private ISPDataProvider _SPDataProvider { get; set; }
        private IDataProvider _DataProvider { get; set; }
        private IHttpContextAccessor _HttpContextAccessor { get; set; }
        private IUserProvider _UserProvider { get; set; }
        #endregion

        #region Constructor          
        /// <summary>
        /// Initializes a new instance of the <see cref="Utility"/> class.
        /// </summary>
        /// <param name="spHandler">The sp handler.</param>
        public UtilityProvider(IDataProvider dataProvider, IHttpContextAccessor httpContextAccessor, IUserProvider userProvider)
        {
            _DataProvider = dataProvider;
            _HttpContextAccessor = httpContextAccessor;
            _UserProvider = userProvider;
        }
        #endregion
    }
}
