import Head from 'next/head'
import About2 from '../components/About2';
import Ccon from '../components/Ccon';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';


export default function Contact() {
  return (
    <>
         <Head>
        <title>Contacto</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Navbar2/>
      
<Ccon/>
      


        </>
  )
}