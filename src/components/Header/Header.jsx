import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  HeaderWrapper,
  LightModeIcon,
  DarkModeIcon,
} from "../Header/Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickedSfx } = useContext(SfxContext);
  console.log("current theme", theme);

  const navigation = useNavigate();
  return (
    <HeaderWrapper>
      <Logo
        className="Logo"
        onClick={() => {
          clickedSfx();
          navigation("/home");
        }}
        onMouseEnter={() => hoverSfx()}
      />

      <span
        onClick={() => {
          clickedSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
