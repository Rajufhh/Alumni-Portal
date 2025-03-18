import { Route, Routes } from 'react-router'
import './App.css'
import { Homepage } from './components/Homepage'
import { Login } from './components/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Homepage />} />
    </Routes>
  )
}

export default App
