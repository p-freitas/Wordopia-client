import styled from 'styled-components'

export const VoiceChatContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const VoiceChatButton = styled.button`
  width: auto;
  border-radius: 10px;
  background-color: rgb(0, 142, 255);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  font-family: MyFont, sans-serif;
  padding: 5px 10px;

  &:hover {
    opacity: 0.8;
  }
`

export const MuteButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 0 10px;
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
`

export const LeaveButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 0 10px;
  background-color: red;
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
`

export const Icon = styled.i`
  font-size: 20px;
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
`
