import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ProjectFormPage from './components/ProjectFormPage/ProjectFormPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <HomePage/> }/>
      <Route path='/profile' element={ <ProfilePage/> }/>
      <Route path='/blog-entry/id' element={ <ProjectPage/> }/>
      <Route path='/blog-entry/create' element={ <ProjectFormPage/> }/>
    </Routes>
    </>
  )
}

export default App
