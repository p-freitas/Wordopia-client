import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  flex-direction: column;
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
`

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 60px;
  font-family: 'MyFont', sans-serif;
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

export const JoinButton = styled.button`
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
`

export const HeaderContainer = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`
