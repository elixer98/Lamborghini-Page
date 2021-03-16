import Head from 'next/head'
import Footer from '../components/Footer'

import Navbar2 from '../components/Navbar2'
import Abouthuracanevo from './huracan/Abouthuracanevo'
import Abouthuracanspyder from './huracan/Abouthuracanspyder'
import Abouthuracansto from './huracan/Abouthuracansto'
import Coverhuracanevo from './huracan/Coverhuracanevo'
import Coverhuracanspyder from './huracan/Coverhuracanspyder'
import Coverhuracansto from './huracan/Coverhuracansto'
import Aboutavs from './modelos/Aboutavs'
import Aboutavsroad from './modelos/Aboutavsroad'
import Coverav from './modelos/Coveravs'
import Coveravsroad from './modelos/Coveravsroad'
import Coveravsvj from './modelos/Coveravsvj'
import Aboutavsvj from './modelos/Aboutavsvj'
import Coveravsvjroad from './modelos/Coveravsvjroad'
import Aboutavsvjroad from './modelos/Aboutavsvjroad'
import Coversian from './sian/Coversian'
import Aboutsian from './sian/Aboutsian'
import Abouturus from './urus/Abouturus'
import Coverurus from './urus/Coverurus'




export default function Model() {
  return (
    <>
      <Head>
        <title>Modelos</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Navbar2/>
      <Coverhuracanevo/>
    <Abouthuracanevo/>
    <Coverhuracanspyder/>
    <Abouthuracanspyder/>
    <Coverhuracansto/>
    <Abouthuracansto/>
    <Coverav/>
    <Aboutavs/>
    <Coveravsroad/>
    <Aboutavsroad/>
    <Coveravsvj/>
    <Aboutavsvj/>
    <Coveravsvjroad/>
    <Aboutavsvjroad/>
    <Coversian/>
    <Aboutsian/>
    <Coverurus/>
    <Abouturus/>
    </>
  )
}