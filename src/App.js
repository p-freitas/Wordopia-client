import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
// import HomeMobile from './pages/Home/Mobile/index'
import Lobby from './pages/Lobby'
import GlobalStyles from './styles/global'
import SnackbarProvider from 'react-simple-snackbar'

function App() {
  // const windowWidth = window.innerWidth
  return (
    <div className='App' id='outer-container'>
      <GlobalStyles />
      <SnackbarProvider>
        <Routes>
          <Route path='/' element={<Lobby />} />
          {/* {windowWidth < 768 ? ( */}
          {/* <Route path='/room/*' element={<HomeMobile />} /> */}
          {/* ) : ( */}

          <Route path='/room/*' element={<Home />} />
          {/* )} */}
        </Routes>
      </SnackbarProvider>
    </div>
  )
}

export default App
