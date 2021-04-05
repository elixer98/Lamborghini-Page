import React from 'react'
import lambovi from "../public/lambovi.mp4"

function Cover() {
  
    return (
        <div className="cover-container">
      <video className="video" src={lambovi} autoPlay loop muted />
      <h1 className="font-sans font-family:Roboto">DESPIERTA LA BESTIA</h1>
      <p className="font-sans font-family:Roboto ">Potencia | Velocidad | Estilo | Performance </p>
    </div>
    )
}

export default Cover
