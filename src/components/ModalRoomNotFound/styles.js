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
  height: 250px;

  @media only screen and (max-device-width: 767px) {
    margin: ;
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
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    text-align: center;
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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const TitleContainer = styled.p`
  color: black;
  font-size: 20px;
  text-align: center;
`

export const TextWarning = styled.p`
  font-size: 30px;
  color: red;
  margin-top: 10px;
`

export const Button = styled.button`
  border-radius: 5px;
  text-transform: uppercase;
  padding: 0px 10px;
  color: var(--white);
  background-color: var(--green-high);
  transition: all 0.5s ease 0s;
  cursor: pointer;
  margin: 10px;
  font-size: 25px;
  border: 1px solid black;
  font-family: MyFont, sans-serif;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 50px;

  &:hover {
    background-color: var(--green-strong);
  }

  @media only screen and (max-device-width: 767px) {
    width: 150px;
    font-size: 18px;
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
  background-color: #e70000;
  transition: 0.5s;
  cursor: pointer;
  margin: 10px;
  font-size: 25px;
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &:hover {
    background-color: rgb(165 7 7);
  }

  @media only screen and (max-device-width: 767px) {
    width: 150px;
    font-size: 18px;
  }
`
