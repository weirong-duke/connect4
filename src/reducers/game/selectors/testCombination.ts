import { BoardState } from "../board";
import { Combination } from "../../../config";
import { Color } from "../../../types";

export function testCombination(
  state: BoardState,
  combination: Combination
): Color {
  for (let row = 0; row < state.length; row++) {
    for (let column = 0; column < state[row].length; column++) {
      // only run if the current cell has a color
      if (state[row][column] !== null) {
        const color = testCombinationAt(state, combination, row, column);

        if (color) {
          return color;
        }
      }
    }
  }

  return null;
}

export function testCombinationAt(
  state: BoardState,
  combination: Combination,
  row: number,
  column: number
): Color {
  // this is the original cell color, we'll confirm that every
  // cell referred by the combination is the same
  const cell = state[row][column];

  for (const [x, y] of combination) {
    const nextRow = row + x;
    const nextColumn = column + y;

    // if the next cell falls outside the board the combination is invalid
    if (nextRow >= state.length || nextColumn >= state[nextRow].length) {
      return null;
    }

    // if we found a different color (or null) the combination is invalid
    if (cell !== state[nextRow][nextColumn]) {
      return null;
    }
  }

  return cell;
}
