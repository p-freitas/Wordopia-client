import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 55px;
  width: 40px;
  height: 40px;
  background-color: ${({ isMuted }) => (isMuted ? 'red' : 'green')};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  @media only screen and (max-device-width: 767px) {
    top: 20px;
    right: 10px;
    width: 35px;
    height: 35px;
  }
  z-index: 10001;
`

export const Icon = styled.i`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
