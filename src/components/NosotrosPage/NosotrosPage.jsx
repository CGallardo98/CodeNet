import React from 'react';
import './NosotrosPage.css';

const miembros = [
    {
        nombre: 'Juliana Ramírez Arenas',
        cargo: 'Líder',
        biografia: 'Ingeniera de Sistemas. Desarrolladora Semi Senior BackEnd. La transferencia de conocimiento es mi principal pasión - WTM',
        github: 'https://github.com/ju4n1t4',
        linkedin: 'https://www.linkedin.com/in/julianaramirezarenas/',
        imagen: 'https://i.postimg.cc/bY5fg5XV/2.png'
    },
    {
        nombre: 'Rolando Ortega',
        cargo: 'Relator',
        biografia: 'Estudiante de Ingenieria ambiental, el cual el solucionar problemas es una de sus mayores pasiones.',
        github: 'https://github.com/ROrtegaAyala',
        linkedin: 'https://www.linkedin.com/in/rolando-andrey-ortega-ayala-a574a6222/',
        imagen: 'imagenes/persona2.jpg'
    },
    {
        nombre: 'Carolina Gallardo',
        cargo: 'Desarrolladora',
        biografia: 'Ingeniera electrónica con pasión por la IA y desarrollo de software, enfocada en desarrollar soluciones innovadoras utilizando herramientas y tecnologías emergentes.',
        github: 'https://github.com/CGallardo98',
        linkedin: 'https://www.linkedin.com/in/ing-cgallardo',
        imagen: 'https://i.postimg.cc/3NzMwkCQ/1.png'
    }
];

const NosotrosPage = () => {
    return (
        <div className="nosotros">
            <header>
                <h1>Conoce a Nuestro Equipo</h1>
            </header>
            <section className="equipo">
                {miembros.map((miembro, index) => (
                    <div className="card" key={index}>
                        <img src={miembro.imagen} alt={miembro.nombre} />
                        <h2>{miembro.nombre}</h2>
                        <p><strong>Cargo:</strong> {miembro.cargo}</p>
                        <p><strong>Biografía:</strong> {miembro.biografia}</p>
                        <div className="redes">
                            <a href={miembro.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default NosotrosPage;
