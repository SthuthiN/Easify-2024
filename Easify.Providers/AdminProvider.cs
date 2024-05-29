using Easify.Contracts;
using Easify.Contracts.Common;

namespace Easify.Providers
{
    public class AdminProvider : IAdminProvider
    {
        private IDataProvider _DataProvider { get; set; }
        private IUtilityProvider _UtilityProvider { get; set; }
        private IUserProvider _UserProvider { get; set; }


        public AdminProvider(IDataProvider dataProvider, IUtilityProvider utilityProvider, IUserProvider userProvider)
        {
            _DataProvider = dataProvider;
            _UtilityProvider = utilityProvider;
            _UserProvider = userProvider;

        }
    }


}
