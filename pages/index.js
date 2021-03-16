import Head from 'next/head'
import React, {useState,useEffect } from 'react'
import Cover from '../components/Cover'
import lambovi from '../public/lambovi.mp4'
import About from '../components/About'
import Slider from '../components/Slider'
import Navbar2 from '../components/Navbar2';
import About2 from '../components/About2'
import Cierre from '../components/Cierre'





export default function Home() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <Head>
        <title>Lamborghini Mexico</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Navbar2 isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider/>
      <About2/>
      <Cierre/>
      <footer className="footer">
         <img src="/about.jpg" width="100%"/>
      </footer>
      
          
    </>
  )
}
