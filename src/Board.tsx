import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "./reducers";
import { getBoard, getCurrentPlayer, getWinner } from "./reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "./actions/dropCoin";
import { Color } from "./types";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
}

interface State {}

export class BoardComponent extends React.Component<Props, State> {
  dropCoin = (column: number) => () => {
    if (!this.props.winner) {
      this.props.dropCoin(column, this.props.color);
    }
  };

  displayWinner() {
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner} wins the game!</h2>;
    }

    return null;
  }

  displayRow = (colors: Color[], key: number) => {
    return (
      <Row dropCoin={this.dropCoin} colors={colors} key={`column-${key}`} />
    );
  };

  render() {
    const classes = cn("Game-Board");

    return (
      <>
        {this.displayWinner()}
        <div className="Game">
          <div className={classes}>{this.props.board.map(this.displayRow)}</div>
        </div>
      </>
    );
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state)
});

export const Board = connect(mapState, { dropCoin })(BoardComponent);
