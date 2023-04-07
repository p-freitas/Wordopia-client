import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/index'
import HomeMobile from './pages/Home/Mobile/index'
import GlobalStyles from './styles/global'
import Sidebar from './components/Sidebar'

function App() {
  const location = useLocation()
  const windowWidth = window.innerWidth;

  console.log(windowWidth)
  return (
    <div className='App' id='outer-container'>
      {location.pathname !== '/password' && location.pathname !== '/' && (
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
      )}
      <GlobalStyles />
      <Routes>
        {windowWidth < 768 ? (
          <Route path='/' element={<HomeMobile />} />
        ) : (
          <Route path='/' element={<Home />} />
        )}
      </Routes>
    </div>
  )
}

export default App
