namespace BetterBearTracks.Models {

	public class Scraper {
		private DirectoryEntry dirEntry;
		private DirectorySearcher dirSearch;

		public Scraper() {
			dirEntry = new DirectoryEntry("ldap://directory.srv.ualberta.ca");
			dirSearch = new DirectorySearcher(dirEntry)
			{
				pageSize = 
			}
		}
	}
}
