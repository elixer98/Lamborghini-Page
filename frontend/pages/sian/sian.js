import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Aboutsian from './Aboutsian';
import Coversian from './Coversian';


export default function mapsad2gds2() {
  return (
    <>
      <Head>
        <title>Sián Roadster</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coversian/>
    <Aboutsian/>
     </>
  )
}
