//PreviewPopup.jsx
import './PreviewPopup.css';
import Footer from '../Footer/Footer';
import DOMPurify from 'dompurify';

export default function PreviewPopup({ showPreview, entry, closePreview }) {
  
  if (!showPreview) { //Si no hay nada para mostrar se cierra
    return null;
  }

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        {/* Botón para cerrar la vista previa */}
        <button className="close-btn" onClick={closePreview}>
          &times;
        </button>
        <h4>Vista Previa de la Publicación:</h4>

        <div className="blog-entry-preview">
          <div className='blog-content-preview'>
            <span className='category-badge'>{entry.category}</span>
            <h1 className="blog-title">{entry.title}</h1>

            <div className="author-info-preview">
              <img className="author-img-preview"
                src="https://i.ibb.co/wggkRsK/image-Photoroom.png"
                alt={entry.author || 'Author'} 
              />
              <span className="author-name-preview">{entry.author}</span> 
              <span className="blog-date-preview">
                {new Date().toLocaleDateString()}
              </span>
            </div>  

            <img className="cover-img-preview"
              src={entry.coverImg ? URL.createObjectURL(entry.coverImg) : ''} 
              alt={entry.title} 
            />
            <div 
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.content) }} 
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};