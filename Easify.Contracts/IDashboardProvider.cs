using Easify.Concerns;

namespace Easify.Contracts
{
    /// <summary>
    /// Interface IDashboardProvider
    /// </summary>
    public interface IDashboardProvider
    {
        /// <summary>
        /// Gets the user context.
        /// </summary>
        /// <returns>Easify.Concerns.ClientUserContext.</returns>
        IUserContext GetUserContext();
    }
}
