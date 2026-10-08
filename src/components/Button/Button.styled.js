import styled from "styled-components"

export const ButtonWarpper= styled.button`
     color: ${(props) => props.theme.colors.primary};
     background-color: ${(props) => props.theme.colors.secondary};
     padding: 20px 20px;
     border-radius: 20px;
     cursor: pointer;
     min-width: 300px;
     font-size:1.2rem;
     border: none;
     font-weight: 600;
     
     &:hover{
        box-shadow: 5px 5px blueviolet;
     }
     
    `