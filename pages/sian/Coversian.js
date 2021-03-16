import React from 'react'
import lambovi from "../../public/sian.mp4"

function Coversian() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">Sián Roadster</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">819 CV        | 602 kW        | 2.9 s </p>
    </div>
   
    )
}

export default Coversian
