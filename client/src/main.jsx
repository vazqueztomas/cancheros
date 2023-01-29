import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { setupServices } from '../services/services'
import App from './App'
import './index.css'
import Login from './Login'
import Signup from './Signup'
import Successfull from './Successfull'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/successfull',
    element: <Successfull/>
  }
])

setupServices();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
