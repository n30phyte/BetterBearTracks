using System;


namespace BetterBearTracks.Models
{
	public class CourseClass {
		public string component { get; set; }
		public string section { get; set; }
		public string location { get; set; }
		public string day { get; set; }
		public DateTime startTime { get; set; }
		public DateTime endTime { get; set; }
		public int classID { get; set; }
		public int courseID { get; set; }
		public int term { get; set; }
		public int capacity { get; set; }
		public char classStatus { get; set; }
		public char enrollStatus { get; set; } 
		public DateTime startDate { get; set; }
		public DateTime endDate { get; set; }
		public DateTime examDate { get; set; }
		public DateTime examTime { get; set; }
		public string examLocation { get; set; }
		public string examStatus { get; set; }
		public string campus { get; set; }
		public string classNotes { get; set; }
		public string classType { get; set; }
		public string consent { get; set; }
		public string gradingBasis { get; set; }
		public string instructionMode { get; set; }
		public string instructorID { get; set; }
		public string session { get; set; }
		public float units { get; set; }
	}
}
