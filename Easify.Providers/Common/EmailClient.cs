using Easify.Concerns.Common;
using Easify.Contracts;
using Easify.Contracts.Common;
using Microsoft.Extensions.Logging;
using Microsoft.ProjectServer.Client;
using Microsoft.SharePoint.Client;
using MimeKit;
using System;
using System.Net.Mail;
using SPUtilities = Microsoft.SharePoint.Client.Utilities;

namespace Easify.Providers
{
    /// <summary>
    /// Class EmailClient.
    /// Implements the <see cref="Easify.Contracts.IEmailClient" />
    /// </summary>
    /// <seealso cref="Easify.Contracts.IEmailClient" />
    public class EmailClient : IEmailClient
    {
        private readonly IConfigurationProvider configurationProvider;

        private readonly ILogger<EmailClient> _Logger;
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailClient"/> class.
        /// </summary>
        /// <param name="configurationProvider">The configuration provider.</param>
        public EmailClient(IConfigurationProvider configurationProvider, ILogger<EmailClient> logger)
        {
            this.configurationProvider = configurationProvider;
            this._Logger = logger;
        }

        /// <summary>
        /// Sends the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <returns><c>true</c> if XXXX, <c>false</c> otherwise.</returns>
        public bool Send(MimeMessage message)
        {
            try
            {
                
                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                    client.Connect(this.configurationProvider.Host, this.configurationProvider.Port, false);
                    client.Send(message);

                    client.Disconnect(true);
                    return true;
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return false;
            }
        }

        public bool SendSharepoint(MailMessage message, string sender, string[] toUsers, string[] bccUsers, string body)
        {
            try
            {
                using (ClientContext client = new ClientContext(Constants.RootSite))
                {
                    client.Credentials = new SharePointOnlineCredentials(this.configurationProvider.UserName, this.configurationProvider.Password);
                    var emailProperties = new SPUtilities.EmailProperties()
                    {
                        To = toUsers,
                        BCC = bccUsers,
                        Body = body,
                        Subject = message.Subject,
                        From = message.From.ToString()
                        
                    };
                    SPUtilities.Utility.SendEmail(client, emailProperties);
                    client.ExecuteQueryAsync();

                    return true;
                }
            }
            catch (Exception ex)
            {
                _Logger.LogError(1, ex, ex.Message);
                return false;
            }
        }
    }
}
