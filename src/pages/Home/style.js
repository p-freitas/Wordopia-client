import styled from 'styled-components'

export const AlphabetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
`

export const Letter = styled.div`
  width: 100px;
  height: 80px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  margin: 20px;
  background-color: ${({ background }) =>
    background}; // change the background color based on the isActive prop

  &:hover {
    background-color: rgb(48 142 217);
  }
`

export const PageContainer = styled.div`
  background-color: #2563eb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Button = styled.button`
  width: 200px;
  height: 200px;
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
  width: 30%;
  text-align: center;
`

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 60px;
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
