using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Easify.Contracts
{
    /// <summary>
    /// Interface IDataAccessProvider
    /// </summary>
    public interface IDataAccessProvider
    {
        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        IEnumerable<T> GetItems<T>() where T : class;

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="parameters">The parameters.</param>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        /// 
        IEnumerable<T> GetItems<T>(string query, object parameters,bool isStoredProcedure=false) where T : class;
        Task<IEnumerable<T>> GetItemsAsync<T>(string query, object parameters, bool isStoredProcedure = false) where T : class;
        /// <summary>
        /// Adds the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <returns>System.Int32.</returns>
        int AddItem(string query, object item);

        /// <summary>
        /// Gets the item.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="obj">The object.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>T.</returns>
        T GetItem<T>(string query, object obj, bool isStoredProcedure = false);

        /// <summary>
        /// Updates the item.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>System.Int32.</returns>
        int UpdateItem(string query, object item, bool isStoredProcedure = false);

        /// <summary>
        /// Executes the specified database object.
        /// </summary>
        /// <param name="dbObject">The database object.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>System.Int32.</returns>
        int Execute(string dbObject, object item, bool isStoredProcedure = false);

        /// <summary>
        /// Queries the multiples.
        /// </summary>
        /// <param name="queries">The queries.</param>
        /// <param name="parameters">The parameters.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <param name="readerFuncs">The reader funcs.</param>
        /// <returns>List&lt;System.Object&gt;.</returns>
        List<object> QueryMultiples(string queries, object parameters = null, bool isStoredProcedure = false, params Func<dynamic, object>[] readerFuncs);

        /// <summary>
        /// Executes the scalar.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="query">The query.</param>
        /// <param name="item">The item.</param>
        /// <param name="isStoredProcedure">if set to <c>true</c> [is stored procedure].</param>
        /// <returns>T.</returns>
        T ExecuteScalar<T>(string query, object item, bool isStoredProcedure = false);
    }
}
