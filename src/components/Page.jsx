import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext'
import DarkMode from './DarkMode';
import Home from './Home';
// import Blog from './Blog';
import Services from './Services';
// import About from './About';
import Footer from './Footer';

function Page() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
      <div class="container" id="wrapper">
        <div class="container-fluid mt-4 ">
          <nav class="navbar navbar-expand-lg sticky-top ">
            <NavLink to=""><a class="navbar-brand" >HadasTec</a></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto me-2">
                {/* <li class="nav-item">
                  <NavLink to="/about"> <a class="nav-link ">Skills</a></NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink to="/services"><a class="nav-link">Services</a></NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink to="/blog"><a class="nav-link">Blog</a></NavLink>
                </li> */}
                {/* <li class="nav-item">
                <NavLink to="/search"><a class="nav-link"><i class="fa fa-search" ></i></a></NavLink>
              </li>  */}
              </ul>
            
            </div>
         
          </nav>
           <div> <DarkMode /></div>
        </div>
   
        <main id="page" >
          <div id="page-content">
            <Routes>
              <Route path="" element={<Home />} />
              {/* <Route path="blog" element={<Blog />} /> */}
              <Route path="services" element={<Services />} />
              {/* <Route path="about" element={<About />} /> */}
              {/* <Route path="search" element={<Search />} /> */}
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>


  )
}

export default Page;