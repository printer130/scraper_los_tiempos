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
  const $ = await scraper(pageURL)
  const data = await fn($)
  console.log(data)
  console.log('Scraping to: ', pageURL)
  await saveScrapedToFile(data, "main_page")
  console.log("[DONE :D!]")
}