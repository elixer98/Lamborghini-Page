import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Aboutavsvjroad from './Aboutavsvjroad';
import Coveravsvjroad from './Coveravsvjroad';


export default function mapa2ds2() {
  return (
    <>
      <Head>
        <title>Aventador SVJ Roadster</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coveravsvjroad/>
    <Aboutavsvjroad/>
     </>
  )
}
