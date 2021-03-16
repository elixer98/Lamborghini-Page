import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Abouthuracansto from './Abouthuracansto';
import Coverhuracansto from './Coverhuracansto';


export default function mapsad2dffs2() {
  return (
    <>
      <Head>
        <title>Huracán STO</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coverhuracansto/>
    <Abouthuracansto/>
     </>
  )
}
