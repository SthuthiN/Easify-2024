using Dapper;
using Easify.Concerns.Common;
using Easify.Contracts.Common;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Easify.Providers.Common
{
    public class DataLakeProvider : IDataLakeProvider
    {
        #region GloalVariables

        /// <summary>
        /// Gets or sets the connection string.
        /// </summary>
        /// <value>
        /// The connection string.
        /// </value>
        public string ConnectionString { get; set; }
        private readonly IDataProvider _DataProvider;
        #endregion

        public DataLakeProvider(IConfiguration configuration, IDataProvider dataProvider)
        {
            ConnectionString = configuration.GetConnectionString(Constants.DataLakeConnection);
            this._DataProvider = dataProvider;
        }

        public void AddHistoryLog(string message, string userName, string method)
        {
            this._DataProvider.AddHistoryLog(message, userName, method);
        }

        public int AddItem(string query, object item)
        {
            using (IDbConnection connection = new SqlConnection(ConnectionString))
            {
                string sql = string.Concat("DECLARE @ID int; ", query, "; SET @ID = SCOPE_IDENTITY(); SELECT @ID");
                return connection.Query<int>(sql, item).Single();
            }
        }

        public int AddRecord(string query, object item)
        {
            throw new NotImplementedException();
        }

        public int Execute(string dbObject, object item, bool isStoredProcedure = false)
        {
            throw new NotImplementedException();
        }

        public bool ExecuteBulkUploadPrcedure(string dbObject, List<SqlParameter> parameters = null)
        {
            throw new NotImplementedException();
        }

        public DataTableCollection ExecutePrcedure(string dbObject, List<SqlParameter> parameters = null, bool isStoredProcedure = false)
        {
            throw new NotImplementedException();
        }

        public List<T> GetAllItems<T>(string tableName)
        {
            throw new NotImplementedException();
        }

        public T GetItem<T>(string query, object obj, bool isStoredProcedure = false)
        {
            T item = default(T);
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {
                    item = connection.QueryFirstOrDefault<T>(query, obj, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, Constants.MiUser, Constants.GetItem);
            }
            return item;
        }

        public T GetItemByID<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false)
        {
            throw new NotImplementedException();
        }

        public List<T> GetItems<T>(string query)
        {
            List<T> items = new List<T>();
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {

                    items = connection.Query<T>(query).AsList();
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, Constants.MiUser, Constants.GetItems);
            }
            return items;
        }

        public async Task<List<T>> GetItemsAsync<T>(string query)
        {
            List<T> items = null;
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {

                    items = (await connection.QueryAsync<T>(query)).AsList();
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, Constants.MiUser, Constants.GetItems);
            }
            return items;
        }

        public List<T> GetItems<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false)
        {
            throw new NotImplementedException();
        }

        public int UpdateItem(string query, object item, bool isStoredProcedure = false)
        {
            throw new NotImplementedException();
        }
    }

    public interface IDataLakeProvider
    {
        List<T> GetItems<T>(string query);
        Task<List<T>> GetItemsAsync<T>(string query);
    }
}
