import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Abouthuracanspyder from './Abouthuracanspyder';
import Coverhuracanspyder from './Coverhuracanspyder';


export default function mapsad2ds2() {
  return (
    <>
      <Head>
        <title>Huracán EVO Spyder</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coverhuracanspyder/>
    <Abouthuracanspyder/>
     </>
  )
}
