import React from 'react'
import img from './img/group.b81ca39d.png'



const Home = () => {
  return (
    <>
    <div>
      <div class="container border border-danger">
        <div class="row align-items-center justify-content-center">
          <div class="col " >
            <div>
            <h1 class="text-center">
              Mi Propuesta de Marketing mi MercadoTecnia, mi vision y valor en el mercado
            </h1>
            </div>
          </div>
          <div class="col">
            <div class=" ">
            <img src={img} class="img-fluid h-100 " alt="..." width="auto" height="auto" />
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;