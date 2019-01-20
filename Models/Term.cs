using System;

namespace BetterBearTracks.Models
{
    public class Term
    {
        public uint ID { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}