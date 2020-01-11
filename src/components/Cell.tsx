import { Color } from "../types";

import React from "react";
import cn from "classnames";
import { WinningCoordinates } from "../reducers/game/selectors/testCombination";

interface Props {
  color: Color;
  row: number;
  column: number;
  onClick: () => void;
  winner: WinningCoordinates | null;
}

export class Cell extends React.Component<Props> {
  // We want the winning cells to glow to show
  // the user the winning strike
  shouldGlow() {
    const { winner, row, column, color } = this.props;

    // if there is no winner yet or this cell has not yet
    // been played we won't have it glowing for sure
    if (!winner || !color) {
      return false;
    }

    for (const [x, y] of winner.combination) {
      const winningColumn = y + winner.column;
      const winningRow = x + winner.row;

      if (winningRow === row && winningColumn === column) {
        return true;
      }
    }

    return false;
  }

  render() {
    const { color, onClick } = this.props;

    const classes = cn("Game-Cell", color, { glow: this.shouldGlow() });

    return <div onClick={onClick} className={classes}></div>;
  }
}
