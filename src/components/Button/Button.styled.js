import styled from "styled-components"

export const ButtonWarpper= styled.button`
     color: ${(props) => props.theme.colors.primary};
     background-color: ${(props) => props.theme.colors.secondary};
     padding: 20px 20px;
     border-radius: 20px;
     cursor: pointer;
     width: min(100%, 300px);
     font-size:1.2rem;
     border: none;
     font-weight: 600;
     
     &:hover{
        box-shadow: 5px 5px blueviolet;
     }

     ${(props) => props.theme.media.tablet} {
        padding: 16px;
     }

     ${(props) => props.theme.media.mobile} {
        padding: 14px 16px;
        font-size: 1rem;
        border-radius: 14px;
     }
    `