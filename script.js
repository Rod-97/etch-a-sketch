const container = document.querySelector("#container");
const containerSize = 360;
container.style.height = `${containerSize}px`;
container.style.width = `${containerSize}px`;

const defaultGridSize = 16;

function getRandomRGB() {
  return Math.round(Math.random() * (255 - 0) + 0);
}

function createGrid(gridSize) {
  const squareSize = containerSize / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
    });
    container.appendChild(square);
  }
}

createGrid(defaultGridSize);

const sizeBtn = document.querySelector("#size-btn");

sizeBtn.addEventListener("click", () => {
  const newSize = prompt("Enter new size for the grid (1-100):");
  if (newSize < 1 || newSize > 100) return;
  container.innerHTML = "";
  createGrid(newSize);
});
