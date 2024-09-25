import './ProjectPage.css';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function ProjectPage({ blogEntries }) {
  const {id, autor} = useParams();

  // Decodifica el nombre del autor
  const entry = blogEntries.find((entry) => entry.id === parseInt(id) && entry.autor === autor);
  if (!entry) {
    return <div> Esta publicación no existe! </div>;
  };
  const decodedAutor = decodeURIComponent(entry.autor);
  

  return (
    <div className="blog-entry-page">
      {entry.category ? (
        <span className='category-badge'>{entry.category}</span>
      ) : ('')}
      <h1 className="blog-title">{entry.title}</h1>

      <div className="author-info">
        <img className="author-img"
          src={entry.userImg}
          alt={decodedAutor || 'Author'} 
        />
        <span className="author-name">{decodedAutor}</span>
        <span className="blog-date">
          {entry.date ? new Date(entry.date).toLocaleDateString() : ''}
        </span>
      </div>  

      <img className="cover-image-entry"
        src={entry.coverImg} 
        alt={entry.title} 
      />
      <div className='entry-content'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.content) }} 
      />
    </div>
  );
  }