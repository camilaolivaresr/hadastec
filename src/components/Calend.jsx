import React from 'react'
import { InlineWidget } from 'react-calendly'

const Calend = () => {


    return (
        <div class="container">
            <div class="text-center">
                <h1 class="">¿Tienes un proyecto en mente? </h1>
                <h2>Aprenda cómo podemos ayudarle.</h2>

            </div>
             <div class=".DBKEjqt4IKCsNgnjbfTn">
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


// import { memo } from 'react';
// import { InlineWidget } from 'react-calendly';
// import useLazyCalendly from './hook/useLazyCalendly';

// const Calend = memo(() => {
//   const [ref, show] = useLazyCalendly();

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold  mb-4">¿Tienes un proyecto en mente?</h1>
//         <h2 className="text-2xl text-gray-300">Aprenda cómo podemos ayudarle.</h2>
//       </div>
      
//       <div ref={ref} className="DBKEjqt4IKCsNgnjbfTn max-w-4xl mx-auto">
//         {show ? (
//           <InlineWidget 
//             url="https://calendly.com/hadastecnologia/30min"
//             styles={{
//               height: '700px', backgroundColor: '#0A0B12',
//               primaryColor: '#b0f82a', textColor: '#FFFFFF'
//             }}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-[700px] bg-[#0A0B12] rounded-lg">
//             <div className="animate-spin h-12 w-12 border-b-2 border-[#b0f82a]"></div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default Calend;
