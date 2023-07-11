import styled from 'styled-components'

export const Button = styled.div`
  position: fixed;
  bottom: 20px;
  left: 30px;
  background-color: rgb(72 91 255);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 10px;
  &:focus {
    outline: none;
  }
  z-index: 10001;
`

export const ButtonBugs = styled.div`
  position: fixed;
  bottom: 20px;
  left: 125px;
  background-color: rgb(255 0 0);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  padding: 18px;
  z-index: 10001;

  @media only screen and (max-device-width: 767px) {
    position: fixed;
    bottom: auto;
    top: 5px;
    left: 60px;
    background-color: rgb(255 0 0);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    padding: 18px;
    z-index: 10001;
  }
`

export const ButtonMobile = styled.button`
  position: fixed;
  top: ${({ isHome }) => isHome ? 'auto' : '5px'};
  bottom: ${({ isHome }) => !isHome ? 'auto' : '5px'};
  // top: 5px;
  left: 10px;
  width: 35px;
  height: 35px;
  background-color: rgb(72, 91, 255);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10001;
`

export const Icon = styled.i`
  font-size: 20px;
  color: white;
  position: absolute;
  left: 17px;
  transform: translate(-50%, -50%);
`

export const IconBug = styled.i`
  font-size: 20px;
  color: white;
  position: absolute;
  left: 17px;
  transform: translate(-50%, -50%);
`
