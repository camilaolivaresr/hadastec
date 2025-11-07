import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext'
import DarkMode from './DarkMode';
import Home from './Home';
// import Blog from './Blog';
import Services from './Services';
// import About from './About';
import Footer from './Footer';
// import Contact from './Contact';
import Calend from './Calend';

function Page() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header>
        <nav class="navbar navbar-expand-lg fixed-top border border-primary">
          <div class="container mt-4 ">
            <NavLink to="home" >
              <span class="navbar-brand">
                <font color="#2acd00">Hadas</font><font color="#9e0be7">Tec</font>
              </span>
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto me-2">
                <li class="nav-item">
                  <NavLink to="about"> 
                   <span  class="nav-link "> Inicio</span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="services" >
                    <span class="nav-link ">Servicios</span>
                    </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink to="/blog"><a class="nav-link">Blog</a></NavLink>
                </li> */}
                {/* <li class="nav-item">
                <NavLink to="/search"><a class="nav-link"><i class="fa fa-search" ></i></a></NavLink>
              </li>  */}
                <li class="nav-item">
                   <div>
                    <button type="button" class="btn btn-outline-success rounded-pill ">
                    
                       <NavLink to="contact">
                    Contactanos
                      </NavLink>
                    
                      </button>
                        </div>
                 
                </li>
                <li class="nav-item">
                  <div class="nav-link ">
                      <DarkMode />
                  </div>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
        <main class="border border-success ">
          <div class="container d-flex align-items-center  justify-content-center  min-vh-100 border border-warning ">
            <Routes>
              <Route path="home" element={<Home />} />
              {/* <Route path="blog" element={<Blog />} /> */}
              <Route path="services" element={<Services />} />
              {/* <Route path="about" element={<About />} /> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="contact" element={<Calend />} />

            </Routes>
          </div>
        </main>
        <Footer />
    
    </div>


  )
}

export default Page;