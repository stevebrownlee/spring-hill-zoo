/* 
  Responsibility:
    Iterate all exhibits and generate however many are
    needed with the Exhibit component
*/
import { getExhibits } from "./database.js"
import { Exhibit } from "./exhibit.js"

export const ExhibitList = () => {
  const allExhibits = getExhibits()
  let giantHTMLString = ""

  for (let exhibit of allExhibits) {
    // Use += to build up the giant HTML string
    giantHTMLString += Exhibit(exhibit)
  }

  return giantHTMLString
}

