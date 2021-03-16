
import '../styles/about.css'
import '../styles/navbar2.css'
import '../styles/navbar3.css'
import '../styles/Slider.css'
import '../styles/footer.css'
import '../styles/cierre.css'
import '../styles/darkmode.css'
import "tailwindcss/tailwind.css";
import React from 'react'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }) {

  

  return (
   
      <>
      <Component {...pageProps} />
    <Footer/>
    
    </>
  )
}

export default MyApp
