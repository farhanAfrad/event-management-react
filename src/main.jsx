import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import Layout from './layout/Layout'
import AuthProvider from './AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}>
        <Layout></Layout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
