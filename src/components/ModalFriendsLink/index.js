import React, { useRef } from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import * as S from './styles'

const ModalFriendsLink = ({
  open,
  setOpen,
}) => {
  const inputRef = useRef(null)
  const options = {
    position: 'top-center',
    style: {
      backgroundColor: 'green',
      color: 'white',
      fontFamily: 'MyFont',
      fontSize: '20px',
      textAlign: 'center',
    },
  }
  const [openSnackbar] = useSnackbar(options)

  const handleCopyClick = async () => {
    const inputElement = inputRef.current
    if (inputElement) {
      const textToCopy = inputElement.value
      await navigator.clipboard.writeText(textToCopy)
      setOpen(false)
      openSnackbar('Link copiado com sucesso!', 5000)
    }
  }

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              Envie esse link para seus amigos:{' '}
            </S.TitleContainer>
          </S.ModalHeaderContent>
          <S.CopyLinkContainer>
            <S.NameInput ref={inputRef} value={window.location.href} />
            <S.Button
              onClick={() => {
                handleCopyClick()
              }}
            >
              Copiar link
            </S.Button>
          </S.CopyLinkContainer>

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false)
              }}
            >
              Fechar
            </S.ButtonCancel>
            {/* <S.Button
              disabled={!playerName}
              onClick={() => handleSubmitPlayer()}
            >
              Confirmar
            </S.Button> */}
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalFriendsLink
