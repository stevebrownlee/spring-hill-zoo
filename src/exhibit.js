/* 
  Responsibility:
    Generate the HTML for a single exhibit and return it
*/

import { getAnimals } from "./database.js"



export const Exhibit = (exhibitObject) => {
  const allAnimals = getAnimals()

  let singleExhibitString = `<h2>${exhibitObject.name}</h2>`
  singleExhibitString += "<ul>"
  
  for (const animal of allAnimals) {
    if(animal.exhibitId === exhibitObject.id) {
      singleExhibitString += `<li>${animal.name} the ${animal.species}</li>`
    }
  
  }
  singleExhibitString += "</ul>"
  
  return singleExhibitString
}
