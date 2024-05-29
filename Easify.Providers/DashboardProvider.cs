using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Contracts;
using Easify.Contracts.Common;
using Easify.Providers.Common;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;

namespace Easify.Providers
{
    /// <summary>
    /// Class DashboardProvider.
    /// Implements the <see cref="Easify.Providers.BaseProvider" />
    /// Implements the <see cref="Easify.Contracts.IDashboardProvider" />
    /// </summary>
    /// <seealso cref="Easify.Providers.BaseProvider" />
    /// <seealso cref="Easify.Contracts.IDashboardProvider" />
    public class DashboardProvider : BaseProvider, IDashboardProvider
    {
        /// <summary>
        /// User Context
        /// </summary>

        private IDataAccessProvider _DataAccessProvider;

        private Contracts.Common.IConfigurationProvider _ConfigurationProvider;

        private ISPDataProvider _SPDataProvider;
        private ICacheProvider _CacheProvider;

        private IUserContext UserContext;

        private StackExchange.Redis.ConnectionMultiplexer _connectionMultiplexer;

        /// <summary>
        /// Logger
        /// </summary>
        private ILogger<DashboardProvider> _Logger;

        private IDataLakeProvider _LakeProvider;
        private IEmailClient _EmailClient;

        /// <summary>
        /// Initializes a new instance of the <see cref="DashboardProvider"/> class.
        /// </summary>
        /// <param name="userContext">The user context.</param>
        /// <param name="dataAccessProvider">The data access provider.</param>
        ///         
        public DashboardProvider(IUserContext userContext, IDataAccessProvider dataAccessProvider, ILogger<DashboardProvider> logger, Contracts.Common.IConfigurationProvider configurationProvider, ISPDataProvider sPDataProvider, IDataLakeProvider dataLakeProvider, ICacheProvider cacheProvider, IEmailClient emailClient) : base(dataAccessProvider)
        {
            this.UserContext = userContext;
            this._DataAccessProvider = dataAccessProvider;
            this._Logger = logger;
            this._ConfigurationProvider = configurationProvider;
            this._SPDataProvider = sPDataProvider;
            this._LakeProvider = dataLakeProvider;
            this._CacheProvider = cacheProvider;
            this._EmailClient = emailClient;
        }


        /// <summary>
        /// Gets the user context.
        /// </summary>
        /// <returns>Easify.Concerns.ClientUserContext.</returns>
        public IUserContext GetUserContext()
        {
            try
            {
                var userContext = JsonConvert.DeserializeObject<IUserContext>(JsonConvert.SerializeObject(this.UserContext));
                //var keyExists = this._CacheProvider.IsKeyExist(JsonConvert.SerializeObject(new CacheKey() { Email = this.UserContext.Email, Type = Constants.ReportsData.Supplies }));
                //userContext.IsCacheExists = keyExists;
                var parameters = new
                {
                    Email = this.UserContext.Email
                };
                var userConfiguration = this.DataAccessProvider.GetItem<IUserContext>(QueryHelper.Queries.GetUserConfiguration, parameters);
                if (userConfiguration != null)
                {
                    userContext.DefaultTabId = userConfiguration.DefaultTabId;
                    userContext.DefaultRegionId = userConfiguration.DefaultRegionId;
                    userContext.IsDLR = userConfiguration.IsDLR;
                }
                return userContext;
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return new IUserContext();
            }
        }
    }
}
