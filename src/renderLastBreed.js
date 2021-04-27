import { imgArray } from "./renderFirstImg";

export const breedImg = document.getElementById("breed-image");

export const pgNum = document.getElementById("page-number");

export function renderLastBreed(response) {
  imgArray = response.message;
  const index = localStorage.getItem("index");
  breedImg.src = imgArray[index];
  const number = parseInt(index) + 1;
  pgNum.innerHTML = number;
}
