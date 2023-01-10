import { cleanText } from '../utils/index.js'
const selectors = [
  ['.views-field-title', false],
  ['.field-content > a', 'href'],
  ['.field-content a img', "src"],
  ['.date-display-single', false],
  ['.views-field-seccion', false]
]

export async function scrapeMainPage($) {
  const $rows = $(".noticia-paywall1")
  const news = []

  $rows.each((i, v) => {
    const result_mapped = selectors.map(([className, attr]) => {
      return attr
        ? $(v).find(className).attr(attr)
        : cleanText($(v).find(className).text())
    })
    news.push(result_mapped)
  })

  return news
} 
