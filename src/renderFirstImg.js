import { breedImg } from "./renderLastBreed";

export let imgArray;

export function renderFirstImageOfBreed(response) {
  imgArray = response.message;
  breedImg.src = imgArray[0];
}
