import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './components/Pages/Home/Home'
import { Login } from './components/Pages/Login/Login'
import { Layout } from './components/Utils/Layout'
import { Profile } from './components/Utils/Profile'
import { InterviewExperiences } from './components/Pages/InterviewExperiences/InterviewExperiences'
import { Events } from './components/Pages/Events/Events'
import { Jobs } from './components/Pages/Jobs/Jobs'
import { Gallery } from './components/Pages/Gallery/Gallery'
import { Mentor } from './components/Pages/MentorFinder/Mentor'
import { AlumniDirectory } from './components/Pages/AlumniDirectory/AlumniDirectory'

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
