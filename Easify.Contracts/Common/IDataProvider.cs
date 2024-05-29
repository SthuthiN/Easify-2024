using Easify.Concerns.Common;
using System.Collections.Generic;
using Dapper;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Easify.Contracts.Common
{
    /// <summary>
    /// This is an interface to access Data Provider Class.
    /// </summary>
    public interface IDataProvider
    {
        List<T> GetItems<T>(string query);

        /// <summary>
        /// Gets the item.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
        T GetItem<T>(string query, object obj, bool isStoredProcedure = false);

        /// <summary>
        /// Adds the record.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns></returns>
        int AddRecord(string query, object item);

        /// <summary>
        /// Adds the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns></returns>
        int AddItem(string query, object item);

        /// <summary>
        /// Gets all items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="tableName">Name of the table.</param>
        /// <returns></returns>
        List<T> GetAllItems<T>(string tableName);

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        List<T> GetItems<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false);

        /// <summary>
        /// Gets the item by identifier.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        T GetItemByID<T>(string query, DynamicParameters parameters, bool isStoredProcedure = false);

        /// <summary>
        /// Updates the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns></returns>
        int UpdateItem(string query, object item, bool isStoredProcedure = false);

        /// <summary>
        /// Executes the DB Object, instead of sending the query
        /// </summary>
        /// <param name="dbObject"></param>
        /// <param name="item"></param>
        /// <param name="isStoredProcedure"></param>
        /// <returns></returns>
        int Execute(string dbObject, object item, bool isStoredProcedure = false);

        void AddHistoryLog(string message, string userName, string method);

        bool ExecuteBulkUploadPrcedure(string dbObject, List<SqlParameter> parameters = null);

        /// <summary>
        /// Gets the data tables.
        /// </summary>
        /// <param name="dbObject">The database object.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns></returns>
        DataTableCollection ExecutePrcedure(string dbObject, List<SqlParameter> parameters = null, bool isStoredProcedure = false);
    }
}
