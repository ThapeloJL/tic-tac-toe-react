import styled from "styled-components";

export const GameStyle = styled.button`
  color: blueviolet;
  text-decoration: ${(props) =>props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
  border-radius: 10px;
  box-shadow: 5px 8px ${(props) =>props.theme.colors.cream};
  cursor: pointer;

  &:hover{
    transform:scale(1.05);
  }
`;
