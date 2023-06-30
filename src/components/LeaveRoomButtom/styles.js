import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 40px;
  width: 40px;
  height: 40px;
  background-color: red;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
