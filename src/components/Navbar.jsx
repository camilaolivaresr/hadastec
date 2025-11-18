import { NavLink, Route, Routes } from 'react-router-dom';
import DarkMode from './DarkMode';


function Navbar() {

  return (
    <div class=" " >
        <nav class="navbar navbar-expand-lg sticky-top">
          <div class="container mt-4 ">
            <NavLink to="/" >
              {/* <span class="navbar-brand">
                <font color="#2acd00">Hadas</font><font color="#9e0be7">Tec</font>
              </span> */}

<div class="neon-container">
    <h1 class="neon-text navbar-brand">
      <font color="#2acd00">Hadas</font><font color="#9e0be7">Tec</font>
    </h1>
</div>



            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto me-2">
                <li class="nav-item">
                  <NavLink to="about">
                    <span class="nav-link "> Inicio</span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="services" >
                    <span class="nav-link ">Servicios</span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <div>
                    {/* <button type="button" class="btn btn-outline-success rounded-pill "> */}
                      <NavLink to="contact">
                        <span class="nav-link ">Hablemos</span>
                      </NavLink>
                    {/* </button> */}
                  </div>
                </li>
                <li class="nav-item">
                    <DarkMode class="nav-link "/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>


  )
}

export default Navbar;