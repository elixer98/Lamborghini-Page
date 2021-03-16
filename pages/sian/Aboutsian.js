import React from "react";

const Aboutsian = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="text-yellow-400 font-black">Acerca del Sián Roadster</h3>
        <p className="font-medium">
        El diseño futurista al encuentro de una nueva pureza con el habitáculo descapotable: los contornos largos y esculturales y sus característicos alerones aerodinámicos aportan al Sián Roadster un perfil potente e inconfundible. El frente superbajo, con splitter de fibra de carbono integrado, alberga los icónicos faros con forma de Y de Lamborghini. Diseño puro y despejado, eficiencia aerodinámica mejorada y maestría tecnológica.
        El Sián Roadster es el primer coche superdeportivo Lamborghini híbrido descapotable que emplea, por primera vez en todo el mundo, un supercondensador en solución híbrida y un uso de materiales únicos y ciencia. El cielo que te cubre vibra con el rugido inimitable del V12, el motor más potente de Lamborghini hasta la fecha. Emociones extraordinarias en el camino hacia la electrificación.
                </p>
      </div>
      <div className="about-img">
        <img src="/sian.jpg" alt="about"/>
      </div>
    </div>
  );
};

export default Aboutsian;