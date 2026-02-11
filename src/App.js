
import './App.css';

import Project from './Components/ListOfProject.js'
import About from './Components/About.js'
import Home from './Components/Home.js'

import {Route,Routes, Link} from 'react-router-dom'; 



function App() {


  return (
    <div className="App">
      <header className="App-header">
      <nav className='navBar'>
        <div className='onfocus'><Link to="/" className='homeLink'>Home</Link></div>
      
        <div className='onfocus'><Link to="/project" className='projectLink'>Projects</Link></div>
       
        <div className='onfocus'><Link to="/about" className='aboutLink'>About</Link></div>
      </nav>
      </header>

     
     
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='project' element={<Project />} ></Route>
        
        <Route path='about' element={<About /> } ></Route>
       
      </Routes>
      <footer className="App-footer">
        <div className='bottomNavBar'>
        <div><a href='https://github.com/shrutika241998'><img src='/icons8-github-24.png' width="50" height="50" className='footer_github' alt="github-image" /></a></div>
        <div><a href='https://www.linkedin.com/in/shrutikasarvade24/'><img src='/icons8-linked-in-50.png' width="50" height="50" className='footer_linkedin' alt="linkedin-image" /></a></div>
        <div><a href="/Resume_Shrutika_3Yrs_exp.pdf" download><img src='/icons8-resume-48.png' width="50" height="50" className='footer_resume' alt="resume" /></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
