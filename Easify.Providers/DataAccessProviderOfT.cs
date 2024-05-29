using Easify.Concerns.Common;
using Easify.Contracts;
using Easify.Concerns;
using Microsoft.Extensions.Configuration;
using RepoDb;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Easify.Providers
{
    /// <summary>
    /// Class DataAccessProvider.
    /// Implements the <see cref="RepoDb.BaseRepository{T, System.Data.SqlClient.SqlConnection}" />
    /// Implements the <see cref="Easify.Contracts.IDataAccessProvider{T}" />
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <seealso cref="RepoDb.BaseRepository{T, System.Data.SqlClient.SqlConnection}" />
    /// <seealso cref="Easify.Contracts.IDataAccessProvider{T}" />
    public class DataAccessProvider<T> : BaseRepository<T, SqlConnection>, IDataAccessProvider<T> where T : class
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataAccessProvider{T}"/> class.
        /// </summary>
        /// <param name="configuration">The configuration.</param>
        public DataAccessProvider(IConfiguration configuration) : base(configuration.GetConnectionString(Constants.ConnectionStringKey))
        {
        }

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        public IEnumerable<T> GetItems()
        {
            return QueryAll();
        }

        /// <summary>
        /// Inserts the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <returns>T.</returns>
        public T Insert(T item)
        {
            return Insert<T>(item);
        }

        /// <summary>
        /// Updates the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <returns>System.Int32.</returns>
        public int Update(T item)
        {
            return base.Update(item);
        }

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <param name="where">The where.</param>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        public IEnumerable<T> GetItems(object where)
        {
            return Query(where);
        }
    }
}
