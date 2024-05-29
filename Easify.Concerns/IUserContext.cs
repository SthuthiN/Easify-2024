using Easify.Concerns.Common;

namespace Easify.Concerns
{
    /// <summary>
    /// Class IUserContext.
    /// </summary>
    public class IUserContext : Audit
    {
        public int Id { get; set; }
        public int EmployeeID { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        /// <value>The name.</value>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the email.
        /// </summary>
        /// <value>The email.</value>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the region.
        /// </summary>
        /// <value>The region.</value>
        public string Region { get; set; }

        /// <summary>
        /// Gets or sets the job level.
        /// </summary>
        /// <value>The job level.</value>
        public int JobLevel { get; set; }

        /// <summary>
        /// Gets or sets the type of the user.
        /// </summary>
        /// <value>The type of the user.</value>
        public string UserType { get; set; }

        /// <summary>
        /// Gets or sets the role.
        /// </summary>
        /// <value>The role.</value>
        public string Role { get; set; }

        /// <summary>
        /// Access Role for application
        /// </summary>
        public int RoleId { get; set; }

        public bool IsAdmin { get; set; }
        public bool IsReviewer { get;set; }
        public bool IsActive { get; set; }
        public bool hasAccess { get; set; }
        public bool IsCacheExists { get; set; }
        public int DefaultRegionId { get; set; }
        public int DefaultTabId { get; set; }
        public bool IsDLR { get; set; }
        public string DefaultSection { get; set; }

    }

    /// <summary>
    /// Class UserContext.
    /// Implements the <see cref="Easify.Concerns.IUserContext" />
    /// </summary>
    /// <seealso cref="Easify.Concerns.IUserContext" />
    public class UserContext : IUserContext
    {

    }
}
