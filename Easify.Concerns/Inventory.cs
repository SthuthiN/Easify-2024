namespace Easify.Concerns
{
    public class Inventory
    {
        public string GeographicalId { get; set; }
        public int? RegionId { get; set; }
        public string Region { get; set; }
        public int? BusinessRegionId { get; set; }
        public string BusinessRegion { get; set; }
        public int? CountryId { get; set; }
        public string Country { get; set; }
        public int? StateId { get; set; }
        public string State { get; set; }
        public int? CityId { get; set; }
        public string City { get; set; }
        public string Market { get; set; }
        public bool Internal { get; set; }
        public string MarketId { get; set; }
        public double? TotalPower { get; set; }
        public double? TotalPowerAvailable { get; set; }
        public double? AvailableSpace { get; set; }
        public double? TotalRsf { get; set; }
        public double? AvailableQoq {  get; set; }
        public double? AvaialableQoqPercentage {  get; set; }
        public double? TotalQoq { get; set; }
        public double? TotalQoqpercentage { get; set; }
        public double? GreaterThanOneMW { get; set; }
        public double? LessThanOneMW { get; set; }
        public double? LessThanOneMWQoq { get; set; }
        public double? MoreThanOneMWQoq { get; set; }
        public double? LessThanOneMWQoqPercentage { get; set; }
        public double? MoreThanOneMWQoqPercentage { get; set; }
    }
}
