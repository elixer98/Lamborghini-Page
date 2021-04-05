import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";


const Slider = () => {
  return (
    <div className="carousel-container">
     
      <div className="carousel-title">
       <h2 className="font-bold">MODELOS 2021</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={500}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 2,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;