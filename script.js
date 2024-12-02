const canvas = document.getElementById('glass');
const ctx = canvas.getContext('2d');

prepareGlass();

function prepareGlass() {
  canvas.height = innerHeight * 0.9;
  canvas.width = canvas.height / 2;
}