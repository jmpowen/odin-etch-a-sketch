const BUTTONS_DIV = document.querySelector('.buttons');
const GRID_DIV = document.querySelector('.grid');
const RESET_BTN = document.querySelector('.reset-btn');


const MAX_PIXELS = 600;
let x = 16;
let y = 16;

RESET_BTN.addEventListener('click', () => {
  do {
    x = prompt("What length horizontally should the grid be?");
  } while (!Number.isInteger(Number(x)) || Number(x) > 100 || Number(x) < 1 || x === "")
  do {
    y = prompt("What length vertically should the grid be?");
  } while (!Number.isInteger(Number(y)) || Number(y) > 100 || Number(x) < 1 || x === "")

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
  for (let i = 0; i < vert; i++) {
    const DIV_1 = document.createElement('div');
    DIV_1.style.display = "flex";
    DIV_1.style.justifyContent = "center";
    DIV_1.className = "grid-row";
    for (let j = 0; j < hori; j++) {
      const DIV_2 = document.createElement('div');
      DIV_2.style.height = Math.floor(MAX_PIXELS/vert) + "px";
      DIV_2.style.width = Math.floor(MAX_PIXELS/hori) + "px";
      DIV_2.style.backgroundColor = "#FFFFFF";
      DIV_2.style.border = "1px solid black";

      DIV_2.addEventListener('mouseenter', () => {
        DIV_2.style.backgroundColor = getRandomColor();
        DIV_2.style.opacity = 1;
        DIV_2.style.transition = "";
        DIV_2.style.border = "1px solid black";
      });

      // Revert color when mouse leaves
      DIV_2.addEventListener('mouseleave', () => {
        DIV_2.style.opacity = 0;
        DIV_2.style.transition = "opacity 5s ease-in-out";
      });

      DIV_1.appendChild(DIV_2);
    }
    GRID_DIV.appendChild(DIV_1);
  }
}

createGrid(x, y);

