import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { InterviewExperiences } from './components/InterviewExperiences'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route element={<Layout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/interview-experiences' element={<InterviewExperiences />} />
      </Route>

    </Routes>
  )
}

export default App
