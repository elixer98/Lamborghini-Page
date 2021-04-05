import React from 'react'
import lambovi from "../../public/aventadors.mp4"

function Coverav() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">AVENTADOR S</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">740 CV        | 544 kW        | 3,00 s </p>
    </div>
   
    )
}

export default Coverav
