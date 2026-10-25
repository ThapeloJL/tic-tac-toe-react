import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color:${(props) => props.theme.colors.secondary};

  border-radius: 6px;
  ${(props) => props.theme.media.tablet} {
    margin: 0.75rem;
  }

  ${(props) => props.theme.media.mobile}{
    margin: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const AvatarWrapper = styled.div`
 div {
  display: flex;
   width: 8rem;
  height: 8rem;
  filter: ${(props) => (props.$isPlayerActive ? "none" : `grayscale(100%)`)};

   ${(props) => props.theme.media.tablet} {
     width: 6.5rem;
     height: 6.5rem;
   }

   ${(props) => props.theme.media.mobile} {
     width: 4.5rem;
     height: 4.5rem;
   }
 }
 ${(props) => props.theme.media.mobile} {
     margin: 0.25rem;
   }
`
