using System;

namespace BetterBearTracks.Models
{
	public class Term
	{
		public uint id { get; set; }
		public string title { get; set; }
		public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
}
