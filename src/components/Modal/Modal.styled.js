import styled from "styled-components";
export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  display: flex;
  z-index: 1000;
  padding: 16px;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  width: min(100%, 400px);
  margin: 0 auto;
  max-height: 90vh;
  max-height: 90dvh;
  padding: 40px 20px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${(props) => props.theme.colors.text};

  ${(props) => props.theme.media.tablet} {
    padding: 32px 20px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 24px 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ModalBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  size: small;
  padding: 10px;
`;

export const ModalFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 0 0;
  gap: 10px;
  padding: 24px 0 0;

  ${(props) => props.theme.media.tablet} {
    margin-top: 1.25rem;
    padding-top: 1rem;
  }

  ${(props) => props.theme.media.mobile} {
    padding-top: 16px;
  }
`;
