import React, { useState } from 'react'
import Select from 'react-select'
import * as S from './styles'

const ModalRemovePlayer = ({ open, setOpen, players, socket, roomId }) => {
  const [SelectValue, setSelectValue] = useState()

  const playersList = players?.map(el => {
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
                socket.emit('removePlayer', {id: SelectValue.value, playerName: SelectValue.label}, roomId, true)
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
