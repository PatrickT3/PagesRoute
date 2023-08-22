import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import { Auth } from './contexts/auth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Auth>  
          <App/>
        </Auth>
      </BrowserRouter>
  </React.StrictMode>
)
