import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Footer from "../Footer/Footer"; 

export default function HomePage({productos}) {

//Filtro de productos
const [filtroproducto, setFiltroproducto] = useState(productos)  
const masvisitados = "Mas Visitados"
const parati = "Para Ti"
const siguiendo = "Siguiendo"
const ver = (seccion) => {
  if (seccion === "Mas Visitados") {
    setFiltroproducto([...productos.filter(producto => producto.rating > 10)])
  }
  if (seccion === "Para Ti") {
    setFiltroproducto([...productos.filter(producto => producto.rating > 5)])
  }
  if (seccion === "Siguiendo") {
    setFiltroproducto([...productos.filter(producto => producto.autor === 'MoureDev')])
  }
  console.log(filtroproducto)
}

//Constante img
const images = [
  'https://i.postimg.cc/rwkw5xvb/moure.png',
  'https://i.postimg.cc/yxGSVxxK/midu.png',
  'https://i.postimg.cc/50RtzGVq/miriam.png',   
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};


  return (
    
    <>

    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={"Imagen ${index + 1}"} className="carousel-image" />
        </div>
      ))}
    </Slider>
    
    <br />
    <br />
    
    <div>
      <button onClick={()=>ver("Mas Visitados")}>Más Visitados</button>
      <button onClick={()=>ver("Para Ti")}>Para Tí</button>
      <button onClick={()=>ver("Siguiendo")}>Siguiendo</button>
    </div>

    <div className="producto-lista">
      {filtroproducto.map(producto => (
      <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>

    </>
    );
  };

