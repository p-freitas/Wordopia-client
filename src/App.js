import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Lobby from './pages/Lobby'
import GlobalStyles from './styles/global'
import SnackbarProvider from 'react-simple-snackbar'

function App() {
  return (
    <div className='App' id='outer-container'>
      <GlobalStyles />
      <SnackbarProvider>
        <Routes>
          <Route path='/' element={<Lobby />} />
          <Route path='/room/*' element={<Home />} />
        </Routes>
      </SnackbarProvider>
    </div>
  )
}

export default App
