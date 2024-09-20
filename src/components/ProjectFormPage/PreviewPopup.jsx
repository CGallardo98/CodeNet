//PreviewPopup.jsx
import './PreviewPopup.css';
import Footer from '../Footer/Footer';

export default function PreviewPopup({ show, closePreview, post, editPost, publishPost }) {
  
  if (!show) { //Si no hay nada para mostrar se cierra
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Botón para cerrar la vista previa */}
        <button className="close-btn" onClick={closePreview}>
          &times;
        </button>
        <h4>Vista Previa de la Publicación:</h4>

        <div className='blog-entry-preview'>
          { /* Va ubicado el Header */}

          {/* Contenido del Blog*/}
          <div className='blog-content'>
           <p><strong>Categoría:</strong> {post.category}</p>
            <h2>{post.title}</h2>
            {/* Imagen de portada */}
            {post.coverImg && (
              <img 
                src={URL.createObjectURL(post.coverImg)} 
                alt="Cover" 
                className="cover-img-preview"
              />
            )}
            <p>{post.content}</p>
            <p><strong>Link de GitHub:</strong> {post.githubLink}</p>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};