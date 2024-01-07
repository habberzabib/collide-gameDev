let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerX = 0;
let playerY = 0;
let playerWidth = 20;
let playerHeight = 20;

let wallX = 200;
let wallY = 150;
let wallWidth = 30;
let wallHeight = 100;

let player = {
  x: playerX,
  y: playerY,
  width: playerWidth,
  height: playerHeight,
  color: "blue",
};

let wall = {
  x: wallX,
  y: wallY,
  width: wallWidth,
  height: wallHeight,
  color: "grey",
};

function drawRect(rect) {
  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function isColliding(player, wall) {
  return (
    player.x < wall.x + wall.width &&
    player.x + player.width > wall.x &&
    player.y < wall.y + wall.height &&
    player.y + player.height > wall.y
  );
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setPlayerPosition(x, y) {
  player.x = x;
  player.y = y;
}

let playerSpeed = 10;

// Initial draw
drawRect(player);
drawRect(wall);

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    playerX -= playerSpeed;
  } else if (event.key === "d") {
    playerX += playerSpeed;
  } else if (event.key === "w") {
    playerY -= playerSpeed;
  } else if (event.key === "s") {
    playerY += playerSpeed;
  }

  // Update player position
  setPlayerPosition(playerX, playerY);

  // Check collision with the wall
  if (isColliding(player, wall)) {
    // Reset player position
    setPlayerPosition(0, 0);
    playerX = 0;
    playerY = 0;
  }

  // Clear canvas
  clearCanvas();

  // Draw player and wall
  drawRect(player);
  drawRect(wall);
});
