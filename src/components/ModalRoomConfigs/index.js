import React, { useState } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalRoomConfigs = ({
  open,
  setOpen,
  handleCreateRoomButton,
  setRoundsSelectValue,
  setTimerSelectValue,
}) => {
  const { t } = useTranslation()
  const lettersOptions = [...Array(26)].map((_, index) =>
    String.fromCharCode(65 + index)
  )

  const [activeLetter, setActiveLetter] = useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'L',
    'M',
    'N',
    'O',
    'P',
    'R',
    'S',
    'T',
    'U',
    'V',
    'Z',
  ])
  const CloseIcon = <S.Icon className='far fa-times-circle'></S.Icon>
  const handleClick = () => {
    setOpen(false)
  }

  const handleClickLetter = selectedLetter => {
    if (!activeLetter?.includes(selectedLetter)) {
      const updatedArray = [...activeLetter, selectedLetter]
      setActiveLetter(updatedArray)
    } else {
      const updatedArray = activeLetter.filter(str => str !== selectedLetter)
      setActiveLetter(updatedArray)
    }
  }

  const roundsOptions = [
    { value: 3, label: '3' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
  ]

  const timerOptions = [
    { value: 10, label: '10 segundos' },
    { value: 15, label: '15 segundos' },
    { value: 20, label: '20 segundos' },
    { value: 30, label: '30 segundos' },
  ]

  if (open) {
    return (
      <S.Container data-testid='modal-testid' isOpen={open}>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>{t('Configurações')}</S.TitleContainer>
            <S.Button
              onClick={handleClick}
              aria-label='Mute audio'
              aria-pressed='false'
              type='button'
            >
              {CloseIcon}
            </S.Button>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.ConfigsContainer>
              <S.SettingsContainer>
                <S.TitleConfigsContainer>
                  {t('Configurações da sala')}
                </S.TitleConfigsContainer>
                <S.BodySettingsContainer>
                  <S.SettingContainer>
                    <S.SelectText>Timer:</S.SelectText>
                    <Select
                      id='select-timer'
                      placeholder={'Selecione aqui'}
                      options={timerOptions}
                      defaultValue={timerOptions[0]}
                      isSearchable={false}
                      onChange={el => setTimerSelectValue(el)}
                      color
                    />
                  </S.SettingContainer>
                  <S.SettingContainer>
                    <S.SelectText>
                      {t('Pontos para vencer o jogo:')}
                    </S.SelectText>
                    <Select
                      id='select-rounds'
                      placeholder={'Selecione aqui'}
                      options={roundsOptions}
                      defaultValue={roundsOptions[0]}
                      isSearchable={false}
                      onChange={el => setRoundsSelectValue(el)}
                    />
                  </S.SettingContainer>
                </S.BodySettingsContainer>
              </S.SettingsContainer>
              <S.ThemesContainer>
                <S.TitleConfigsContainer>
                  {t('Personalize os temas')}
                </S.TitleConfigsContainer>
                <S.BodyThemesContainer>{t('Em breve!')}</S.BodyThemesContainer>
              </S.ThemesContainer>
              <S.LettersContainer>
                <S.TitleConfigsContainer>{t('Letras')}</S.TitleConfigsContainer>
                <S.BodyLettersContainer>
                  {lettersOptions.map(letter => (
                    <S.Letter
                      key={letter}
                      onClick={() => handleClickLetter(letter)}
                      background={!activeLetter?.includes(letter) ? '0.2' : '1'}
                    >
                      {letter}
                    </S.Letter>
                  ))}
                </S.BodyLettersContainer>
              </S.LettersContainer>
            </S.ConfigsContainer>
            <S.CreateRoomButton
              onClick={() => handleCreateRoomButton(activeLetter)}
            >
              {t('CRIAR SALA')}
            </S.CreateRoomButton>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalRoomConfigs
