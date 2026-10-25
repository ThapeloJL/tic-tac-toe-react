import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5rem);
  min-height: calc(100dvh - 5rem);
  flex-direction: ${(props) => props?.columnBased ? "column" : "row"};
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  text-align: center;

  ${(props) => props.theme.media.tablet} {
    padding: 1.5rem;
  }

  ${(props) => props.theme.media.mobile} {
    min-height: calc(100vh - 4rem);
    min-height: calc(100dvh - 4rem);
    padding: 1.25rem 1rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;

  ${(props) => props.theme.media.tablet} {
    font-size: 2.5rem;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    font-size: 1rem;
  }
`;
