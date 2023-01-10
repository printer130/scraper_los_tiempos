import { cleanText } from '../utils/index.js'

const selectors = [
  ["title", '.views-field-title', false],
  ["href", ".views-field .field-content > a", "attr"],
  ["src", ".views-field .field-content a img", "attr"]
]
export async function scrapeMainPage($) {
  const $rows = $(".noticia-paywall1")
  const news = []

  $rows.each((i, v) => {
    const result_mapped = selectors.map(([attribute, className, attr]) => {

      const isAttr = typeof attr === "string"
      const haveAttr = $(v).find(className).attr(attribute)
      const str = cleanText($(v).find(className).text())

      return (attribute, isAttr
        ? haveAttr
        : str)
    })
    news.push(result_mapped)
  })

  return news
} 
