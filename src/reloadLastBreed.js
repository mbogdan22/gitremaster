import { getAPI } from "./getApi";
import { renderLastBreed } from "./renderLastBreed";

export function reloadLastBreed() {
  if (localStorage.getItem("breed") && localStorage.getItem("index")) {
    const localStorageBreed = localStorage.getItem("breed");
    const breedParagraphs = document.getElementsByClassName("breed");
    for (const breed of breedParagraphs) {
      if (breed.innerHTML === localStorageBreed) {
        breed.classList.add("breed--selected");
        const name = breed.innerHTML;
        getAPI(`https://dog.ceo/api/breed/${name}/images`, renderLastBreed);
      }
    }
  }
}
