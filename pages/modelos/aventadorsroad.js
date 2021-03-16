import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Aboutavsroad from './Aboutavsroad';
import Coveravsroad from './Coveravsroad';


export default function mapa212() {
  return (
    <>
      <Head>
        <title>Aventador S Roadster</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coveravsroad/>
    <Aboutavsroad/>
     </>
  )
}
