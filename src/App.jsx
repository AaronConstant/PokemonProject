import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

//Pages
import About from './Pages/About'
import Trainer from './Pages/Trainer'
import HomePage from './Pages/HomePage'

function App() {



  return (
    <nav>
    <NavBar/>

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={ <About /> }> About </Route>
      <Route path='/trainer' element={ <Trainer /> }> Trainer </Route>
      <Route></Route>



    </Routes>
    </nav>
  )
}

export default App
