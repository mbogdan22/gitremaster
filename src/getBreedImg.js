import { getAPI } from "./getApi";
import { renderFirstImageOfBreed } from "./renderFirstImg";

export function getBreedImages(chosenBreed) {
  getAPI(
    `https://dog.ceo/api/breed/${chosenBreed}/images`,
    renderFirstImageOfBreed
  );
}
