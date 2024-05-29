using System;
using System.Security;

namespace Easify.Providers
{
    /// <summary>
    /// Class Utility.
    /// </summary>
    public class Utility
    {
        /// <summary>
        /// Builds the password.
        /// </summary>
        /// <param name="pswd">The PSWD.</param>
        /// <returns>SecureString.</returns>
        public static SecureString BuildPassword(string password)
        {
            var passWord = new SecureString();
            foreach (char c in password.ToCharArray()) passWord.AppendChar(c);
            return passWord;
        }

        public static double ConvertValueFromKwToMw(double value)
        {
            return (value / 1000);
        }
        public static double ConvertValueFromSqftToSqm(double value)
        {
            return (value / 10.764);
        }
        public static double GetRoundValueToTwoDecimal(double value)
        {
            return Math.Round(value, 2);
        }
    }
}
