import React from "react";

const Abouthuracanevo = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="text-yellow-400 font-black">Acerca del Huracán EVO</h3>
        <p className="font-medium">
        El diseño del Huracán EVO incorpora soluciones aerodinámicas refinadas manteniéndose fiel al icónico diseño de Lamborghini. 
El parachoques delantero retoma la inconfundible y recurrente forma en Y, los cortes del capó se inspiran en las líneas del Countach, la toma de aire sobre el faldón recuerda al Murciélago y los escapes altos en posición central se basan en los modelos Lamborghini con más prestaciones. 
A todo esto se añaden las nuevas llantas Aesir de 20” y nuevos colores Ad Personam para la carrocería. 
Huracán EVO es la evolución del V10 de mayor éxito de la Casa Lamborghini. Se trata del resultado de un proceso de perfeccionamiento y consolidación de características ya existentes y, al mismo tiempo, de desarrollo de nuevas soluciones en términos de prestaciones y diseño. Pero lo que lo distingue es su capacidad de anticipar los movimientos y escuchar los deseos de quien lo conduce
        </p>
      </div>
      <div className="about-img">
        <img src="/huracanevo.jpg" alt="about"/>
      </div>
    </div>
  );
};

export default Abouthuracanevo;