console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

const pgNum = document.getElementById("page-number");
const breedImg = document.getElementById("breed-image");
let imgArray;

window.addEventListener("load", () => {
  getAPI("https://dog.ceo/api/breeds/list/all", renderBreeds);
});

function getAPI(url, callback) {
  fetch(url)
    .then((r) => r.json())
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}

function renderBreeds(response) {
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

function underlineCurrentBreed(currentBreed) {
  const breedParagraphs = document.getElementsByClassName("breed");
  for (const breed of breedParagraphs) {
    breed.classList.remove("breed--selected");
  }
  currentBreed.classList.add("breed--selected");
}

function getBreedImages(chosenBreed) {
  getAPI(
    `https://dog.ceo/api/breed/${chosenBreed}/images`,
    renderFirstImageOfBreed
  );
}

function renderFirstImageOfBreed(response) {
  imgArray = response.message;
  breedImg.src = imgArray[0];
}

function reloadLastBreed() {
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

function renderLastBreed(response) {
  imgArray = response.message;
  const index = localStorage.getItem("index");
  breedImg.src = imgArray[index];
  const number = parseInt(index) + 1;
  pgNum.innerHTML = number;
}

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
