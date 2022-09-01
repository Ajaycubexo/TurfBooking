import React from 'react'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import GamingLibrary from './Components/GamingLibrary'
import Header from './Components/Header'
import Popular from './Components/Popular'

const App = () => {
  return (
   <>
   <Header/>
   <Banner/>
   <Popular/>
   <GamingLibrary/>
   <Footer/>
   </>
  )
}

export default App