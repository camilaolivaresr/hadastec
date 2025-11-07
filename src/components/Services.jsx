import React from 'react'

const Services = () => {
  return (
    <div class="mb-5">

      <div class="d-flex justify-content-center">
        <h2 class="">Servicios</h2>
      </div>
      <p >
         We offer a broad range of services to help our clients strengthen their gender equality and social justice work and drive transformative change. 
      </p>
            <section>
      <ul class="row">
        <li class="col-md-4 p-2" >
          <div class="card h-100 border-0 bg-transparent">

            <div class="card-body">
              <h5 class="card-title">Research
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                > <i class="fa fa-magnifying-glass"></i>
                </a>
              </h5>
              <p class="card-text">We design and conduct high-quality research with a focus on participatory, qualitative, and mixed-methods approaches, ensuring meaningful and comprehensive results.</p>
            </div>
          </div>
        </li>
        <li class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Strategy
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                ><i class="fa fa-regular fa-lightbulb"></i>
                </a>
              </h5>
              <p class="card-text">We support clients to integrate a stronger focus on gender equality and inclusion in their work, policies, and organizational practices, strengthening their commitment to transformative change.</p>
            </div>
          </div>
        </li>
        <li class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Evaluation
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                ><i class="fa fa-solid fa-gears"></i>
                </a>
              </h5>
              <p class="card-text">
                We develop and enhance MEL frameworks, lead independent evaluations, and translate key findings into actionable strategies and recommendations that drive impact.</p>
            </div>
          </div>
        </li>
        <li class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Analysis
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                ><i class="fa fa-solid fa-chart-simple"></i>
                </a>
              </h5>
              <p class="card-text">
                We provide rapid evidence reviews and conduct systematic analyses of development issues, policies, portfolios, and trends, helping clients make informed, strategic decisions. 
              </p>
            </div>
          </div>
        </li>
        <li class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title"> Alfabetizacion Digital
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                ><i class="fa fa-brands fa-leanpub"></i>
                </a>
              </h5>
            </div>
          </div>
        </li>
        <li class="col-md-4 p-2" >
          <div class="card h-100">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Hacer crecer tu Negocio
                <a
                  data-mdb-ripple-init
                  class="btn btn-link btn-floating btn-lg text-body m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  rel="noreferrer noopener"
                ><i class="fa fa-solid fa-seedling"></i>
                </a>
              </h5>
              <p class="card-text">Blog de peliculas ,series y documentales en Ruby on Rails</p>
            </div>
          </div>
        </li>
      </ul>   
      </section>
    </div>

  )
}

export default Services;