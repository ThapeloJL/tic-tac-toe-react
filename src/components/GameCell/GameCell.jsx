import React, { useContext } from "react";
import { GameStyle, Preview } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o-outline.svg";
import { SfxContext } from "../../contexts/SfxContext";


const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const {hoverSfx ,clickedSfx } = useContext(SfxContext)

 const cellClickHandler = () => {
  if (game.roundWinner || cellItem !== "") return; 
  clickedSfx();
  updateBoard(index);
  console.log(game.roundWinner)
};

  

  const isEmpty = cellItem === "";
  return (
    <GameStyle $empty={isEmpty} onClick={cellClickHandler} onMouseEnter={()=>hoverSfx()}>
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
