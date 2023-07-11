import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`

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
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`

export const ModalContent = styled.div`
  display: flex;
  height: 700px;
  width: 1080px;
  background-image: linear-gradient(
    to right,
    rgb(10, 207, 254) 0%,
    rgb(73, 90, 255) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;
  border-radius: 50px;
  overflow-y: auto;
  -webkit-box-align: center;
  max-width: 1200px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  border: 2px solid;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 10px;
  -webkit-box-align: center;
  align-items: flex-start;
  height: auto;
  flex-direction: row;
  width: 100%;
`

export const ModalBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: white;
  font-size: 40px;
  margin-bottom: 5px;
  text-shadow: black 3px 3px 0px;
`

export const TitleConfigsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: white;
  font-size: 23px;
  margin-top: 15px;
  -webkit-text-stroke: 1.5px rgb(0 0 0);
`

export const ConfigsContainer = styled.div`
  height: 500px;
  width: 1000px;
  display: flex;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const SettingsContainer = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  width: 30%;
  margin: 0 5px 0 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
`

export const ThemesContainer = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  width: 30%;
  margin: 0 5px 0 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    width: 100%;
    height: 350px;
  }
`

export const LettersContainer = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  width: 40%;
  margin: 0 5px 0 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: unset;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const Icon = styled.i`
  font-size: 35px;
  color: white;
`

export const CreateRoomButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 30px 0 0;
  border-radius: 10px;
  background-color: rgb(0, 142, 255);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: 'MyFont', sans-serif;

  &:hover {
    opacity: 0.8;
  }
`
export const DefaultThemesButton = styled.button`
  padding: 0 10px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(72 92 254);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: 'MyFont', sans-serif;
  opacity: ${({ isClicked }) => isClicked};
`
export const CustomThemesButton = styled.button`
  padding: 0 10px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(10 206 254);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: 'MyFont', sans-serif;
  opacity: ${({ isClicked }) => isClicked};
`

export const OrText = styled.h1`
  font-size: 35px;
  margin: 45px 0;
`

export const BodySettingsContainer = styled.div`
  height: 90%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`

export const BodyThemesContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  text-shadow: black 3px 3px 0px;
  flex-direction: column;
`

export const BodyLettersContainer = styled.div`
  height: 90%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 40px;
  color: rgb(255, 189, 111);
  text-shadow: black 3px 3px 0px;
  -webkit-text-stroke: 1.5px rgb(128, 69, 0);
  flex-flow: column wrap;
  flex-wrap: wrap;
  flex-direction: row;
`

export const SettingContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #select-rounds {
    width: 30%;
  }
`

export const SelectText = styled.div`
  font-size: 18px;
  color: white;
  -webkit-text-stroke: 1.5px rgb(0 0 0);
`

export const Letter = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  opacity: ${({ background }) => background};
  margin: 10px;
  font-family: MyFont, sans-serif;
  border-radius: 12px;
  padding-top: 4px;
  background: white;
  color: rgb(255, 189, 111);
  -webkit-text-stroke: 1px rgb(128, 69, 0);
  border: 2px solid black;
  box-shadow: black 0px 0px 5px 0px;
  transition: all 0.5s ease 0s;
  text-shadow: none;

  &:hover {
    background-color: #ffffffd4;
  }

  @media (max-width: 767px) {
    width: 55px;
    height: 55px;
    border: 1px px solid white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    margin: 15px;
    font-family: MyFont, sans-serif;

    &:hover {
      background-color: ${({ backgroundHover }) => backgroundHover};
    }
  }
`
