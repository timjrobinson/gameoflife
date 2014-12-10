var neighborCount = function(x, y, width, height, cells) {
  for (var x1 = Math.max(x - 1, 0), count = 0; x1 + 1 < width, x1 <= x + 1; ++x1) {
    for (var y1 = Math.max(y - 1, 0); y1 + 1 < height, y1 <= y + 1; ++y1) {
      if (!(x1 === x && y1 === y) && y1 >= 0 && cells[x1][y1] && (count += 1) > 3) {
        break;
      }
    }
  }
  return count;
};

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

  for (x = 0; x < width; ++x) {
    for (y = 0; y < height; ++y) {
      var count = neighborCount(x, y, width, height, cells);
      if (count < 2) {
        newCells[x][y] = false;
      } else if (cells[x][y] && !(6 % count)) {
        newCells[x][y] = true;
      } else if (cells[x][y] && count > 3) {
        newCells[x][y] = false;
      } else if (!cells[x][y] && count === 3) {
        newCells[x][y] = true;
      }
    }
  }

  return newCells;
}