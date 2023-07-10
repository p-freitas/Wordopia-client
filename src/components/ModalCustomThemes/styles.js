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
  height: 550px px;
  width: 550px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;
  border-radius: 40px;
  overflow-y: auto;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(10, 207, 254) 0%,
    rgb(73, 90, 255) 100%
  );
  border: 2px solid;

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
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const TextWarning = styled.p`
  font-size: 30px;
  color: rgb(255, 189, 111);
  -webkit-text-stroke: 1px rgb(128, 69, 0);
  margin-top: 10px;
`

export const Button = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  background-color: red;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: MyFont, sans-serif;
  margin-right: 20px;

  &:hover {
    opacity: 0.8;
  }
`

export const CreateRoomButton = styled.button`
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

export const NameInput = styled.input`
  border: 1px solid;
  font-size: 18px;
  width: 200px;
  padding: 10px;
  background: unset;
  color: white;

  ::placeholder {
    color: white;
    opacity: 0.8;
  }

  ::-ms-input-placeholder {
    color: white;
    opacity: 0.8;
  }
`

export const InputContainer = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
`

export const TagsContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  height: 300px;
  width: 450px;
  border: 1px solid white;
  border-radius: 20px;
  margin: 0px 0px 15px;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 2px;
  justify-content: center;
  overflow: auto;
`

export const ButtonAdd = styled.button`
  border-radius: 5px;
  text-transform: uppercase;
  padding: 5px 10px 0;
  color: var(--white);
  background-color: var(--green-high);
  transition: all 0.5s ease 0s;
  cursor: pointer;
  margin: 0 10px;
  border: 1px solid black;
  font-family: MyFont, sans-serif;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 35px;
  font-size: 44px;

  &:hover {
    background-color: var(--green-strong);
  }

  @media only screen and (max-device-width: 767px) {
    width: 150px;
    font-size: 18px;
  }
`

export const ThemeTag = styled.span`
  border: 2px solid;
  border-radius: 5px;
  padding: 4px;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  color: white;
  max-width: 90%;
  word-break: break-all;

  &:after {
    content: 'X';
    color: white;
    position: relative;
    border: 1px solid;
    border-radius: 20px;
    padding: 2px 4px 0px;
    font-size: 12px;
    margin-left: 5px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`
