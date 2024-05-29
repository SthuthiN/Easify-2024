using Easify.Concerns.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Easify.Contracts.Common
{
    public interface ISPDataProvider
    {
        Task<bool> IsUserInGroup(string email, string groupName);
        Task<List<User>> GetUsers();
    }
}
