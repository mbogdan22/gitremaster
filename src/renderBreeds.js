import { getBreedImages } from "./getBreedImg";
import { reloadLastBreed } from "./reloadLastBreed";
import { pgNum } from "./renderLastBreed";
import { underlineCurrentBreed } from "./underlineCurrent";

export function renderBreeds(response) {
  const breedList = response.message;
  for (const breed in breedList) {
    const breedName = document.createElement("p");
    breedName.classList.add("breed");
    const breedsDiv = document.getElementById("breeds");
    breedsDiv.appendChild(breedName);
    breedName.innerHTML = breed;

    breedName.addEventListener("click", () => {
      pgNum.innerHTML = 1;
      underlineCurrentBreed(breedName);
      getBreedImages(breedName.innerHTML);
      localStorage.setItem("breed", breedName.innerHTML);
      localStorage.setItem("index", pgNum.innerHTML - 1);
    });
  }
  if (window.location.reload) {
    reloadLastBreed();
  }
}
