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
  height: 250px;

  @media only screen and (max-device-width: 767px) {
    margin: ;
  }

  width: ${({ fullScreen, width }) => (fullScreen ? '100%' : width)};
  height: ${({ fullScreen, height }) => (fullScreen ? '100vh' : height)};
  background-color: white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.07),
    0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: ${({ fullScreen }) => (fullScreen ? '0px' : '10px')};
  overflow-y: auto;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  justify-content: space-evenly;

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

export const ClockSpinner = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  width: 48px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: inset 0px 0px 0px 4px #333;
  border-radius: 50%;
  position: relative;

  &:after,
  &:before {
    position: absolute;
    content: '';
    transform-origin: 2px 2px;
    background-color: #333;
    height: 4px;
    top: 22px;
    left: 22px;
  }

  &:before {
    width: 20px;
    animation: spin 2000ms linear infinite;
  }

  &:after {
    width: 16px;
    animation: spin 8000ms linear infinite;
  }
`

export const TextWarning = styled.p`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
`