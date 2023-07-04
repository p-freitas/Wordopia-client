import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import * as S from './styles'

const ModalChangePlayerTurn = ({
  open,
  setOpen,
  players,
  socket,
  roomId,
  playersOut,
}) => {
  const [SelectValue, setSelectValue] = useState()
  const [playersFiltered, setPlayersFiltered] = useState()

  useEffect(() => {
    const filteredArray = players?.filter(
      item => !playersOut?.some(otherItem => otherItem.id === item.id)
    )
    setPlayersFiltered(filteredArray)
  }, [players, playersOut])

  const playersList = playersFiltered?.map(el => {
    return {
      value: el.id,
      label: el.name,
    }
  })

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              Selecione para qual jogador será o turno:
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <Select
            id='select'
            isClearable
            placeholder={'Selecione aqui'}
            options={playersList}
            onChange={el => setSelectValue(el)}
          />

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false)
              }}
            >
              Fechar
            </S.ButtonCancel>
            <S.Button
              disabled={!SelectValue}
              onClick={() => {
                setSelectValue('')
                socket.emit('changeTurnPlayer', roomId, SelectValue.value, true)
                socket.emit('cleanCurrentLetter', roomId)
                setOpen(false)
              }}
            >
              Confirmar
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalChangePlayerTurn
