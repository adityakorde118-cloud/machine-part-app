import React from 'react'
import {Route, Router, Routes} from 'react-router-dom' 
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import   Contact from './pages/contact'



function App() {
  return (
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='projects' element={<Projects/>}/>
    </Routes>
    )
}

export default App