import React, { useContext } from "react";
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../styles/General.styled";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../contexts/SfxContext"; 
import PlayerSetup from "../components/PlayerSetup/PlayerSetup";  // eslint-disable-next-line 

const Home = () => {
  const navigation = useNavigate();

  const { hoverSfx, clickedSfx } = useContext(SfxContext);

  return (
    <Container columnBased>
      <Title>Tictactoe</Title>
      <Subtitle>Play with Friends : Score higher</Subtitle>
      <PlayerSetup
        onStart={() => {
          clickedSfx();
          navigation("/game-on");
        }}
        onMouseEnter={hoverSfx}
      />
    </Container>
  );
};

export default Home;
