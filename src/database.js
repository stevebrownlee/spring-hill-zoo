/* 
  Module Responsibility: 
    Contain the data for the application and expose
    it via getter functions.
*/

const database = {
  animals: [
    {
      id: 1,
      name: "Phil",
      species: "Snake",
      food: "Popcorn",
      exhibitId: 1
    },
    {
      id: 2,
      name: "Josephine",
      species: "African Elephant",
      food: "Funnel Cakes",
      exhibitId: 3
    },
    {
      id: 3,
      name: "Larry",
      species: "Lion",
      food: "Candy Corn",
      exhibitId: 2
    },
  ],
  exhibits: [
    {
      id: 1,
      name: "Reptile Excursion",
      indoor: true
    },
    {
      id: 2,
      name: "Big Cats of the World",
      indoor: false
    },
    {
      id: 3,
      name: "Just Elephants",
      indoor: false
    }
  ],
  concessions: [
    {
      id: 1,
      name: "Just Dippin' Dots",
      food: "Dippin Dots"
    },
    {
      id: 2,
      name: "A Little Bit Chowder Now",
      food: "Clam Chowder"
    }
  ]
}

export const getConcessions = () => {
  const copyOfConcessions = database.concessions.map(concession => ({...concession}))
  return copyOfConcessions
}

export const getExhibits = () => {
  const copyOfExhibits = database.exhibits.map(exhibit => ({...exhibit}))
  return copyOfExhibits
}


export const getAnimals = () => {
  const copyOfAnimals = database.animals.map(animal => ({...animal}))
  return copyOfAnimals
}

