export function underlineCurrentBreed(currentBreed) {
  const breedParagraphs = document.getElementsByClassName("breed");
  for (const breed of breedParagraphs) {
    breed.classList.remove("breed--selected");
  }
  currentBreed.classList.add("breed--selected");
}
