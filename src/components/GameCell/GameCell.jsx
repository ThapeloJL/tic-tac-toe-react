import React, { useContext } from "react";
import { GameStyle, Preview } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o-outline.svg";
import { checkForWinner } from "../../utils/GameUltils";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOver from "../Modals/RoundOver";
import Player from "../Player/Player"


const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game ,getRoundResults } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const results = checkForWinner(game.board)
    if (results) {
      handleModal(<RoundOver />);
      getRoundResults(<Player />)
    }
  };

  

  const isEmpty = cellItem === "";
  return (
    <GameStyle $empty={isEmpty} onClick={cellClickHandler}>
      {cellItem === "X" && <IconX />}
      {cellItem === "O" && <IconO />}

      {isEmpty && (
        <Preview>
          {game.turn === "X" ? (
            <IconX className="outlineIcon markedItem" />
          ) : (
            <IconO className="outlineIcon markedItem" />
          )}
        </Preview>
      )}
    </GameStyle>
  );
};

export default GameCell;
