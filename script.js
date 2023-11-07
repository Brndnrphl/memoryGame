// container for the invidual tiles
const tilesContainer = document.querySelector(".tiles");

// array of colors used
const colors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
];

// duplicate the array twice to be used by the tiles
const colorPicklist = [...colors, ...colors];

// number of tiles based on the amount of colors used
const tileCount = colorPicklist.length;

// number of tiles that have been revealed
let revealedCount = 0;

function buildTile(color) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("data-color", color);
  tile.setAttribute("data-revealed", "false");

  tile.addEventListener("click", function () {
    // reveal the color on click and set it to active
    tile.style.backgroundColor = color;
    tile.setAttribute("data-revealed", "true");

    // wait for the second tile click
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
