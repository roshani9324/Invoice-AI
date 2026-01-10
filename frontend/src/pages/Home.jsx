import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Feature from '../components/Features.jsx'
import Pricing from '../components/Pricing.jsx'
import Footer from '../components/Footer.jsx';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <main className=''>
       <Hero/>
       <div className=''>
       <Feature/>
       </div>
       <Pricing/>

      </main>
      <Footer/>
    </div>
  )
}

export default Home
