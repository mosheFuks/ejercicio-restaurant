import './premium.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Premuim = () => {

    const [premiums, setPremiums] = useState([])

    useEffect (() => {
        axios.get("https://apipdtc.herokuapp.com/bulldog/premium")
        .then((response) => {
            setPremiums(response.data)
        })
    },[])

    return ( 
        <div style={{backgroundColor: "black"}}>
            <div>
                <h2 className='text-center p-2' style={{color: "white"}}> HAMBURGUESAS PREMIUM</h2>
            </div> 
            <div className='justify-content-evenly container-fluid'>
                {premiums.map((premium) =>
                <div className='d-inline-block m-4' style={{width: "45%"}}>
                    <div className='d-flex'>
                     <div className='shadow'>
                       <img src={require(`../../assets/img/premium/${premium.imagen}.png`)} className="imagen" alt="Imagen de popular" />
                     </div>
                      <div className='d-inline-block' style={{color: "white"}}>
                        <div>
                            <h5 className='text-center'><b>{premium.nombre}</b></h5>
                        </div>
                        <div className='d-flex'>
                            {premium.ingredientes.map((ingre) => 
                               <div className=''>
                                  <p className='p-1'>{ingre},  </p>
                                </div>
                            )}
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex '>
                               <h6>${premium.precio}</h6>
                            </div>
                            <button className='btn btn-warning' style={{color: "black"}}>COMPRAR</button>
                        </div>
                        
                    </div>
                </div>

                </div>

                )}






            </div>
        </div>

     );
}
 
export default Premuim;