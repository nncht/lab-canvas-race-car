window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

const ctx = document.getElementById("canvas").getContext("2d");
const roadImg = new Image();
imgScale = 500 / 700;
roadImg.onload = function () {
  ctx.drawImage(roadImg, 0, 0, 500 * imgScale, 700);
};

roadImg.src = "./images/road.png";

const carImg = new Image();
imgScale = 500 / 700;
carImg.onload = function () {
  ctx.drawImage(carImg, 141, 440, 100 * imgScale, 150);
};

carImg.src = "./images/car.png";
