import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterContextProvider, RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import ThemeProvider from './Providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </>,
)
