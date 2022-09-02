import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import BookNow from './Components/BookNow'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Loginsignup from './Components/Loginsignup'
import Header from './Components/Header'


const App = () => {
  return (
   <>
  
  
   <BrowserRouter>
    <Header/>
   <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/bookNow" element={<BookNow/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/loginsignup" element={<Loginsignup/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App