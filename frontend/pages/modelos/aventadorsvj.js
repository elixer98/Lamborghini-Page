import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Aboutavsvj from './Aboutavsvj';
import Coveravsvj from './Coveravsvj';


export default function mapa2s2() {
  return (
    <>
      <Head>
        <title>Aventador SVJ</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coveravsvj/>
    <Aboutavsvj/>
     </>
  )
}
