import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { DarkModeContext } from './DarkModeContext'
import Services from './Services';
import About from './About';
// import Contact from './Contact';
import Calend from './Calend';
import NotFound from './NotFound';




const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
   
         <div className={darkMode ? 'dark' : 'light'}  >
    
   
          <Navbar />
          <div class="align-content-center border border-warning" id='content'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Calend />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          <Footer />
        </div>
     
   
  )
}

export default Home;