import styled from 'styled-components'

const buttonWidth = '300px'
const buttonHeight = '30px'

export const AlphabetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  max-width: 75%;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) and (max-width: 1900px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0px;
    position: relative;
    width: 100%;
    margin: 0px auto;
    max-width: 100%;
    padding: 0;
  }
`

export const Letter = styled.div`
  width: 90px;
  height: 90px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  cursor: ${({ cursor }) => (cursor ? 'default' : 'pointer')};
  color: white;
  margin: 20px;
  opacity: ${({ background }) => background};
  font-family: 'MyFont', sans-serif;
  border-radius: 25px;
  padding-top: 8px;
  background: white;
  color: #ffbd6f;
  -webkit-text-stroke: 1px rgb(128, 69, 0);
  border: 2px solid black;
  box-shadow: black 0 0 5px 0px;
  transition: all 0.5s;

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

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    min-height: 100vh;
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;
  }
`

export const TabletopContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 85%;

  @media only screen and (min-width: 1200px) and (max-width: 1900px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

export const ScoreBoardContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;

  @media only screen and (min-width: 1200px) and (max-width: 1900px) {
    width: 25%;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    width: 90%;
  }
`

export const WordButtonContainer = styled.div`
  display: flex;
  height: 28%;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    margin: 20px 0;
  }
`

export const ResetButtonContainer = styled.div`
  display: flex;
  height: 40%;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Word = styled.p`
  color: white;
  margin-bottom: 20px;
  font-size: 26px;
  text-align: center;
  font-family: 'MyFont', sans-serif;
`

export const WordButton = styled.button`
  width: 200px;
  height: 50px;
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

export const Button = styled.a`
  $button-height: 80px;
  $button-width: 480px;
  $press-time: 0.1s;

  box-shadow: 0px 15px 0 20px #352d2d, 0px 40px 0 30px #000000;
  cursor: pointer;
  background-color: #c0392b;
  border-radius: 50%;
  width: ${buttonWidth};
  height: ${buttonHeight};
  transform: rotatey(319deg);

  &::before {
    content: '';
    z-index: 1;
    border-radius: 50%;
    background-color: #e74c3c;
    position: absolute;
    bottom: 100%;
    left: 0%;
    transition: bottom 0.1s;
    width: ${buttonWidth};
    height: ${buttonHeight};
  }

  &::after {
    content: '';
    background-color: #c0392b;
    position: absolute;
    bottom: 50%;
    left: 0%;
    width: ${buttonWidth};
    height: ${buttonHeight};
    transition: height 0.1s;
  }

  &:active {
    &::before {
      bottom: 10%;
    }
    &::after {
      height: 10%;
    }
  }
  // width: 200px;
  // height: 200px;
  // border-radius: 50%;
  // background-color: red;
  // border: none;
  // color: white;
  // font-size: 20px;
  // font-weight: bold;
  // cursor: pointer;
  // border: 3px solid black;
  // box-shadow: black 0 0 10px 0px;

  // &:hover {
  //   opacity: 0.9;
  // }

  // &:active {
  //   opacity: 0.82;
  //   transform: scale(0.95);
  // }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: red;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: 3px solid black;
    box-shadow: black 0 0 10px 0px;
  }
`

export const ButtonContainer = styled.div`
  height: 120px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TimerContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TimerText = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
`

export const TextLost = styled.h1`
  position: absolute;
  z-index: 1;
  font-size: 179px;
  color: red;
`

export const ResetButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 7%;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: black 0px 0px 2px 0px;
  margin-top: 200px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.8;
  }
`
export const PauseButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 7%;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: black 0px 0px 2px 0px;
  margin-top: 200px;
  margin: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export const RemovePlayerButton = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 7%;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: black 0px 0px 2px 0px;
  margin-top: 200px;
  margin: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export const ChangePlayerTurnButton = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 7%;
  background-color: #008eff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: black 0px 0px 2px 0px;
  margin-top: 200px;
  margin: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: #ffbd6f;
  -webkit-text-stroke: 0.5px rgb(128, 69, 0);
  text-shadow: black 4px 5px 0px;
  font-size: 70px;
  font-family: 'MyFont', sans-serif;
`

export const RedButton = styled.div``
