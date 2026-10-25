import React, { useContext } from "react";
import { GameStyle, Preview } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o-outline.svg";
import { SfxContext } from "../../contexts/SfxContext";
import { GAME_MODES } from "../../contexts/GameContext";


const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const {hoverSfx ,clickedSfx } = useContext(SfxContext)
  const isComputerTurn =
   game.gameMode === GAME_MODES.VS_COMPUTER &&
   game.turn === game.player2.choice;

  const cellClickHandler = () => {
   if (isComputerTurn || game.roundWinner || cellItem !== "") return;
   clickedSfx();
   updateBoard(index);
  console.log(game.roundWinner)
};

  

  const isEmpty = cellItem === "";
  return (
    <GameStyle
      $empty={isEmpty}
      disabled={isComputerTurn}
      onClick={cellClickHandler}
      onMouseEnter={()=>hoverSfx()}
    >
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
