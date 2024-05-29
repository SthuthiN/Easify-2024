using Easify.Concerns;
using Easify.Concerns.Common;
using Easify.Contracts.Common;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Easify.Providers.Common
{
    public class CacheProvider : ICacheProvider
    {
        private IUserContext _UserContext;
        private IDistributedCache _Cache;
        private ILogger<CacheProvider> _Logger;
        public CacheProvider(IUserContext userContext,IDistributedCache distributedCache,ILogger<CacheProvider> logger) { 
            _UserContext = userContext;
            _Cache = distributedCache;
            _Logger = logger;
        }
        public async Task<string> GetData(string key)
        {
            try
            {
                var data = await this._Cache.GetStringAsync(key);
                return data;
            }
            catch(Exception ex)
            {
                this._Logger.LogError(1, ex, ex.Message);
            }
            return "";
        }
        public OperationStatus SaveData(string key,string data)
        {
            try
            {
                this._Cache.SetStringAsync(key, data, new DistributedCacheEntryOptions()
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(24)
                });
                return new OperationStatus()
                {
                    Id = 1,
                    IsSuccess = true,
                    Message = "Success"
                };
            }
            catch (Exception ex)
            {
                new OperationStatus()
                {
                    Id = 1,
                    IsSuccess = false,
                    Message = ex.Message
                };
            }
            return new OperationStatus()
            {
                Id = 1,
                IsSuccess = false,
                Message = "Failure"
            };
        }

        public bool IsKeyExist(string key)
        {
            try
            {
               
                //var data = _Cache.GetString(key);
                //return data != null;
            }
            catch (Exception ex)
            {
                this._Logger.LogError(1, ex, ex.Message);
            }
            return false;
        }
    }
}
