import Head from 'next/head'
import About2 from '../components/About2';
import Map from '../components/Mapb';
import Navbar2 from '../components/Navbar2';


export default function mapa0() {
  return (
    <>
      <Head>
        <title>Mapa</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Map/>
     
     </>
  )
}

