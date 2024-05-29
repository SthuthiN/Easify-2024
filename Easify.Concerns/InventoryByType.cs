namespace Easify.Concerns
{
    public class InventoryByType
    {
        public string GeoId { get; set; }
        public int CityId { get; set; }
        public string City { get; set; }
        public int CountryId { get; set; }
        public string Country { get; set; }
        public int StateId { get; set; }
        public string State { get; set; }
        public int RegionId { get; set; }
        public string? Region { get; set; }
        public int BusinessRegionId { get; set; }
        public string BusinessRegion { get; set; }  
        public string MarketId { get; set; }
        public string? Market { get; set; }
        public string SiteCode { get; set; }
        public string Property { get; set; }
        public double VacantScale { get; set; }
        public double VacantColo { get; set; }
        public double ExpiringLease { get; set; }
        public double GrandTotal { get; set; }
        public double ScaleUnderConstruction { get; set; }
        public double ColoUnderConstruction { get; set; }
        public double AvailableShell { get; set; }
        public double LandBank { get; set; }
    }
}
