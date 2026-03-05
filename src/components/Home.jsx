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
                                                establecer procesos acordados y lograr resultados impactantes.
                                            </p>
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Co-Creación:
                                                </span>
                                                Utilizamos métodos y herramientas de investigación no extractivos para co-crear conocimiento
                                                con clientes, socios y comunidades.
                                            </p>
                                        </li>
                                        <li class='col p-2'>
                                            <div >

                                            </div>
                                            <p>
                                                <span class=''>
                                                    Acción:
                                                </span>
                                                Diseñamos la investigación para que sea relevante y procesable, apoyando políticas, programas y toma de decisiones basados en la evidencia.
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
