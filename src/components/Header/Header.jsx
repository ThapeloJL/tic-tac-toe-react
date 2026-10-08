import React ,{useContext} from 'react';
import {ThemeContext}from "../../contexts/ThemeContext";
import {HeaderWrapper , LightModeIcon ,DarkModeIcon} from "../Header/Header.styled";
import {ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const {theme , toggleTheme} = useContext(ThemeContext)
    console.log("current theme" , theme)

    const navigation = useNavigate()
  return (
    <HeaderWrapper>
      <Logo className="Logo" onClick={()=> navigation("/home")}/>
    
      <span  onClick={toggleTheme}>
      {theme === "light" ?  <DarkModeIcon/> :  <LightModeIcon /> }
      </span>

      
    </HeaderWrapper>
  )
}

export default Header
