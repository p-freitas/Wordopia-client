import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  font-family: 'MyFont', sans-serif;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;

  @media only screen and (max-device-width: 767px) {
    max-width: 90%;
  }

  width: ${({ fullScreen, width }) => (fullScreen ? '100%' : width)};
  height: ${({ fullScreen, height }) => (fullScreen ? '100vh' : height)};
  background-color: white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.07),
    0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: ${({ fullScreen }) => (fullScreen ? '0px' : '10px')};
  overflow-y: auto;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  justify-content: space-between;

  #select {
    width: 300px;
    color: black;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  align-content: center;
  height: inherit;
  height: auto;
  flex-direction: column;
`

export const ModalBodyContent = styled.div`
  display: flex;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: black;
  font-size: 30px;
`

export const Button = styled.button`
  border-radius: 5px;
  text-transform: uppercase;

  padding: 0 10px;
  color: var(--white);
  height: 40px;
  width: 200px;
  background-color: var(--green-high);
  transition: 0.5s;
  cursor: pointer;
  margin: 10px;
  font-size: 25px;
  border: 1px solid black;
  font-family: 'MyFont', sans-serif;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:hover {
    background-color: var(--green-strong);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;

    &:hover {
      background-color: #cccccc;
    }
  }

  @media only screen and (max-device-width: 767px) {
    width: 150px;
    font-size: 18px;
    padding: 8px 0 5px;
  }
`

export const ButtonCancel = styled.button`
  border-radius: 5px;
  text-transform: uppercase;
  font-family: 'MyFont', sans-serif;
  padding: 0 10px;
  color: var(--white);
  height: 40px;
  width: 200px;
  background-color: #ccc;
  transition: 0.5s;
  cursor: pointer;
  margin: 10px;
  font-size: 25px;
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:hover {
    background-color: var(--red-strong);
  }

  @media only screen and (max-device-width: 767px) {
    width: 150px;
    font-size: 18px;
    padding: 8px 0 5px;
  }
`

export const NameInput = styled.input`
  border: 1px solid;
  font-size: 18px;
  width: 300px;
  padding: 10px;
`

export const CopyLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
