import { scraper } from "../utils/index.js";
import { saveScrapedToFile } from "./save_scraped_to_file.js";
import { scrapeMainPage } from "./scrape_main_page.js";

const pages_targeted = [
  {
    pageURL: "https://www.lostiempos.com/",
    fn: scrapeMainPage
  }
]

for (const { pageURL, fn } of pages_targeted) {
  console.log('Initialize scraper!')
  const $ = await scraper(pageURL)
  console.log('Scraping to: ', pageURL)
  const data = await fn($)
  await saveScrapedToFile(data, "main_page")
  console.log("[DONE :D!]")
}