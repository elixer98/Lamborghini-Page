import Head from 'next/head'
import About2 from '../components/About2';

import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';


export default function mapa() {
  return (
    <>
      <Head>
        <title>Concesionario</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    
     <About2/>
     </>
  )
}

