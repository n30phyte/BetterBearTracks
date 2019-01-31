using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BetterBearTracks.Models;
using System.DirectoryServices;

namespace BetterBearTracks.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
			Scraper target = new Scraper();
			target.ScrapeTerms();
			target.ScrapeCourses();

			return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
