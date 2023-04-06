import styled from 'styled-components'

export const ContainerDisplay = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column-reverse;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
  margin-bottom: -50px;
`

export const Widgets = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
  margin-bottom: 40px;
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: inherit;
  height: inherit;

  @media only screen and (max-height: 801px) {
    height: 80%;
  }
`

export const CurrentPassword = styled.p`
  font-size: 9em;
  color: ${({ color }) => (color ? color : 'black')};
  border: 1px solid;
  margin: 20px;
  padding: 10px;
  height: fit-content;
`

export const LastPassword = styled.p`
  font-size: 5em;
  color: ${({ color }) => (color ? color : 'black')};
  border: 1px solid;
  margin: 20px;
  padding: 10px;
  height: fit-content;
`

export const Title = styled.h1`
  font-size: 40px;
  color: black;
`

export const SubTitle = styled.h1`
  font-size: 30px;
  color: black;

  @media only screen and (max-width: 1025px) {
    font-size: 27px;
  }
`

export const TitleSelect = styled.h1`
  font-size: 40px;
  color: red;

  
`

export const TitleLastPassword = styled.h1`
  font-size: 40px;
  color: black;
  @media only screen and (max-height: 950px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 1025px) {
    font-size: 24px;
  }
`

export const SelectLastPassword = styled.h1`
  font-size: 2em;
  color: black;
  width: 85%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`

export const CurrentPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: white;
  width: 85%;
  height: 70%;
  margin: 10px;
  box-shadow: 0px 0 13px 5px rgb(0 0 0 / 12%);
  justify-content: space-evenly;
  padding: 215px;
`

export const LastPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  width: auto;
  justify-content: center;
  background-color: white;
  width: 30%;
  height: 70%;
  margin: 10px;
  box-shadow: 0px 0 13px 5px rgb(0 0 0 / 12%);
  font-size: 12px;

  @media only screen and (max-height: 950px) {
    font-size: 10px;
  }

  @media only screen and (max-height: 801px) {
    font-size: 8px;
  }
`

export const CurrentHour = styled.div`
  font-size: 35px;
`
