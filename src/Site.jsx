import './Site.css'
import ProjectPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import { HashRouter, Routes, Route } from "react-router-dom";


function Site() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<ProjectPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default Site
