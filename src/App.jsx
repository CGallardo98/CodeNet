import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (

    <Routes>
      <Route path='/' element={ <HomePage/> }/>
      <Route path='/profile' element={ <ProfilePage/> }/>
      <Route path='/project-name' element={ <ProjectPage/> }/>
      <Route path='/search' element={ <SearchPage/> }/>
    </Routes>
    
  )
}

export default App
