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
  min-width: (400px, 100%);
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

  @media screen and (max-width: 480px) {
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
  margin: 40px;
  gap: 10px;
  padding: 24px 0 0;

  @media screen and (max-width: 480px) {
    padding-top: 16px;
  }
`;
