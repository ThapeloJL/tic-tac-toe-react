import React, { useContext } from "react";
import { Container } from "./Home.styled";
import { Title, Subtitle } from "../styles/General.styled";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../contexts/SfxContext";


const Home = () => {
  const navigation = useNavigate();

  const { hoverSfx, clickedSfx } = useContext(SfxContext);

  return (
    <Container>
      <Title>Tictactoe</Title>
      <Subtitle>Play with Friends : Score higher</Subtitle>
      <Button
        onClick={() => {
          clickedSfx();
          navigation("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
