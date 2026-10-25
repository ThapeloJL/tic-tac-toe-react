import styled from "styled-components";

export const GameStyle = styled.button`
  color: blueviolet;
  text-decoration: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  width: 100%;
  aspect-ratio: 1;
  font-size: 3rem;
  border-radius: clamp(1rem, 4vw, 2.5rem);
  box-shadow: 5px 8px ${(props) => props.theme.colors.cream};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.media.tablet} {
    font-size: 2.5rem;
    border-radius: 1.5rem;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 2rem;
    border-radius: 1rem;
    box-shadow: 3px 4px ${(props) => props.theme.colors.cream};
  }

  @media (hover: hover) and (pointer: fine) {
    &:not(:disabled):hover {
      transform: scale(1);
    }
  }

  &:active:not(:disabled) {
    transform: scale(1);
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
  padding: clamp(0.75rem, 4vw, 1.875rem);
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
