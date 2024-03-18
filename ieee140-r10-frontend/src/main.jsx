import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../components/LandingPage/Landing.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import SignUpChoice from '../components/SignUp/SignUpChoice.jsx'
import Login from '../components/Login.jsx'
import Profile from '../components/Profile.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/signUp",
    element:<SignUp/>
  },
  {
    path:"/signUpChoice",
    element:<SignUpChoice/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path:"/FAQ",
    element:<FAQ/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)