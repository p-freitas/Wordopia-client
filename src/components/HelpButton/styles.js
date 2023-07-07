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
`

export const ButtonMobile = styled.button`
  position: fixed;
  bottom: 20px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-color: rgb(72 91 255);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const Icon = styled.i`
  font-size: 20px;
  color: white;
  position: absolute;
  left: 19px;
  transform: translate(-50%, -50%);
`
