import { LocalState } from "..";
import { Color } from "../../../types";

export const getCurrentPlayer = (state: LocalState): Color => {
  let reds = 0;
  let yellows = 0;

  for (const row of state.board) {
    for (const cell of row) {
      if (cell === "red") {
        reds++;
      } else if (cell === "yellow") {
        yellows++;
      }
    }
  }

  return reds === yellows ? "yellow" : "red";
};
