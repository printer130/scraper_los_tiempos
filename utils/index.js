import cheerio from 'cheerio'

export const cleanText = (text) =>
  text
    .replace(/\t|\n|\s:/g, '')
    .replace(/.*:/g, ' ')
    .trim()

export const scraper = async (url) => {
  const res = await fetch(url)
  const html = await res.text()

  return cheerio.load(html)
}