/* globals Grid */
/*
 * Main
 *
 * Add code to make the game of life work inside the main function.
 * cells is a 2D array of every square you see on the board.
 * Each cell has a value of true or false, which represents whether the cell is alive or not.
 *
 * Your job is to calculate what cells should be alive or dead after 1 turn.
 * Put the result into newCells and return it at the end of the function.
 * newCells is currently a 2D array of width * height where every value is false.
 *
 *
 */
function main(width, height, cells) {
  var newCells = Grid.createGrid(width, height);

  /* Add your code here */

  return newCells;
}