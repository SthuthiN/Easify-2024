using Easify.Concerns.Common;
using Easify.Contracts;
using Easify.Contracts.Common;
using Microsoft.Extensions.Logging;
using System;

namespace Easify.Providers.Common
{
    /// <summary>
    /// Class EmailTemplateProvider.
    /// Implements the <see cref="Easify.Contracts.Common.IEmailTemplateProvider" />
    /// </summary>
    /// <seealso cref="Easify.Contracts.Common.IEmailTemplateProvider" />
    public class EmailTemplateProvider : IEmailTemplateProvider
    {
        private readonly IDataAccessProvider _DataAccessProvider;

        private readonly ILogger<EmailTemplateProvider> _Logger;
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailTemplateProvider"/> class.
        /// </summary>
        /// <param name="dataAccessProvider">The data access provider.</param>
        public EmailTemplateProvider(IDataAccessProvider dataAccessProvider, ILogger<EmailTemplateProvider> logger)
        {
            this._DataAccessProvider = dataAccessProvider;
            this._Logger = logger;
        }

        /// <summary>
        /// Gets the email template.
        /// </summary>
        /// <param name="template">The template.</param>
        /// <returns>EmailTemplate.</returns>
        public EmailTemplate GetEmailTemplate(TemplateFor template)
        {
            var emailTempate = new EmailTemplate();
            try
            {
                //var parameters = new { Template = template };
                //emailTempate = this._DataAccessProvider.GetItem<EmailTemplate>(Constants.Queries.GetEMailTemplate, parameters);
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
            }

            return emailTempate;
        }
    }
}
