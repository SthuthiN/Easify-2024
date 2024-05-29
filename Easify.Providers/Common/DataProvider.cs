using Dapper;
using Easify.Contracts.Common;
using Easify.Concerns.Common;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

/// <summary>
/// It contains all DB calls.
/// </summary>
namespace Easify.Providers
{
    public class DataProvider : IDataProvider
    {
        #region GloalVariables

        /// <summary>
        /// Gets or sets the connection string.
        /// </summary>
        /// <value>
        /// The connection string.
        /// </value>
        public string ConnectionString { get; set; }

        #endregion

        #region Constructor    

        /// <summary>
        /// Initializes a new instance of the <see cref="DataProvider" /> class.
        /// </summary>
        public DataProvider(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("DefaultConnection");
        }

        #endregion

        #region Methods        

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <returns></returns>
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
                AddHistoryLog(ex.Message, "MI User", "GetItems");
            }
            return items;
        }

        /// <summary>
        /// Gets the item.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
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
                AddHistoryLog(ex.Message, "MI User", "GetItem");
            }
            return item;
        }


        /// <summary>
        /// Gets all items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="tableName">Name of the table.</param>
        /// <returns></returns>
        public List<T> GetAllItems<T>(string tableName)
        {
            List<T> items = new List<T>();
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {
                    items = connection.Query<T>($"select * from {tableName}").AsList();
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, "MI User", "GetAllItems");
            }

            return items;
        }

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        public List<T> GetItems<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false)
        {
            List<T> items = new List<T>();
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {
                    items = connection.Query<T>(query, param: parameters, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text).AsList();
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, "MI User", "GetItems");
            }
            return items;
        }

        /// <summary>
        /// Gets the item by identifier.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        public T GetItemByID<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false)
        {
            T item = default(T);
            try
            {
                using (IDbConnection connection = new SqlConnection(ConnectionString))
                {
                    item = connection.QueryFirstOrDefault<T>(query, param: parameters, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, "MI User", "GetItemByID");
            }
            return item;
        }

        #endregion

        #region Add Methods

        /// <summary>
        /// execute query to add item, no need to get item id
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns></returns>
        public int AddRecord(string query, object item)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(ConnectionString))
            {
                return connection.Execute(query, item);
            }
        }

        /// <summary>
        /// execute query to add item, to get item id
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns></returns>
        public int AddItem(string query, object item)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(ConnectionString))
            {
                string sql = string.Concat("DECLARE @ID int; ", query, "; SET @ID = SCOPE_IDENTITY(); SELECT @ID");
                return connection.Query<int>(sql, item).Single();
            }
        }

        #endregion

        #region Update Method

        /// <summary>
        /// Updates the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        public int UpdateItem(string query, object item, bool isStoredProcedure = false)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(ConnectionString))
            {
                return connection.Execute(query, item, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
            }
        }

        #endregion

        #region Execute Method

        /// <summary>
        /// Executes the DB Object, instead of Sending the Query
        /// </summary>
        /// <param name="dbObject"></param>
        /// <param name="item"></param>
        /// <param name="isStoredProcedure"></param>
        /// <returns></returns>
        public int Execute(string dbObject, object item, bool isStoredProcedure = false)
        {
            //Do not include try catch, as the actual exception is used to show in the UI.
            using (IDbConnection connection = new SqlConnection(ConnectionString))
            {
                return connection.Execute(dbObject, item, commandType: isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text);
            }
        }

        /// <summary>
        /// Gets the data tables.
        /// </summary>
        /// <param name="dbObject">The database object.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns></returns>
        public DataTableCollection ExecutePrcedure(string dbObject, List<SqlParameter> parameters = null, bool isStoredProcedure = false)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    using (SqlCommand scCmd = new SqlCommand(dbObject, con))
                    {
                        scCmd.CommandType = isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text;
                        if(parameters != null)
                        {
                            parameters.ForEach(param =>
                            {
                                scCmd.Parameters.Add(param.ParameterName, param.SqlDbType).Value = param.Value;
                            });
                        }
                        
                        con.Open();
                        SqlDataAdapter adapter = new SqlDataAdapter(scCmd);
                        DataSet ds = new DataSet();
                        adapter.Fill(ds);

                        return ds.Tables;
                    }
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, "MI User", "GetDataTables");
            }

            return null;
        }
        #endregion

        public bool ExecuteBulkUploadPrcedure(string dbObject, List<SqlParameter> parameters = null)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(ConnectionString))
                {
                    using (SqlCommand scCmd = new SqlCommand(dbObject, con))
                    {
                        scCmd.CommandTimeout = (int)TimeSpan.FromSeconds(60).TotalSeconds;
                        scCmd.CommandType = CommandType.StoredProcedure;
                        if (parameters != null)
                        {
                            parameters.ForEach(param =>
                            {
                                scCmd.Parameters.Add(param.ParameterName, param.SqlDbType).Value = param.Value;
                            });
                        }

                        try
                        {
                            con.Open();
                            var response = scCmd.ExecuteScalar();
                            return response != null;
                        }
                        finally
                        {
                            con.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                AddHistoryLog(ex.Message, Constants.MiUser, Constants.ExcecuteBulkUploadProcedure);
            }

            return false;
        }

        #region Add Log Method

        /// <summary>
        /// Adds the history log.
        /// </summary>
        /// <param name="historyLog">The history log.</param>
        public void AddHistoryLog(string message, string userName, string method)
        {
            var parameters = new DynamicParameters();
            parameters.Add("Message", message);
            parameters.Add("UserName", userName);
            parameters.Add("DateCreated", DateTime.Now);
            parameters.Add("Method", method);

            AddItem(QueryStrings.AddHistoryLog, parameters);
        }

        #endregion
    }
}
