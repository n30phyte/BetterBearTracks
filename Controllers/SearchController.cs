using System;
using System.Collections.Generic;
using BetterBearTracks.Models;
using Microsoft.AspNetCore.Mvc;

namespace BetterBearTracks.Controllers
{
    public class SearchController : Controller
    {
        [HttpGet("{text}")]
        public ActionResult<IEnumerable<Course>> Courses(string text)
        {
            var output = new List<Course>();

            // CONNECT TO DB
            // SEARCH FOR CLASS

            output.Add(new Course
            {
                facultyCode = "ECE"
            });
    
            Console.WriteLine("Course Search called");
            
            return output;
        }
    }
}