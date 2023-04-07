import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/index'
import GlobalStyles from './styles/global'
import Sidebar from './components/Sidebar'

function App() {
  const location = useLocation()
  console.log(location)
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
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
