import hamburguesaPortada from '../../assets/img/hamburguesaPortada.png'
import { useState, useEffect } from 'react'


const Portada = () => {

    
    return ( 
        <div className="bg-black">
             <img src={hamburguesaPortada} alt="logo pagina" style={{width: "800px", height: "600px"}} className="d-inline-block align-text-center m-2" />
             <div className='d-inline-block ' style={{color: 'white'}}>
                 <h2 className='m-4'>BULLDOG</h2>
                 <h2 className='m-4'>RESTAURANT</h2>
                 <h5 className='m-4' style={{color: 'yellow'}}>VENI A PROBAR LAS MEJORES BURGUERS</h5>
            </div>
        </div>
     );
}
 
export default Portada;