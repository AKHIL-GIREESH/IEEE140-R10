import { Route,Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../components/LandingPage/Landing'
import Login from '../components/Login'
import SignUpChoice from '../components/SignUp/SignUpChoice'
import SignUp from '../components/SignUp/SignUp'
import Profile from '../components/Profile'
import FAQ from '../components/FAQ/FAQ'

function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/FAQ" element={<FAQ/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignUpChoice" element={<SignUpChoice/>} />
    </Routes>
  )
}

export default App