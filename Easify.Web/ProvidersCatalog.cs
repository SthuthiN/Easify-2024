using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Contracts;
using Easify.Contracts.Common;
using Easify.Providers;
using Easify.Providers.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Easify.Web
{
    /// <summary>
    /// Class Startup.
    /// </summary>
    public partial class Startup
    {
        /// <summary>
        /// Registers the providers.
        /// </summary>
        /// <param name="services">The services.</param>
        private void RegisterProviders(IServiceCollection services)
        {
            services.AddScoped<IEmailClient, EmailClient>();
            services.AddScoped(typeof(IDataAccessProvider<>), typeof(DataAccessProvider<>));
            services.AddScoped<ISPDataProvider, SPDataProvider>();
            services.AddScoped<IDataProvider, DataProvider>();
            services.AddScoped<IDataLakeProvider, DataLakeProvider>();
            services.AddScoped<IUserProvider, UserProvider>();
            services.AddScoped<IDashboardProvider, DashboardProvider>();
            services.AddScoped<IConfigurationsProvider, ConfigurationsProvider>();
            services.AddScoped<IUtilityProvider, UtilityProvider>();
            services.AddScoped<IDataAccessProvider, DataAccessProvider>();

            services.AddScoped<IEmailTemplateProvider, EmailTemplateProvider>();
            services.AddScoped<IConfigurationProvider, ConfigurationProvider>();
            services.AddScoped<IAdminProvider, AdminProvider>();
            services.AddScoped<IEmailClient, EmailClient>();
            services.AddScoped<ICacheProvider, CacheProvider>();
        }

        private string GetClaimValue(IHttpContextAccessor httpContextAccessor, string name)
        {
            return httpContextAccessor.HttpContext.User.Claims.FirstOrDefault(s => s.Type == name)?.Value;
        }

        /// <summary>
        /// Generates the context.
        /// </summary>
        /// <param name="serviceProvider">The service provider.</param>
        /// <returns>IUserContext.</returns>
        private IUserContext GenerateContext(IServiceProvider serviceProvider)
        {
            var httpProvider = serviceProvider.GetService<IHttpContextAccessor>();
            var dataAccessProvider = serviceProvider.GetService<IDataAccessProvider>();
            var spDataprovider = serviceProvider.GetService<ISPDataProvider>();

            UserContext u = new();
            if (httpProvider != null && httpProvider.HttpContext.User.Identity.IsAuthenticated)
            {
                u.Name = GetClaimValue(httpProvider, "name");
                u.Email = GetClaimValue(httpProvider, "preferred_username");
                NLog.MappedDiagnosticsLogicalContext.Set("LoggedInUser", u.Email);
            }

            return this.GetLoggedInUser(u, dataAccessProvider, spDataprovider);
        }

        /// <summary>
        /// Gets the logged in user.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <param name="dataAccessProvider">The data access provider.</param>
        /// <returns>IUserContext.</returns>
        private IUserContext GetLoggedInUser(IUserContext user, IDataAccessProvider dataAccessProvider, ISPDataProvider spDataProvider)
        {
            if (dataAccessProvider != null && user != null && !string.IsNullOrEmpty(user.Email))
            {
                var parameters = new { Email = user.Email };
                var res = dataAccessProvider.GetItem<IUserContext>(QueryHelper.Queries.GetUserRole, parameters);
                if (res != null && res.IsAdmin)
                {
                    res.IsReviewer = true;
                }
                return res != null ? res : user;
            }
            return user;
        }
    }
}
