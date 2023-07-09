import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`

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
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`

export const ModalContent = styled.div`
  display: flex;
  height: 95%;
  width: 60%;
  background-color: #c4ddff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 30px,
    rgba(0, 0, 0, 0.05) 0px 0px 10px;
  border-radius: 10px;
  overflow-y: auto;
  -webkit-box-align: center;
  max-width: 1200px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 10px;
  -webkit-box-align: center;
  align-items: flex-start;
  height: auto;
  flex-direction: row;
  width: 100%;
`

export const ModalBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: black;
  font-size: 40px;
`

export const ParagraphContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: justify;
`

export const VideoContainer = styled.div`
  width: 100%;
`

export const ParagraphTitle = styled.h2`
  margin: 20px 0px;
  text-decoration: underline;
`

export const ParagraphText = styled.p`
  font-size: 16px;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    text-align: justify;
  }
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: unset;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const Icon = styled.i`
  font-size: 35px;
`
