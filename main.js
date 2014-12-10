function getEmptyGrid(width, height) {
  var grid = [];
  for (var x = 0; x < width; x++) {
    grid[x] = [];
    for (var y = 0; y < height; y++) {
      grid[x][y] = false;
    }
  }
  return grid;
}

function main(width, height, cells) {
  var x, y;
  var newCells = getEmptyGrid(width, height);



  return newCells;
}