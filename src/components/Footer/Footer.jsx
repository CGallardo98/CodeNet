import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Nosotros</h3>
        <p>Somos un grupo de desarrolladores</p>
        <p>entusiastas y deseosos de aprender.</p>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <button onClick={() => navigate("/")}>Inicio</button> {/*Boton que manda a Inicio*/}
        <button onClick={() => navigate("/profile")}>Perfil</button> {/*Boton que manda a Perfil*/}
        <button>Nosotros</button>
      </div>

      <div className="footer-section">
        <h3>Categorías</h3>
        <button>Programación</button>
        <button>FrontEnd</button>
        <button>BackEnd</button>
        <button>FullStack</button>
      </div>

      <SubscribeForm />

      <div className="footer-bottom">
       <img
        src="https://i.ibb.co/wggkRsK/image-Photoroom.png"
        alt="Logo de la empresa"
        className="footer-logo"
          />
        <p>CodeNet © All Rights Reserved.</p>
        <p>
          <a href="#">Términos de Uso</a> | <a href="#">Política de Privacidad</a> |{" "}
          <a href="#">Manejo de Cookies</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
