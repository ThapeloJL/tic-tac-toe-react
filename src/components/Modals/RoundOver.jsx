import React, { useContext } from "react";
import { Title, Subtitle } from "../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal/Modal.styled";
import Button from "../Button/Button";
import { ModalContext } from "../../contexts/ModalContext";
import { GameContext } from "../../contexts/GameContext";



const RoundOver = ({onContinue, result}) => {
  const { handleModal } = useContext(ModalContext);
  const {game} = useContext(GameContext)
  const title = result === "draw" ? "DRAW" : `${game[result].name}`
  return (
    <div>
      <ModalHeader>
        <Title>Game Over</Title>
      </ModalHeader>
      <ModalBody>
        <Title>{title}</Title>
        <Subtitle>{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle>{game.player2.name} : {game.player2.score}</Subtitle>
        <Subtitle>Choices will now switch</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            handleModal();
            onContinue();
          }}
        >
          Continue
        </Button>
        <Button>Restart</Button>
      </ModalFooter>

    </div>
  );
};

export default RoundOver;
