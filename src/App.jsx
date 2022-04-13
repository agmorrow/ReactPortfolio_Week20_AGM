import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import { Resume } from './components/resume/Resume';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <div>
    <Navbar/>
  
  <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/portfolio" element={<ProjectList/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
  </Routes>
    </div>
    </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;