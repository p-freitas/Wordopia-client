import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import translationEN from './assets/locales/en.json'
import translationES from './assets/locales/es.json'
import Home from './pages/Home/index'
import Lobby from './pages/Lobby'
import GlobalStyles from './styles/global'
import SnackbarProvider from 'react-simple-snackbar'

const browserLanguage = navigator.language || navigator.userLanguage

const App = () => {
  const [lang, setLang] = useState()

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: localStorage.getItem('i18nextLng') || lang || browserLanguage,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  })
  return (
    <div className='App' id='outer-container'>
      <GlobalStyles />
      <SnackbarProvider>
        <Routes>
          <Route path='/' element={<Lobby setLang={setLang} />} />
          <Route path='/room/*' element={<Home />} />
        </Routes>
      </SnackbarProvider>
    </div>
  )
}

export default App
