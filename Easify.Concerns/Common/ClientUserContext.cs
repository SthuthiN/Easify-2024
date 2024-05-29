namespace Easify.Concerns
{
    /// <summary>
    /// Class ClientUserContext.
    /// </summary>
    public class ClientUserContext
    {
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
        /// Gets or sets a value indicating whether this instance is approver.
        /// </summary>
        /// <value><c>true</c> if this instance is approver; otherwise, <c>false</c>.</value>
        public bool IsApprover { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is admin.
        /// </summary>
        /// <value><c>true</c> if this instance is admin; otherwise, <c>false</c>.</value>
        public bool IsAdmin { get; set; }
    }
}
