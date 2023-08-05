import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import './main.css'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <App/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
