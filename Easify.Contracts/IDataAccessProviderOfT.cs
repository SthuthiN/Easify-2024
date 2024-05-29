using System.Collections.Generic;

namespace Easify.Contracts
{
    public interface IDataAccessProvider<T> where T : class
    {
        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        IEnumerable<T> GetItems();

        /// <summary>
        /// Gets the items.
        /// </summary>
        /// <param name="where">The where.</param>
        /// <returns>IEnumerable&lt;T&gt;.</returns>
        IEnumerable<T> GetItems(object where);

        /// <summary>
        /// Inserts the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <returns>T.</returns>
        T Insert(T item);

        /// <summary>
        /// Updates the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <returns>System.Int32.</returns>
        int Update(T item);
    }
}
