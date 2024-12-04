const canvas = document.getElementById('glass');
const ctx = canvas.getContext('2d');
let blockSize = 20;

prepareGlass();

function prepareGlass() {
  canvas.height = innerHeight * 0.9;
  canvas.width = canvas.height / 2;
  blockSize = canvas.width / 10;
}


// Малюю фігури
const shapes = {
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  J:[
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
}

function drawShape(x, y, shapes, color) {
  ctx.fillStyle = color;
  for (let i = 0; i < shapes.length; i++) {
    for (let j = 0; j < shapes.length; j++) {
      if (shapes[i][j] === 0) continue;
      ctx.fillRect(x + j * blockSize, y + i * blockSize, blockSize, blockSize);
      // ctx.strokeRect(x + j * blockSize, y + i * blockSize, blockSize, blockSize);
    }
  }
}

drawShape(blockSize * 2, blockSize * 2, shapes.T, 'red');
drawShape(blockSize * 5, blockSize * 18, shapes.I, 'green');