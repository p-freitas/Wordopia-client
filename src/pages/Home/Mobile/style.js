import styled from 'styled-components'

export const AlphabetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  position: relative;
  width: 100%;
  margin: 0 auto;
`

export const Letter = styled.div`
  width: 50px;
  height: 40px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  cursor: ${({ cursor }) => (cursor ? 'default' : 'pointer')};
  color: white;
  margin: 20px;
  background-color: ${({ background }) => background};
  font-family: 'MyFont', sans-serif;

  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover};
  }
`

export const PageContainer = styled.div`
  background-color: #2563eb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-evenly;
`

export const TabletopContainer = styled.div`
  background-color: #2563eb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ScoreBoardContainer = styled.div`
  background-color: rgb(37, 99, 235);
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`

export const WordButtonContainer = styled.div`
  background-color: rgb(37, 99, 235);
  display: flex;
  height: 40%;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ResetButtonContainer = styled.div`
  background-color: rgb(37, 99, 235);
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
  font-size: 30px;
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

export const Button = styled.button`
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

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonContainer = styled.div`
  text-align: center;
`

export const TimerText = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
`

export const TextLost = styled.h1`
  position: absolute;
  z-index: 1;
  font-size: 70px;
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
  // position: fixed;
  bottom: 0;
  left: 0;
  margin: 5rem 0;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 60px;
  font-family: 'MyFont', sans-serif;
`
