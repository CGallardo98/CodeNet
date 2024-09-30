import './ProjectPage.css';
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function ProjectPage({ blogEntries, users }) {
  const {id, username} = useParams();

  //Encuentra la entrada correspondiente según el id
  const entry = blogEntries.find((entry) => entry.id === parseInt(id));
  //Encuentra el autor según el username
  const author = users.find(user => username === user.username);
  if (!entry && !author) {
    return <div> Esta publicación no existe! </div>;
  };

  return (
    <div className="blog-entry-page">
      {entry.category ? (
        <span className='category-badge'>{entry.category}</span>
      ) : ('')}
      <h1 className="blog-title">{entry.title}</h1>

      <div className="author-info">
        <img className="author-img"
          src={author.profilePicture}
          alt={ 'Author'} 
        />
        <span className="author-name">{author.name}</span>
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