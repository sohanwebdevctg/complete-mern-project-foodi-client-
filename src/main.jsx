import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'
import { router } from './Routes/Routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} /> 
    </AuthProvider>
  </StrictMode>,
)
