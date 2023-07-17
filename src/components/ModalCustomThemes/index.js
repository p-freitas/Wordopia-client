import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalCustomThemes = ({
  open,
  setOpen,
  handleCreateRoomButton,
  activeLetter,
  themesList,
  setThemesList,
}) => {
  const { t } = useTranslation()
  const [themeName, setThemeName] = useState()

  const handleAddTheme = theme => {
    if (theme !== undefined || theme !== null || theme !== '') {
      const updatedArray = [...themesList, theme]
      setThemesList(updatedArray)
      setThemeName('')
    }
  }

  const handleThemeNameChange = event => {
    if (event.target.value.length <= 30) {
      setThemeName(event.target.value)
    }
  }

  const handleTagClick = themeName => {
    setThemesList(themesList.filter(theme => theme !== themeName))
  }

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && event.target.getAttribute('data-testid') === 'modal-testid') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [open, setOpen])

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning data-testid='custom-themes-modal-title'>
              {t('Adicione novos temas')}
            </S.TextWarning>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.TagsContainer>
              {themesList?.map(theme => {
                return (
                  <S.ThemeTag
                    key={theme}
                    onClick={() => handleTagClick(theme)}
                    data-testid='theme-tag'
                  >
                    {theme}
                  </S.ThemeTag>
                )
              })}
            </S.TagsContainer>
            <S.InputContainer>
              <S.NameInput
                value={themeName}
                onChange={e => handleThemeNameChange(e)}
                placeholder={t('Digite o tema')}
              />
              <S.ButtonAdd
                disabled={!themeName}
                onClick={() => {
                  handleAddTheme(themeName)
                }}
              >
                +
              </S.ButtonAdd>
            </S.InputContainer>
            <S.ButtonsContainer>
              <S.Button onClick={() => setOpen(false)}>{t('Fechar')}</S.Button>
              <S.CreateRoomButton
                onClick={() => handleCreateRoomButton(activeLetter)}
                data-testid='custom-themes-create-room-button'
              >
                {t('CRIAR SALA')}
              </S.CreateRoomButton>
            </S.ButtonsContainer>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalCustomThemes
