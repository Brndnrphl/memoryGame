// container for the invidual tiles
const tilesContainer = document.querySelector(".tiles");

// array of colors used
const colors = [
  "#ff0000", // red
  "#00ff00", // green
  "#0000ff", // blue
  "#ffff00", // yellow
  "#ff00ff", // magenta
  "#00ffff", // cyan
  "#ff8000", // orange
  "#8000ff", // purple
];

// duplicate the array twice to be used by the tiles
const colorPicklist = [...colors, ...colors];

// number of tiles based on the amount of colors used
const tileCount = colorPicklist.length;

// number of tiles that have been revealed
let revealedCount = 0;
// store the first clicked tile
let firstClicked = null;
let secondClicked = null;
// keep track if waiting for timeout
let isWaiting = false;

function buildTile(color) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("data-color", color);
  tile.setAttribute("data-revealed", "false");

  tile.addEventListener("click", () => {
    if (firstClicked === tile || isWaiting) {
      return;
    }

    tile.style.backgroundColor = color;

    if (!firstClicked) {
      firstClicked = tile;
    } else if (!secondClicked) {
      secondClicked = tile;
    }

    if (firstClicked && secondClicked) {
      isWaiting = true;
      setTimeout(() => {
        const firstColor = firstClicked.getAttribute("data-color");
        const secondColor = secondClicked.getAttribute("data-color");

        if (firstColor === secondColor) {
          firstClicked.setAttribute("data-revealed", "true");
          secondClicked.setAttribute("data-revealed", "true");
          revealedCount += 2;
        } else {
          firstClicked.style.backgroundColor = "";
          secondClicked.style.backgroundColor = "";
        }

        firstClicked = null;
        secondClicked = null;
        isWaiting = false;

        if (revealedCount === tileCount) {
          document.querySelector(".win").style.display = "block";
        }
      }, 1000);
    }
  });
  return tile;
}

// Build tiles
for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorPicklist.length);
  const color = colorPicklist[randomIndex];
  const tile = buildTile(color);
  colorPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
