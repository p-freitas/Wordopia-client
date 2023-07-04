import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import * as S from './styles'

const ModalRemovePlayer = ({
  open,
  setOpen,
  players,
  socket,
  roomId,
  playersOut,
  currentTurn,
  winner,
}) => {
  const [SelectValue, setSelectValue] = useState()
  const [playersFiltered, setPlayersFiltered] = useState()

  useEffect(() => {
    const filteredArray = players?.filter(
      item =>
        !playersOut?.some(
          otherItem => otherItem !== null && otherItem?.id === item?.id
        )
    )
    setPlayersFiltered(filteredArray)
  }, [players, playersOut])

  const playersList = playersFiltered?.map(el => {
    return {
      value: el?.id,
      label: el?.name,
    }
  })

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              Selecione o jogador que será eliminado:{' '}
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
                socket.emit(
                  'removePlayer',
                  { id: SelectValue.value, playerName: SelectValue.label },
                  roomId,
                  true
                )
                currentTurn?.id === SelectValue?.value &&
                  socket.emit('changeTurnPlayer', roomId, SelectValue.value)
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

export default ModalRemovePlayer
