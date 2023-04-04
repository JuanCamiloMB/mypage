import './Site.css'
import ProjectPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Site() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProjectPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Site
