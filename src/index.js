import { getAPI } from "./getApi";
import { renderBreeds } from "./renderBreeds";
import { imgArray } from "./renderFirstImg";
import { breedImg, pgNum } from "./renderLastBreed";

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

window.addEventListener("load", () => {
  getAPI("https://dog.ceo/api/breeds/list/all", renderBreeds);
});

document.getElementById("forward").addEventListener("click", increasePgImgNum);
document.getElementById("backward").addEventListener("click", decreasePgImgNum);

function increasePgImgNum() {
  pgNum.innerHTML++;
  if (pgNum.innerHTML > imgArray.length) {
    pgNum.innerHTML = imgArray.length;
    return;
  } else {
    breedImg.src = imgArray[pgNum.innerHTML - 1];
    localStorage["index"] = pgNum.innerHTML - 1;
  }
}

function decreasePgImgNum() {
  pgNum.innerHTML--;
  if (pgNum.innerHTML <= 0) {
    pgNum.innerHTML = 1;
    return;
  } else {
    breedImg.src = imgArray[pgNum.innerHTML - 1];
    localStorage["index"] = pgNum.innerHTML - 1;
  }
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("breed");
  localStorage.removeItem("index");
  window.location = "/";
});
