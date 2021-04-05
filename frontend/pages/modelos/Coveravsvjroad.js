import React from 'react'
import lambovi from "../../public/aventadorsvjroad.mp4"

function Coveravsvjroad() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">AVENTADOR SVJ Roadster</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">770 CV        | 566 kW        | 2,9 s </p>
    </div>
   
    )
}

export default Coveravsvjroad
