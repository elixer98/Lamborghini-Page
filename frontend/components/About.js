import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="text-yellow-400 font-black">Acerca de Lamborghini</h3>
        <p className="font-medium">
        Fundada en 1963, Automobili Lamborghini tiene su sede en Sant'Agata Bolognese, en el norte de Italia. 
        La historia de «Lamborghini Automobili» comienza en 1963 gracias a Ferruccio Lamborghini, nacido en 1916
         bajo el signo de Tauro, un hombre hábil, impetuoso, de fuerte carácter y, sobre todo, el verdadero protagonista del 
         nacimiento de la empresa y de las fases iniciales de su extraordinaria historia. A principios de la posguerra de 
         la Segunda Guerra Mundial, Ferruccio ya había fundado una fábrica de tractores, la cual puso en marcha con 
         energía y determinación, creando un verdadero punto de referencia en el sector.
         A principios de los años sesenta, Lamborghini era un hombre de éxito, fuerte y con las ideas claras, 
         pero cuando dijo que fabricaría un superdeportivo con el que hacer la competencia a Ferrari, muchos 
         pensaron que estaba loco. Fabricar un coche de ese tipo estaba visto como una extravagancia inexplicable,
          un peligroso salto a ciegas, algo que le supondría gastar dinero sin obtener beneficio alguno.
        </p>
      </div>
      <div className="about-img">
        <img src="/cover.jpg" alt="about"/>
      </div>
    </div>
  );
};

export default About;