using System.Collections.Generic;

namespace Easify.Concerns.Common
{
    /// <summary>
    /// Class EmailTemplate.
    /// </summary>
    public class EmailTemplate
    {
        /// <summary>
        /// Gets or sets the template.
        /// </summary>
        /// <value>The template.</value>
        public string Template { get; set; }
        /// <summary>
        /// Gets or sets the subject.
        /// </summary>
        /// <value>The subject.</value>
        public string Subject { get; set; }
        /// <summary>
        /// Gets or sets the body.
        /// </summary>
        /// <value>The body.</value>
        public string Body { get; set; }
        /// <summary>
        /// Gets or sets from title.
        /// </summary>
        /// <value>From title.</value>
        public string FromTitle { get; set; }
        /// <summary>
        /// Converts to emails.
        /// </summary>
        /// <value>To emails.</value>
        public List<string> ToEmails { get; set; }
        /// <summary>
        /// Gets or sets the cc emails.
        /// </summary>
        /// <value>The cc emails.</value>
        public List<string> CCEmails { get; set; }
    }
}
