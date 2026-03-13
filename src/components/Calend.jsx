import React from 'react'
import { InlineWidget } from 'react-calendly'

const Calend = () => {


    return (
        <div class="container">
            <div class="text-center">
                <h1 class="">¿Tienes un proyecto en mente? </h1>
                <h2>Aprenda cómo podemos ayudarle.</h2>

            </div>
             <div >
                <InlineWidget 
                url="https://calendly.com/hadastecnologia/30min"
              
                 

styles={{
  height: '700px',
    backgroundColor: '#0A0B12',  // Color de fondo oscuro
        primaryColor: '#b0f82a',     // Color principal (botones)
        textColor: '#FFFFFF'  
}}
 
            />

            </div>
            
        </div>
    )
}

export default Calend
