using Easify.Concerns.Common;
using Easify.Contracts;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using RepoDb;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Easify.Providers
{
    /// <summary>
    /// Class DataAccessProvider.
    /// Implements the <see cref="Easify.Contracts.IDataAccessProvider" />
    /// </summary>
    /// <seealso cref="Easify.Contracts.IDataAccessProvider" />
    public class DataAccessProvider : IDataAccessProvider
    {
        private string _connectionString;

        private readonly ILogger<DataAccessProvider> _Logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="DataAccessProvider"/> class.
        /// </summary>
        /// <param name="configuration">The configuration.</param>
        public DataAccessProvider(IConfiguration configuration, ILogger<DataAccessProvider> logger)
        {
            _connectionString = configuration.GetConnectionString(Constants.ConnectionStringKey);
            this._Logger = logger;
        }

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        public IEnumerable<T> GetItems<T>() where T : class
        {
            IEnumerable<T> items = null;
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    items = connection.QueryAll<T>();
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }

            return items;
        }

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        public IEnumerable<T> GetItems<T>(string query, object parameters, bool isStoredProcedure = false) where T : class
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                try
                {
                    return connection.ExecuteQuery<T>(query, parameters, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                }
                catch (Exception ex)
                {
                    _Logger.LogError(1, ex, ex.Message);
                }
                return Enumerable.Empty<T>();
            }
        }
        public async Task<IEnumerable<T>> GetItemsAsync<T>(string query, object parameters, bool isStoredProcedure = false) where T : class
        {
            try
            {
                using (IDbConnection connection = new SqlConnection(_connectionString))
                {

                    return await connection.ExecuteQueryAsync<T>(query, parameters, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }
            return Enumerable.Empty<T>();
        }
        /// <summary>
        /// Gets the item.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="obj">The object.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>T.</returns>
        public T GetItem<T>(string query, object obj, bool isStoredProcedure = false)
        {
            T item = default(T);
            try
            {
                using (IDbConnection connection = new SqlConnection(_connectionString))
                {
                    var items = connection.ExecuteQuery<T>(query, obj, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                    item = items != null ? items.FirstOrDefault() : default(T);
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }

            return item;
        }

        /// <summary>
        /// Adds the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns>System.Int32.</returns>
        public int AddItem(string query, object item)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                string sql = string.Concat("DECLARE @ID int; ", query, "; SET @ID = SCOPE_IDENTITY(); SELECT @ID");
                var response = connection.ExecuteQuery<int>(sql, item);
                return response != null ? response.Single() : 0;
            }
        }

        #region Update Method

        /// <summary>
        /// Updates the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>System.Int32.</returns>
        public int UpdateItem(string query, object item, bool isStoredProcedure = false)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var response = connection.ExecuteNonQuery(query, item);
                return response != null && response > 0 ? response : 0;
            }
        }

        #endregion

        #region Execute Method

        /// <summary>
        /// Executes the specified database object.
        /// </summary>
        /// <param name="dbObject">The database object.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>System.Int32.</returns>
        public int Execute(string dbObject, object item, bool isStoredProcedure = false)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var res = connection.ExecuteQuery<int>(dbObject, item, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                return res != null && res.Count() > 0 ? res.SingleOrDefault() : 0;
            }
        }

        #endregion

        #region QueryMultiples Method
        /// <summary>
        /// Queries the multiples.
        /// </summary>
        /// <param name="queries">The queries.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <param name="readerFuncs">The reader funcs.</param>
        /// <returns>List&lt;System.Object&gt;.</returns>
        public List<object> QueryMultiples(string queries, object parameters = null, bool isStoredProcedure = false, params Func<dynamic, object>[] readerFuncs)
        {
            var results = new List<object>();
            try
            {
                using (IDbConnection connection = new SqlConnection(_connectionString))
                {
                    var resultSets = connection.ExecuteQueryMultiple(queries, parameters, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);

                    foreach (var readerFunc in readerFuncs)
                    {
                        var res = readerFunc(resultSets);
                        results.Add(res);
                    }
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }

            return results;
        }

        #endregion

        #region QueryMultiples Method
        /// <summary>
        /// Executes the scalar.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>T.</returns>
        public T ExecuteScalar<T>(string query, object item, bool isStoredProcedure = false)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.ExecuteScalar<T>(query, item, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
            }
        }

        #endregion
    }
}