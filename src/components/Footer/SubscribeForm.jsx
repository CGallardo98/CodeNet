import React, { useState } from "react";
import "./Footer.css";

function SubscribeForm() {
  const [email, setEmail] = useState(""); // Estado para controlar el valor del input
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  // Función de validación de email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Email enviado:", email); // Aquí puedes agregar la lógica para enviar el correo
      setEmail(""); // Limpiar el campo de texto
      setErrorMessage(""); // Limpiar mensaje de error
    } else {
      setErrorMessage("Por favor, introduce una dirección de correo válida.\nEjemplo: pepitoperez@raton.com");
    }
  };

  return (
    <div className="footer-section">
      <h3>Boletín</h3>
      <h3>Recibe Nuestro boletín semanal</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe Tu Correo"
          value={email} // El valor del input está controlado por el estado
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando el usuario escribe
        />
        <button type="submit">Suscribete</button>
      </form>
      {/* Mostrar el mensaje de error si el email no es válido */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default SubscribeForm;