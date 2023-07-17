import React, { useRef } from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalFriendsLink = ({ open, setOpen }) => {
  const { t } = useTranslation()
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
      console.log('textToCopy:', textToCopy);
      console.log('navigator.clipboard:', navigator.clipboard);
      await navigator?.clipboard?.writeText(textToCopy)
      setOpen(false)
      openSnackbar(`${t('Link copiado com sucesso!')}`, 5000)
    }
  }

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              {t('Envie esse link para seus amigos:')}
            </S.TitleContainer>
          </S.ModalHeaderContent>
          <S.CopyLinkContainer>
            <S.NameInput ref={inputRef} value={window.location.href} />
            <S.Button
              onClick={() => {
                handleCopyClick()
              }}
            >
              {t('Copiar link')}
            </S.Button>
          </S.CopyLinkContainer>

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false)
              }}
              data-testid='friends-link-modal-close-button'
            >
              {t('Fechar')}
            </S.ButtonCancel>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalFriendsLink
