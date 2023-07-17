import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  flex-direction: column;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    position: relative;
    height: 150vh;
    overflow: hidden;
  }
`

export const JoinButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  justify-content: center;
  margin-top: 5%;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    height: auto;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: #ffbd6f;
  -webkit-text-stroke: 0.5px rgb(128, 69, 0);
  text-shadow: black 4px 5px 0px;
  font-size: 70px;
  font-family: 'MyFont', sans-serif;
  cursor: context-menu;

  &:after {
    content: 'Beta';
    font-size: 17px;
    position: absolute;
    border: 2px solid rgb(128, 69, 0);
    border-radius: 20px;
    padding: 3px 3px 0px;
    text-shadow: none;
    background: rgb(255, 189, 111);
    color: white;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    font-size: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:after {
      position: relative;
      width: fit-content;
    }
  }
`

export const CreateRoomButton = styled.button`
  padding: 10px 40px;
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

export const JoinButton = styled.button`
  padding: 10px 40px;
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

export const JoinButtonInput = styled.input`
  border: 1px solid;
  font-size: 18px;
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: center;
`

export const OrText = styled.h1`
  font-family: 'MyFont', sans-serif;
  text-align: center;
  color: white;
  font-size: 35px;
  margin: 40px 0;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    font-size: 30px;
    margin: 25px 0;
  }
`

export const HeaderContainer = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`

export const LoadingOverlay = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ loading }) =>
    loading ? 'rgba(0, 0, 0, 0.5)' : 'unset'};
  flex-direction: column;
  z-index: 999999;
  overflow-y: auto;
  overflow-x: hidden;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    height: 100vh;
    overflow: hidden;
  }
`

export const LobbyContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Spinner = styled.div`
  display: ${({ loading }) => (loading ? 'block' : 'none')};
  border-width: 7px;
  border-style: solid;
  border-color: #0bcffe #485bff #485bff;
  border-image: initial;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: 2s linear 0s infinite normal none running spin;
  position: absolute;
  top: 50%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  z-index: 999999;
`

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;

  svg {
    margin: 10px 10px;
    cursor: pointer;
    fill: white;
  }
`

export const FlagsContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    top: 5px;
    right: 0px;
  }

  svg {
    width: 30px;
    height: 30px;
    border-radius: 25px;
    margin: 0 10px;
    cursor: pointer;
  }
`

export const RulesContainer = styled.div`
  height: 300px;
  width: 350px;
  border: 1px solid;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  padding: 10px;
  color: white;
`

export const TitleRules = styled.p`
  font-size: 24px;
  text-decoration: underline;
`

export const RulesList = styled.ul`
  font-size: 18px;
`

export const RulesListItem = styled.li`
  font-size: 18px;
  list-style: none;
  text-align: initial;
  margin: 15px 0;
  line-height: 24px;
`
