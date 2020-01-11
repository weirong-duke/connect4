import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "./reducers";
import { getBoard, getCurrentPlayer, getWinner } from "./reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "./actions/dropCoin";

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

  render() {
    const classes = cn("Game-Board");

    if (this.props.winner) {
      console.log("winner is", this.props.winner);
    }

    const columnComponents = this.props.board.map((column, index) => (
      <Row dropCoin={this.dropCoin} colors={column} key={`column-${index}`} />
    ));

    return <div className={classes}>{columnComponents}</div>;
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state)
});

export const Board = connect(mapState, { dropCoin })(BoardComponent);
