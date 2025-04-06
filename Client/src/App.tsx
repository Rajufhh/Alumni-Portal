import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './components/Pages/Home/Home'
import { Login } from './components/Pages/Login/Login'
import { Layout } from './components/Utils/Layout'
import { Profile } from './components/Pages/Profile/Profile'
import { Articles } from './components/Pages/Articles/Articles'
import { Events } from './components/Pages/Events/Events'
import { Jobs } from './components/Pages/Jobs/Jobs'
import { Gallery } from './components/Pages/Gallery/Gallery'
import { Mentor } from './components/Pages/MentorFinder/Mentor'
import { AlumniDirectory } from './components/Pages/AlumniDirectory/AlumniDirectory'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/userSlice'
import { WelcomePage } from './components/Pages/Home/WelcomPage'
import { Chat } from './components/Pages/Chat/Chat'
import { Resources } from './components/Pages/Resources/Resources'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    handleFetchUser();
  }, []);

  const handleFetchUser = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken){
        // User not logged in
        console.log("No access token found. User not logged in");
        return;
      }

      const response = await axios.get("http://localhost:3000/api/user/profile", {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      if (response.data && response.data.data){
        dispatch(setUser(response.data.data));
        console.log("User profile fetched.")
      }
      else{
        console.log("Could not fetch user profile.");
      }
    }
    catch (error) {
      console.error("Error in fetching user profile", error);
    }
  }

  return (
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route element={<Layout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<WelcomePage />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/events' element={<Events />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/find-mentor' element={<Mentor />} />
        <Route path='/alumni-directory' element={<AlumniDirectory />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/profile/:userId' element={<Profile />} />
      </Route>

    </Routes>
  )
}

export default App
