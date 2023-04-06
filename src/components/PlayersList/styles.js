import styled from 'styled-components'

export const ScoreboardContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  color: white;
`

export const ScoreboardTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 40px;
  border-bottom: 3px solid;
  padding-bottom: 10px;
`

export const ScoreboardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 270px;
`

export const ScoreboardListItem = styled.p`
  width: fit-content;
  max-width: 300px;
  font-size: 28px;
  margin-bottom: 25px;
  color: ${({ color }) => (color ? '#00f7ec' : 'white')};
  color: ${({ colorLost }) => colorLost && 'red!important'};
  border-bottom: ${({ color }) => (color ? '1px solid #00f7ec' : 'unset')};
  overflow-wrap: break-word;
`

export const PlayerNameContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export const CurrentLetterContainer = styled.p`
  border: 1px solid white;
  font-size: 25px;
  padding: 2px 10px;
  margin-left: 15px;
`
