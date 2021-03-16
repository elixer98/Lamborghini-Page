import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Abouturus from './Abouturus';
import Coverurus from './Coverurus';


export default function mapsad2gds2() {
  return (
    <>
      <Head>
        <title>URUS</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coverurus/>
    <Abouturus/>
     </>
  )
}
