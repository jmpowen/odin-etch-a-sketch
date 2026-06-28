const RESET_BTN = document.querySelector('.reset-btn');

let x = 16;
let y = 16;

RESET_BTN.addEventListener('click', () => {
  do {
    x = prompt("What length horizontally should the grid be?");
  } while (!Number.isInteger(Number(x)) || Number(x) > 100)
  do {
    y = prompt("What length vertically should the grid be?");
  } while (!Number.isInteger(Number(y)) || Number(y) > 100)

  document.querySelectorAll('.grid-row').forEach(div => div.remove());
  createGrid(x, y);
})

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(hori, vert) {
  const MAX_PIXELS = 1000;
  for (let i = 0; i < vert; i++) {
    const DIV_1 = document.createElement('div');
    DIV_1.style.display = "flex";
    DIV_1.style.justifyContent = "center";
    DIV_1.className = "grid-row";
    for (let j = 0; j < hori; j++) {
      const DIV_2 = document.createElement('div');
      DIV_2.style.height = Math.floor(MAX_PIXELS/hori) + "px";
      DIV_2.style.width = Math.floor(MAX_PIXELS/vert) + "px";
      DIV_2.style.backgroundColor = "#FFFFFF";
      DIV_2.className = "pixel-div";

      DIV_2.addEventListener('mouseenter', () => {
        DIV_2.style.backgroundColor = getRandomColor();
      });

      // Revert color when mouse leaves
      DIV_2.addEventListener('mouseleave', () => {
        DIV_2.style.backgroundColor = 'white';
      
      });

      DIV_1.appendChild(DIV_2);
    }
    document.body.appendChild(DIV_1);
  }
}

createGrid(x, y);

