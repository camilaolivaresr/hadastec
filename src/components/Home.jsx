import React from 'react'
import img from './img/logo512.png'

const Home = () => {
    return (
        <div>
            <div class='container'>
                <div class='border '>
                    <section>
                        <p class=''>
                            Centramos los principios feministas en todos nuestros procesos y formas de trabajo.
                        </p>
                        <div class='mt-12'>
                            <div class='row '>
                                <div class='col border border-danger'>
                                    <ul class=''>
                                        <li class='d-flex  '>
                                          
                                                <div class=' p-2t border border-warning '>

                                                         <i class="fa-notdog fa-solid fa-check "></i>
                                                   </div>
                                                    <p>
                                                        <span class=' p-2 fw-bold'>
                                                            Transformación:
                                                        </span>
                                                        Estamos comprometidos con el avance de la igualdad de género y la justicia social,
                                                        impulsando el cambio transformador dentro de las organizaciones, los gobiernos y
                                                        las comunidades.
                                                    </p>
                                                
                                            
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Colaboración:
                                                </span>
                                                Nos asociamos estrechamente con los clientes para fomentar el entendimiento mutuo,
                                                 para crear una visión compartida de lo que se desea construir.
                                            </p>
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Co-Creación:
                                                </span>
                                                Utilizamos métodos y herramientas de investigación para co-crear entender 
                                                quiénes serán los usuarios y clientes principales, cuáles son sus problemas
                                                 y necesidades y cómo las vamos a resolver.
                                            </p>
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Acción:
                                                </span>
                                                 El compromiso y la sinergia, alcanzados por el equipo en esta etapa, son muy importantes.
                                                  Es por eso que en todos nuestros proyectos diseñamos las soluciones juntos, proponemos y
                                                   discutimos alternativas y nos enfocamos en alcanzar los objetivos, maximizando la 
                                                   colaboración y la comunicación , generando, al mismo tiempo, un importante caudal de 
                                                   conocimiento compartido.
                                            </p>
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Cuidado:
                                                </span>
                                                Priorizamos el cuidado de nosotros mismos y de los demás en todos los aspectos de nuestro trabajo, asegurando el bienestar personal, el respeto
                                                mutuo y la comprensión.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                                <div class='col'>
                                    <div class='border border'>
                                        <img src={img} class="img-fluid h-100 " alt="..." width="auto" height="auto" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Home
