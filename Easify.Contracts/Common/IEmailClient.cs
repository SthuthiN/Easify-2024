using MimeKit;
using System.Collections.Generic;
using System.Net.Mail;

namespace Easify.Contracts
{
    /// <summary>
    /// Interface IEmailClient
    /// </summary>
    public interface IEmailClient
    {
        /// <summary>
        /// Sends the specified email message.
        /// </summary>
        /// <param name="emailMessage">The email message.</param>
        /// <returns><c>true</c> if XXXX, <c>false</c> otherwise.</returns>
        bool Send(MimeMessage emailMessage);
        bool SendSharepoint(MailMessage message, string sender, string[] toUsers, string[] bccUsers,string body);
    }
}
