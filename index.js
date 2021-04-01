console.log("Spaceship homework");

const shipsArray = ["blue-spaceship.png", "green-spaceship.png", "red-spaceship.png"];
let ship;

let count = 0;

let upButton = false;
let downButton = false;
let leftButton = false;
let rightButton = false;
class Ship {
    constructor() {
        this.width = 60;
        this.height = 60;
        this.x = 0;
        this.y = 0;
    }

    generateRef() {
        let randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];
        this.ref = document.createElement("img");
        this.ref.src = randomShip;
        this.ref.style.width = `${this.width}px`;
        this.ref.style.height = `${this.height}px`;
        this.ref.style.display = "block"

        document.querySelector("body").appendChild(this.ref);
        
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveUp() {
        this.move(this.x, this.y - 1);
    }

    moveDown() {
        this.move(this.x, this.y +1);
    }

    moveLeft() {
        this.move(this.x -1, this.y);
    }

    moveRight() {
        this.move(this.x +1, this.y)
    }
}

document.getElementById("ship-generator").addEventListener("click", () => {
    ship = new Ship;
    ship.generateRef();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      upButton = true;
    }
  
    if (event.key === "ArrowDown") {
      downButton = true;
    }
    if (event.key === "ArrowLeft") {
      leftButton = true;
    }
  
    if (event.key === "ArrowRight") {
      rightButton = true;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
      upButton = false;
    }
  
    if (event.key === "ArrowDown") {
      downButton = false;
    }
    if (event.key === "ArrowLeft") {
      leftButton = false;
    }
  
    if (event.key === "ArrowRight") {
      rightButton = false;
    }
  });

  let gameLoop = setInterval(() => {
    if (upButton) ship.moveUp();
    if (downButton) ship.moveDown();
    if (leftButton) ship.moveLeft();
    if (rightButton) ship.moveRight();

    count++;
},10)
