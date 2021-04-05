import Link from 'next/link'

const slidesInfo = [
  {
    src:
      "/aventadors.jpg",
    alt: "Project 1",
    desc: "Aventador S",
    ruta:"/modelos/aventadors",
  },
  {
    src:
      "/aventadorsroad.jpg",
    alt: "Project 4",
    desc: "Aventador S Roadster",
    ruta:"/modelos/aventadorsroad",
  },
  {
    src:
      "/aventadorsvj.jpg",
    alt: "Project 5",
    desc: "Aventador SVJ",
    ruta:"/modelos/aventadorsvj",
  },
  {
    src:
      "/aventadorsvjroad.jpg",
    alt: "Project 6",
    desc: "Aventador SVJ Roadster",
    ruta:"/modelos/aventadorsvjroad",
  },
  {
    src:
      "/huracanevo.jpg",
    alt: "Project 2",
    desc: "Huracán Evo",
    ruta:"/huracan/huracanevo",
  },
  {
    src:
      "/huracanspyder.jpg",
    alt: "Project 7",
    desc: "Huracán Evo Spyder",
    ruta:"/huracan/huracanspyder",
  },
  {
    src:
      "/huracansto.jpg",
    alt: "Project 8",
    desc: "Huracán STO",
    ruta:"huracan/huracansto",
  },
  {
    src:
      "/urus.jpg",
    alt: "Project 3",
    desc: "Urus",
    ruta:"/urus/urus",
  },
  {
    src:
      "/sian.jpg",
    alt: "Project 9",
    desc: "Sián Roadster",
    ruta:"/sian/sian",
  },
  
];

const slides = slidesInfo.map((slide) => (
  <Link href={slide.ruta}>
  <div className="slide-container">

    <img src={slide.src} alt={slide.alt} />
    <div className="text-yellow-400 font-bold slide-desc">
      <span>{slide.desc}</span>
    </div>
    
  </div>
  </Link>
));

export default slides;