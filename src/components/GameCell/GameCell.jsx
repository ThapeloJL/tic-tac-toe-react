import React, { useContext } from "react";
import { GameStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContex";


const GameCell = ({ cellItem, index }) => {
  const { updateBoard } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index)
  };

  return <GameStyle onClick={cellClickHandler}>{cellItem}</GameStyle>;
};

export default GameCell;
