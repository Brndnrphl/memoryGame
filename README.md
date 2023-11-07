# Memory Game
This project is a simple memory game built with HTML, CSS, and JavaScript.

## Overview
The game consists of a set of tiles each with a color. The tiles are laid out in a grid, face down. The gameplay goes as follows:

1. A player flips one tile over to reveal its underlying color.
2. The player then turns over a second tile, trying to find the corresponding tile with the same color.
3. If the colors match, both tiles stay flipped over.
4. If the colors do not match, the tiles are flipped back over.
5. The game ends when all the tiles have been matched.
## Implementation
The game is implemented in pure JavaScript, without any external libraries. The game board is a simple grid of tiles, which are HTML div elements. Each tile has a data-color attribute which corresponds to its color. When a tile is clicked, its background color is changed to its data-color.

The game logic is handled in JavaScript. When a tile is clicked, the game checks if it's the first or second tile to be clicked. If it's the first, it's simply stored in a variable. If it's the second, the game checks if its color matches the first tile's color. If they match, both tiles are marked as revealed. If they don't match, both tiles are flipped back over after a short delay.

# How to Run
To run the game, simply open the index.html file in a web browser. The game will start immediately.

# Future Improvements
1. Add a score or timer to increase the challenge.
2. Add animations for flipping the tiles.
3. Add the ability to change the difficulty by increasing or decreasing the number of tiles.
