using Easify.Concerns.Common;

namespace Easify.Concerns.Configurations
{
    public class IUserSettings : Audit
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Theme { get; set; }
    }
}

