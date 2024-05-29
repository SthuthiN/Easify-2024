namespace Easify.Concerns
{
    public class RegionWisePowermetrics
    {
        public int RegionId { get; set; }
        public double? TotalPower { get; set; }
        public double? TotalPowerAvailable { get; set; }
        public double? DLRTotalPower { get; set; }
        public double? DLRPowerAvailable { get; set; }
        public double? DLRAvailableSpace { get; set; }
        public double? DLRTotalRsf { get; set; }
        public double? GreaterThanOneMW { get; set; }
        public double? LessThanOneMW { get; set; }
        public double? TotalInventoryQoq { get; set; }
        public double? TotalInventoryPercentage { get; set; }
        public double? TotalSpaceQoq { get; set; }
        public double? TotalSpacePercentage { get; set; }
        public double? VacantSpaceQoq { get; set; }
        public double? VacantSpacePercentage { get; set; }
        public double? VacantInventoryQoq { get; set; }
        public double? VacantInventoryPercentage { get; set; }
        public double? LivePower { get; set; }
        public double? UnderConstructionPower { get; set; }
    }
}
