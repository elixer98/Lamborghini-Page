import Head from 'next/head'
import About2 from '../../components/About2';

import Navbar2 from '../../components/Navbar2';
import Abouthuracanevo from './Abouthuracanevo';
import Coverhuracanevo from './Coverhuracanevo';


export default function mapsa2ds2() {
  return (
    <>
      <Head>
        <title>Huracán EVO</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
     <Navbar2/>
    <Coverhuracanevo/>
    <Abouthuracanevo/>
     </>
  )
}
