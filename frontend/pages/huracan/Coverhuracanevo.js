import React from 'react'
import lambovi from "../../public/huracanevo.mp4"

function Coverhuracanevo() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">Huracán EVO</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">640 CV        | 470 kW        | 2,9 s </p>
    </div>
   
    )
}

export default Coverhuracanevo
