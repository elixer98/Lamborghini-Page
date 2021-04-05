import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Aboutavs from './Aboutavs';
import Coverav from './Coveravs';


export default function mapa22() {
  return (
    <>
      <Head>
        <title>Aventador S</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coverav/>
    <Aboutavs/>
     </>
  )
}
