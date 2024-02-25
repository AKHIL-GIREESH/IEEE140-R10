import './App.css'
import LandingPage from '../components/Landing'
import Login from '../components/Login'
import SignUpChoice from '../components/SignUpChoice'
import SignUp from '../components/SignUp'

function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App