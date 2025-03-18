import { Route, Routes } from 'react-router'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
