import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer " >
         <div class="container p-2 text-center">
        <span>© 2025 HandMade CamiDev </span>
        <ul>
          <li class="social-icons">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="https://es.react.dev/"
              role="button"
              rel="noreferrer noopener"
            ><i class="fa fa-footer fab fa-react fa-xl"></i>
            </a>
          </li>
          <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="mailto:camila.desarrolloweb@gmail.com"
                role="button"
                data-mdb-ripple-color="dark"
                rel="noreferrer noopener"
              ><i class="fa fa-envelope fa-xl"></i
              ></a>
            </li>
          <li class="social-icons">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="https://www.linkedin.com/in/camilaolivaresrivera/"
              role="button"
              data-mdb-ripple-color="dark"
              rel="noreferrer noopener"
            ><i class="fa fa-footer fab fa-linkedin fa-xl"></i>
            </a>
          </li>
        </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer