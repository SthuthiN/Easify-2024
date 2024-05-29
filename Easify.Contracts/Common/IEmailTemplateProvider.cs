using Easify.Concerns.Common;

namespace Easify.Contracts.Common
{
    /// <summary>
    /// Interface IEmailTemplateProvider
    /// </summary>
    public interface IEmailTemplateProvider
    {
        /// <summary>
        /// Gets the email template.
        /// </summary>
        /// <param name="template">The template.</param>
        /// <returns>EmailTemplate.</returns>
        EmailTemplate GetEmailTemplate(TemplateFor template);
    }
}
