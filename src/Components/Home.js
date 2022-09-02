import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import GamingLibrary from './GamingLibrary'
import Header from './Header'
import Loginsignup from './Loginsignup'
import Popular from './Popular'

const Home = () => {
  return (
    <>
    
    <Header/>
    <Banner/>
    <Popular/>
    <GamingLibrary/>
    <Footer/>
    <Loginsignup/>
    </>
  )
}

export default Home;