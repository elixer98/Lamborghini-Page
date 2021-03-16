import React from 'react'
import lambovi from "../../public/aventadorsvj.mp4"

function Coveravsvj() {
  
    return (
     
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">AVENTADOR SVJ</h1>
      <p className="font-sans font-family:Roboto ">Potencia (CV) | Potencia (KW) | 0-100 km/h</p>
      <p className="font-sans font-family:Roboto ">770 CV        | 566 kW        | 2,8 s </p>
    </div>
   
    )
}

export default Coveravsvj
