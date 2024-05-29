using Dapper;
using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Concerns.Configurations;
using Easify.Contracts;
using Microsoft.Extensions.Logging;
using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Easify.Providers
{
    public class ConfigurationsProvider : BaseProvider, IConfigurationsProvider
    {
        private IUserContext _UserContext;
        private ILogger<DashboardProvider> _Logger;
        private IDataAccessProvider _DataAccessProvider;

        public ConfigurationsProvider(IUserContext userContext, IDataAccessProvider dataAccessProvider, ILogger<DashboardProvider> logger) : base(dataAccessProvider)
        { 
            _UserContext = userContext;
            _Logger = logger;
            _DataAccessProvider = dataAccessProvider;
        }

        private List<IUserContext> GetUsers()
        {
            var users = new List<IUserContext>();
            try
            {
                users = this._DataAccessProvider.GetItems<IUserContext>(QueryHelper.Queries.GetUsers, new DynamicParameters()).ToList();
            }
            catch (Exception ex)
            {

            }
            return users;
        }

        private List<AccessRole> GetAccessRoles()
        {
            var roles = new List<AccessRole>();
            try
            {
                roles = this._DataAccessProvider.GetItems<AccessRole>(QueryHelper.Queries.GetAccessRoles, new DynamicParameters()).ToList();
            }
            catch (Exception ex)
            {
            }
            return roles;
        }

        public List<IUserContext> GetUserRoles()
        {
            var roles = new List<IUserContext>();
            try
            {
                roles = this._DataAccessProvider.GetItems<IUserContext>(QueryHelper.Queries.GetUserRoles, new DynamicParameters()).ToList();
            }
            catch (Exception ex)
            {
            }
            return roles;
        }

        public ConfigurationResource GetConfigurationResources()
        {
            var resources = new ConfigurationResource();

            try
            {
                resources.Users = GetUsers();
                resources.AccessRoles = GetAccessRoles();
                resources.UserRoles = GetUserRoles();
            }
            catch (Exception ex)
            {
            }

            return resources;
        }

        public OperationStatus AddorUpdateUser(IUserContext user)
        {
            try
            {
                if (user.Id == 0)
                {
                    var parameters = new
                    {
                        Email = user.Email,
                        Name = GetUserNameByEmail(user.Email),
                        RoleId = user.RoleId,
                        CreatedBy = _UserContext.Email,
                        CreatedOn = DateTime.Now,
                        ModifiedBy = _UserContext.Email,
                        ModifiedOn = DateTime.Now
                    };
                    var existingUserRoles = GetUserRoles();
                    if (existingUserRoles.Any(it => it.Email.ToLower() == user.Email.ToLower()))
                        return new OperationStatus { IsSuccess = false, Message = string.Format("Role : {0} already mapped to UserName : {1}", user.Role, user.Name) };
                    bool status = this._DataAccessProvider.AddItem(QueryHelper.Queries.AddUserRole, parameters) > 0;
                    return new OperationStatus() { IsSuccess = status, Message = status ? "Role mapped with user successfully." : "Role: " + user.Role + " is not mapped with user: " + user.Name + ". Please try again later." };
                }
                else
                {
                    var parameters = new
                    {
                        Id=user.Id,
                        RoleId = user.RoleId,
                        ModifiedBy = _UserContext.Email,
                        ModifiedOn = DateTime.Now
                    };
                    bool status = this._DataAccessProvider.UpdateItem(QueryHelper.Queries.UpdateUserRole, parameters) > 0;
                    return new OperationStatus() { IsSuccess = status, Message = status ? "Role edited for user successfully." : "Role: " + user.Role + " is not edited with user: " + user.Name + ". Please try again later." };
                }               
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return new OperationStatus { IsSuccess = false, Message = "Role: " + user.Role + " is not mapped with user: " + user.Name + ". Message" + ex.Message };
            }
        }

        public OperationStatus DeleteUserRole(int id)
        {
            var parameters = new
            {
                Id = id
            };
            bool status = this._DataAccessProvider.UpdateItem(QueryHelper.Queries.DeleteUserRole, parameters) > 0;
            return new OperationStatus() { IsSuccess = status, Message = status ? "Deleted user successfully." : "Error while deleting user. Please try again later." };
        }

        private object GetUserNameByEmail(string email)
        {
            var users = GetUsers();
            return users.Find((user) => user.Email.ToLower() == email.ToLower()).Name;
        }
        public List<UserConfiguration> GetUserConfigurations()
        {
            var userConfigurations = new List<UserConfiguration>();
            try
            {
                userConfigurations = this.DataAccessProvider.GetItems<UserConfiguration>(QueryHelper.Queries.GetUserConfigurations, new DynamicParameters()).ToList();
            }
            catch(Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }
            return userConfigurations;
        }
        public OperationStatus AddorUpdateUserConfiguration(UserConfiguration user)
        {
            try
            {
                if (user.Id == 0)
                {
                    var parameters = new
                    {
                        Email = user.Email,
                        DefaultTabId = user.DefaultTabId,
                        CreatedBy = _UserContext.Email,
                        CreatedOn = DateTime.Now,
                        ModifiedBy = _UserContext.Email,
                        ModifiedOn = DateTime.Now,
                        Name = user.Name,
                        IsDLR= user.IsDLR
                    };
                    var existingUserConfigurations = GetUserConfigurations();
                    if (existingUserConfigurations.Any(it => it.Email.ToLower() == user.Email.ToLower()))
                        return new OperationStatus { IsSuccess = false, Message = string.Format("Tab : {0} already mapped to User : {1}", user.DefaultTabId, user.Email) };
                    bool status = this._DataAccessProvider.AddItem(QueryHelper.Queries.AddUserConfiguration, parameters) > 0;
                    return new OperationStatus() { IsSuccess = status, Message = status ? "Tab mapped with user successfully." : "Tab: " + user.DefaultTabId + " is not mapped with user: " + user.Email + ". Please try again later." };
                }
                else
                {
                    var parameters = new
                    {
                        Id = user.Id,
                        DefaultRegionId = user.DefaultRegionId,
                        DefaultTabId = user.DefaultTabId,
                        ModifiedBy = _UserContext.Email,
                        ModifiedOn = DateTime.Now,
                        IsDLR = user.IsDLR
                    };
                    bool status = this._DataAccessProvider.UpdateItem(QueryHelper.Queries.UpdateUserConfiguration, parameters) > 0;
                    return new OperationStatus() { IsSuccess = status, Message = status ? "Default report edited for user successfully." : "Role: " + user.DefaultTabId + " is not edited with user: " + user.Email + ". Please try again later." };
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return new OperationStatus { IsSuccess = false, Message = "Role: " + user.DefaultTabId + " is not mapped with user: " + user.Email + ". Message" + ex.Message };
            }
        }
        public OperationStatus DeleteUserConfiguration(string email)
        {
            var parameters = new
            {
                Email = email
            };
            bool status = this._DataAccessProvider.UpdateItem(QueryHelper.Queries.DeleteUserConfiguration, parameters) > 0;
            return new OperationStatus() { IsSuccess = status, Message = status ? "Deleted user successfully." : "Error while deleting user. Please try again later." };
        }
        public List<Tab> GetTabs()
        {
            var tabs = new List<Tab>();
            try
            {
                tabs = this.DataAccessProvider.GetItems<Tab>(QueryHelper.Queries.GetTabs, new DynamicParameters()).ToList();
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }
            return tabs;
        }
    }
}
