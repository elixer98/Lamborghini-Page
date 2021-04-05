import React from 'react'
import lambovi from "../public/lambovi.mp4"

function Covercont() {
  
    return (
        <div className="cover-container2">
      <video className="video" src={lambovi} autoPlay loop muted />
      
      <div className="contact-section">

<h1 className="font-bold">Contáctanos</h1>
<div className="border"></div>
<form className="contact-form" action="/contact" method="post">
  <input type="text" className="contact-form-text" placeholder="Nombre"/>
  <input type="email" className="contact-form-text" placeholder="E-mail"/>
  <input type="text" className="contact-form-text" placeholder="Celular"/>
  <textarea className="contact-form-text" placeholder="Mensaje"></textarea>
  <input type="submit" className="contact-form-btn" value="Enviar"/>
  
</form>
</div>

    </div>
    
    )
}

export default Covercont
