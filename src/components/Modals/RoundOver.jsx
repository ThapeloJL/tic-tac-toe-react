import React, { useContext } from "react";
import { Title, Subtitle } from "../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal/Modal.styled";
import Button from "../Button/Button";
import { ModalContext } from "../../contexts/ModalContext";
import { GameContext, GAME_MODES } from "../../contexts/GameContext";
import { SfxContext } from "../../contexts/SfxContext";
import { useNavigate } from "react-router-dom";



const RoundOver = ({onContinue, result ,restartGame}) => {
  const { handleModal } = useContext(ModalContext);
  const {game} = useContext(GameContext)
  const {hoverSfx ,completeSfx ,clickedSfx} = useContext(SfxContext)

  const navigate = useNavigate()

  const player2Name =
    game.gameMode === GAME_MODES.VS_COMPUTER ? "Computer" : game.player2.name;
  const winnerName =
    result === "player2" ? player2Name : game.player1.name;
  const title = result === "draw" ? "DRAW" : `${winnerName} Wins`
  return (
    <div>
      <ModalHeader>
        <Title>Game Over</Title>
      </ModalHeader>
      <ModalBody>
        <Title>{title}</Title>
        <Subtitle>{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle>{player2Name} : {game.player2.score}</Subtitle>
        <Subtitle>Choices will now switch</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            clickedSfx();
            onContinue();
            handleModal();
          }}
          onMouseEnter={()=>hoverSfx()}
        >
          Continue
        </Button>
        <Button onClick={() =>{restartGame(); handleModal(); completeSfx() ; navigate("/")}} onMouseEnter={()=>hoverSfx()}>Restart</Button>
      </ModalFooter>

    </div>
  );
};

export default RoundOver;
