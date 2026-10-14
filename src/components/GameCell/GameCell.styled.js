import styled from "styled-components";

export const GameStyle = styled.button`
  color: blueviolet;
  text-decoration: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
  border-radius: 2.5rem;
  box-shadow: 5px 8px ${(props) => props.theme.colors.cream};
  cursor: pointer;

  @media screen and (min-width: 1001px) {
    padding: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
export const Preview = styled.span`
  fill: ${(props) => props.theme.colors.secondary};
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
  padding: 30px;
  size: small;

  ${GameStyle}:hover & {
    opacity: 0.4;
  }

  .markedItem{
    path{
      color: ${(props) => props.theme.colors.primary}
    }
  }
  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &hover {
    path {
      stroke-width: 2;
    }
  }
`;
