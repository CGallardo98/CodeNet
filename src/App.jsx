import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ProjectFormPage from './components/ProjectFormPage/ProjectFormPage';
import Footer from './components/Footer/Footer'; // Importa el Footer

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/profile' element={ <ProfilePage/> }/>
        <Route path='/project-name' element={ <ProjectPage/> }/>
        <Route path='/search' element={ <ProjectFormPage/> }/>
      </Routes>
      <Footer /> {/* El footer presente en todas las páginas */}
    </>
  );
}

export default App;
