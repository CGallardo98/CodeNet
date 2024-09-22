import './ProjectPage.css';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function ProjectPage({ blogEntries }) {
  const {id} = useParams();
  const entry = blogEntries.find((entry) => entry.id === parseInt(id));
  if (!entry) {
    return <div>Esta publicación no existe! </div>;
  };

  return (
    <div className="blog-entry-page">
      <span className='category-badge'>{entry.category}</span>
      <h1 className="blog-title">{entry.title}</h1>

      <div className="author-info">
        <img className="author-img"
          src="/mouredev.png" 
          alt={entry.author || 'Author'} 
        />
        <span className="author-name">{entry.author}</span> 
        <span className="blog-date">
          {entry.date ? new Date(entry.date).toLocaleDateString() : ''}
        </span>
      </div>  

      <img className="cover-image"
        src={entry.coverImg} 
        alt={entry.title} 
      />
      <div 
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.content) }} 
      />
    </div>
  );
  }