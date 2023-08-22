import './App.css'
import Menu from './components/menu'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Cont from './pages/Cont'
import Login from './pages/login'

function App() {

  return ( 
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Cont' element={<Cont/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
