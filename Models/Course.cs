using System;

namespace BetterBearTracks.Models {
    public class Course {
		public string subject { get; set; }
		public int catalog { get; set; }
		public string title { get; set; }
		public string asString { get; set; }
		public int term { get; set; }
		public string courseDescription { get; set; }
		public string career { get; set; }
		public string department { get; set; }
		public string departmentCode { get; set; }
		public string faculty { get; set; }
		public string facultyCode { get; set; }
		public string subjectTitle { get; set; }
		public float units { get; set; }
	}
}

