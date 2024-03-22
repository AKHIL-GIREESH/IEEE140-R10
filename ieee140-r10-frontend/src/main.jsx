import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage/Components/Landing.jsx'
import SignUp from '../Pages/SignUp/SignUp.jsx'
import SignUpChoice from '../Pages/SignUp/SignUpChoice.jsx'
import Login from '../Pages/Login/Login.jsx'
import Profile from '../Pages/Profile.jsx'
import FAQ from '../Pages/FAQ/FAQ.jsx'
import AuthProvider from './AuthProvider.jsx'


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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)