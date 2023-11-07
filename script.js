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
// store the first clicked tile
let firstClicked = null;
let tilesLocked = false;

function buildTile(color) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("data-color", color);
  tile.setAttribute("data-revealed", "false");

  tile.addEventListener("click", function () {
    // if tiles are locked, don't do anything
    if (tilesLocked) {
      return;
    }

    // reveal the color on click and set it to active
    tile.style.backgroundColor = color;

    // if this is the first tile clicked, store it and return
    if (!firstClicked) {
      firstClicked = tile;
      return;
    }

    // if this is the second tile clicked, lock the tiles and check if they match
    tilesLocked = true;
    setTimeout(function () {
      // if the tiles match, increment the revealed count and reset the first clicked tile
      if (
        firstClicked.getAttribute("data-color") ===
        tile.getAttribute("data-color")
      ) {
        revealedCount += 2;
        firstClicked.setAttribute("data-revealed", "true");
        tile.setAttribute("data-revealed", "true");
        firstClicked = null;
        tilesLocked = false;
        // if all tiles have been revealed, alert the user and reset the game
        if (revealedCount === tileCount) {
          alert("You won!");
          location.reload();
        }
      } else {
        // if the tiles don't match, hide the colors and reset the first clicked tile
        firstClicked.style.backgroundColor = "";
        tile.style.backgroundColor = "";
        firstClicked = null;
        tilesLocked = false;
      }
    }, 1000);
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
