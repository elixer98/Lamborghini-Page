import React from "react";

const Aboutavs = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="text-yellow-400 font-black">Acerca del Aventador S</h3>
        <p className="font-medium">
        El Aventador S exhibe el inconfundible ADN de Lamborghini, reforzando la combinación de dinamismo, refinamiento y agresividad a través de rasgos todavía más afilados. Si gracias al diseño hexagonal de los nuevos terminales de escape la parte posterior se muestra tan potente como el motor de un transbordador, la parte delantera presenta formas que recuerdan las aletas de un tiburón y transmiten la misma fuerza y elegancia a la hora de dominar la carretera.  Cada superficie del Aventador S ha sido estudiada para ganar potencia y mejorar el rendimiento. 
        Después de Miura, Islero, Countach y Urraco, el modelo más icónico de Lamborghini en la actualidad incorpora la herencia de los históricos modelos S y evoluciona al Aventador S. La exclusividad del diseño Lamborghini y un nuevo motor V12 de más de 740 CV se suman a la tecnología más sofisticada de su gama con la LDVA (Lamborghini Dinamica Veicolo Attiva).
        </p>
      </div>
      <div className="about-img">
        <img src="/aventadors.jpg" alt="about"/>
      </div>
    </div>
  );
};

export default Aboutavs;