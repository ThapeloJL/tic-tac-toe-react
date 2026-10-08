import React, { useContext } from 'react'
import {Container} from "../Home.styled"
import {GameBoardStyle} from "./Game.styled";
import GameCell from '../../components/GameCell/GameCell';
import { GameContext } from '../../contexts/GameContex';

const Game = () => {
  const {game} = useContext(GameContext);
  const {board} = game;
  return (
    <Container>
      <GameBoardStyle>
        {board.map((item,index)=>{
          return <GameCell key={index} cellItem={item} index={index}/>
        })}
      </GameBoardStyle>
    </Container>
  )
}

export default Game
