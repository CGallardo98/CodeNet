import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ImageSection from "./ImageSection";
import "./HomePage.css";

export default function HomePage({productos}) {

//Filtro de productos
const [filtroproducto, setFiltroproducto] = useState(productos)  

const ver = (seccion) => {
  if (seccion === "Todos") {
    console.log("productos",productos)
    setFiltroproducto([...productos])
  }
  if (seccion === "Mas Visitados") {
    setFiltroproducto([...productos.filter(producto => producto.rating > 10)])
  }
  if (seccion === "Para Ti") {
    setFiltroproducto([...productos.filter(producto => producto.rating > 5)])
  }
  if (seccion === "Siguiendo") {
    setFiltroproducto([...productos.filter(producto => producto.autor === 'MoureDev')])
  }

  setActiveButton(seccion)
}

//Constante img para Slider
const images = [
  'https://i.postimg.cc/0y76H3b2/mour.png',
  'https://i.postimg.cc/0NwqfRQc/midud.png',
  'https://i.postimg.cc/3Jx5qDNy/mm.png',   
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

const [activeButton, setActiveButton] = useState("Todos");

  return (
    
    <>
    <ImageSection />    
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
      <button 
      className={activeButton === "Todos"?"activate":''}
      onClick={()=>ver("Todos")}>Todos</button>
      <button 
      className={activeButton === "Mas Visitados"?"activate":''}
      onClick={()=>ver("Mas Visitados")}>Más Visitados</button>
      <button 
      className={activeButton === "Para Ti"?"activate":''}
      onClick={()=>ver("Para Ti")}>Para Tí</button>
      <button 
      className={activeButton === "Siguiendo"?"activate":''}
      onClick={()=>ver("Siguiendo")}>Siguiendo</button>
    
    </div>

    

    <div className="producto-lista">
      {filtroproducto.map(producto => (
      <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>

    </>
    );
  };
