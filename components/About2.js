import React from "react";

const About2 = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="text-yellow-400 font-black">Nuestro Concesionario</h3>
        <p className="font-medium">
        Inaugurado en 2021, el concesionario Lamborghini México tiene ni más ni menos 
        que 1.800 metros cuadrados repartidos en tres plantas. Es un mastodonte de 
        cristal que refleja la imagen de poderío y grandiosidad de una marca que no para de crecer en los últimos años
        Eso es lo que encontramos en la primera de las tres plantas, donde también está ubicado un taller
        dotado de las últimas tecnologías y herramientas disponibles.
        Además del área de exposición donde cuentan con muchas unidades de Huracán y Aventador, destacan también las 
        gigantescas zonas de boutique y por supuesto el área de taller donde se llevan a cabo los mantenimientos preventivos 
        y posibles reparaciones a sus superdeportivos.
        
        </p>
      </div>
      <div className="about-img">
        <img src="/concesionario.jpg" alt="about"/>
      </div>
    </div>
  );
};

export default About2;