import React from 'react'
import lambovi from "../../public/urus.mp4"

function Coverurus() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">URUS</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">650 CV        | 478 kW        | 3,6 s </p>
    </div>
   
    )
}

export default Coverurus
