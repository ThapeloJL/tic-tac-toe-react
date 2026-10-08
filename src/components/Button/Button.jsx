import React from 'react';
import {ButtonWarpper} from "./Button.styled"


const Button = (props) => {

  return (
      <ButtonWarpper {...props}>{props.children}</ButtonWarpper>
  )
}

export default Button
