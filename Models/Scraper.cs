using System;
using System.Collections;
using System.DirectoryServices;
using System.Data.SQLite;
using System.IO;

namespace BetterBearTracks.Models {

	public class Database
	{
		public SQLiteConnection database;

		public Database()
		{
			SQLiteConnection.CreateFile("Beartracks.sqlite");
			database = new SQLiteConnection("Data Source=Beartracks.sqlite; Version=3;");
			database.Open();
		}

		public void bootstrap()
		{
			string tableScript = File.ReadAllText("./Models/createDatabase.sql");
			SQLiteCommand command = new SQLiteCommand(tableScript, database);
			command.ExecuteNonQuery();
		}
	}

	public class Scraper
	{
		private Database db;
		private DirectoryEntry ldapConnection;
		private DirectorySearcher searcher; 
		public Scraper()
		{
			db = new Database();
			db.bootstrap();
			ldapConnection = new DirectoryEntry("LDAP://directory.srv.ualberta.ca/term=1660,ou=calendar,dc=ualberta,dc=ca");
			ldapConnection.AuthenticationType = AuthenticationTypes.Anonymous;
		}

		public void ScrapeClasses()
		{
			ldapConnection.Path = "LDAP://directory.srv.ualberta.ca/ou=calendar,dc=ualberta,dc=ca";
			searcher = new DirectorySearcher(ldapConnection)
			{
				PageSize = 200,
				SearchScope = SearchScope.Subtree,
				Filter = "(objectClass = uOfAClass)",
			};

			var results = searcher.FindAll();
			if (results == null)
			{
				Console.WriteLine("result == null");
				return;
			}
			foreach (SearchResult result in results)
			{
				if (result.Properties.Contains("asString"))
				{
					Console.WriteLine(result.Properties["asString"][0].ToString());
				}
			}
		}

		public void ScrapeCourses()
		{
			ldapConnection.Path = "LDAP://directory.srv.ualberta.ca/ou=calendar,dc=ualberta,dc=ca";
			searcher = new DirectorySearcher(ldapConnection)
			{
				PageSize = 200,
				SearchScope = SearchScope.Subtree,
				Filter = "(objectClass=uOfACourse)",
			};

			var results = searcher.FindAll();
			if (results == null)
			{
				Console.WriteLine("result == null");
				return;
			}
			foreach (SearchResult result in results)
			{
				if (result.Properties.Contains("course"))
				{
					int course = Int32.Parse(result.Properties["course"][0].ToString());
					int term = Int32.Parse(result.Properties["term"][0].ToString());
					string sql = "INSERT INTO Course (courseSubject, courseCatalog, courseTitle, course, term) VALUES ('" + result.Properties["subject"][0].ToString() +
						"', '" + result.Properties["catalog"][0].ToString() + "', '" + result.Properties["courseTitle"][0].ToString() + "', " + course + ", " + term + ");";
					SQLiteCommand command = new SQLiteCommand(sql, db.database);
					command.ExecuteNonQuery();
				}
			}
		}

		public void ScrapeTerms()
		{
			ldapConnection.Path = "LDAP://directory.srv.ualberta.ca/ou=calendar,dc=ualberta,dc=ca";
			searcher = new DirectorySearcher(ldapConnection)
			{
				PageSize = 200,
				SearchScope = SearchScope.OneLevel,
				Filter = "(objectClass=uOfATerm)",
			};

			var results = searcher.FindAll();
			if (results == null)
			{
				Console.WriteLine("result == null");
				return;
			}
			foreach (SearchResult result in results)
			{
				if (result.Properties.Contains("term"))
				{
					int termID = Int32.Parse(result.Properties["term"][0].ToString());
					string sql = "INSERT INTO Term (termID, termTitle, startDate, endDate) VALUES (" + termID  +
						", '" + result.Properties["termTitle"][0].ToString() + "', '" +  result.Properties["startDate"][0].ToString() + "', '" +
						result.Properties["endDate"][0].ToString() + "');";
					SQLiteCommand command = new SQLiteCommand(sql, db.database);
					command.ExecuteNonQuery();
				}
			}
		}
	}
}