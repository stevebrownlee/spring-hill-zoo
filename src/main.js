import { Header } from "./header.js";
import { Concessions } from "./concessions.js";
import "./styles.css";
import { ExhibitList } from "./exhibit_list.js";

/* 
  Goals of project:
    1. Header for each exhibit of the zoo
    2. Under header list all animals in that exhibit
    3. As an aside on the right, list all concessions
    4. Main header at top with "Welcome to Spring Hill Zoo"
*/


/* 
  Module Responsibility:
    1. Update the DOM with *all* of the HTML
    2. Defer creation of specific sections to other modules
*/

const container = document.querySelector("#container")

container.innerHTML = `
  ${Header()}
  ${ExhibitList()}
  ${Concessions()}
`
