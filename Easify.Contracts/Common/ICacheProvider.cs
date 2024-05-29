using Easify.Concerns.Common;
using System.Threading.Tasks;

namespace Easify.Contracts.Common
{
    public interface ICacheProvider
    {
        OperationStatus SaveData(string key,string data);
        Task<string> GetData(string key);
        bool IsKeyExist(string key);
    }
}
