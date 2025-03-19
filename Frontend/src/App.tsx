import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { InterviewExperiences } from './components/InterviewExperiences'
import { Events } from './components/Events'
import { Jobs } from './components/Jobs'
import { Gallery } from './components/Gallery'
import { Mentor } from './components/Mentor'
import { AlumniDirectory } from './components/AlumniDirectory'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route element={<Layout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/interview-experiences' element={<InterviewExperiences />} />
        <Route path='/events' element={<Events />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/find-mentor' element={<Mentor />} />
        <Route path='/alumni-directory' element={<AlumniDirectory />} />
      </Route>

    </Routes>
  )
}

export default App
