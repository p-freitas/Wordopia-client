import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import translationEN from './assets/locales/en.json'
import translationES from './assets/locales/es.json'
import translationPT from './assets/locales/pt-br.json'
import Home from './pages/Home/index'
import Lobby from './pages/Lobby'
import GlobalStyles from './styles/global'
import SnackbarProvider from 'react-simple-snackbar'
import ReactGA from 'react-ga'

ReactGA.initialize('G-YPM3SRL8N7')
const browserLanguage = navigator.language || navigator.userLanguage

const App = () => {
  const [lang, setLang] = useState()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      'pt-BR': {
        translation: translationPT,
      },
    },
    lng: localStorage.getItem('i18nextLng') || lang || browserLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  return (
    <div className='App' id='outer-container' style={{overflow: 'auto'}}>
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
