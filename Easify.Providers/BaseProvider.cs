using Easify.Contracts;

namespace Easify.Providers
{
    /// <summary>
    /// Class BaseProvider.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseProvider<T> where T: class
    {
        protected IDataAccessProvider<T> DataAccessProvider { get; private set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseProvider{T}"/> class.
        /// </summary>
        /// <param name="dataAccessProvider">The data access provider.</param>
        public BaseProvider(IDataAccessProvider<T> dataAccessProvider)
        {
            this.DataAccessProvider = dataAccessProvider;
        }

    }

    /// <summary>
    /// Class BaseProvider.
    /// </summary>
    public class BaseProvider
    {
        protected IDataAccessProvider DataAccessProvider { get; private set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BaseProvider"/> class.
        /// </summary>
        /// <param name="dataAccessProvider">The data access provider.</param>
        public BaseProvider(IDataAccessProvider dataAccessProvider)
        {
            this.DataAccessProvider = dataAccessProvider;
        }

    }
}
