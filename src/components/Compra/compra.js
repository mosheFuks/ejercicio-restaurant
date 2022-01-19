import { useState, useEffect } from 'react'
import axios from 'axios'
import './compra.css'


const Compra = () => {
    const [ingredientes, setingredientes] = useState([])
    const [precioCarne, setPrecioCarne] = useState(350)
    const [precioFin, setPrecioFin] = useState(precioCarne)
    const [seleccionados, setseleccionados] = useState([])



    const comprar = (ingrediente) => {
        setseleccionados([...seleccionados, ingrediente])
        setPrecioFin(ingrediente.precio + precioFin)
    }

    const eliminarIngrediente = (id, precio) => {
        setseleccionados(seleccionados.filter((seleccion) =>seleccion.id != id))
        setPrecioFin(precioFin - precio)
    }

    useEffect (() => {
        axios.get("https://apipdtc.herokuapp.com/bulldog/ingredientes")
        .then((response) => {
            setingredientes(response.data)
        })
    },[])

    return (
        <div className='bg-warning'>

        <div>
            <h2 className='text-center p-2'> PREPARATE TU HAMBURGUESA </h2>
        </div>
        <div className="d-flex bg-warning" style={{color: "black"}}>
            <div className='' style={{width: '49%'}} >
                {ingredientes.map((ingrediente) =>
                    <button className={`btn  d-flex justify-content-between shadow m-2 boton${seleccionados.some((seleccion) => seleccion.id === ingrediente.id) ? "btn btn-warning disabled d-flex m-2 boton" : ''}`} key={ingrediente.id}  onClick={() => comprar({...ingrediente})} style={{backgroundColor: "black", color: "white"}} >
                        <div className='d-flex'>
                            <img src={require(`../../assets/img/ingredientes/${ingrediente.imagen}.png`)} style={{width: "50px"}}/>
                            <p className='m-3 '>{ingrediente.nombre}</p>
                        </div>
                        <p className='m-3 text-end' >${ingrediente.precio}</p>
                    </button>
                )}
            </div>

            <div >
                {seleccionados.length > 0?

                <div className='bg-warning'>
                    <div className='d-align-block'  style={{width: '49%', color: "black"}} >
                        <div className="btn btn-outline-dark shadow m-2 d-flex justify-content-between boton" >
                            <div className="d-flex">
                                <img src={require(`../../assets/img/ingredientes/Carne.png`)} style={{width: "50px"}}/>
                                <p className='m-3 '>Carne</p>
                            </div>
                            <p className='m-3 text-end'>${precioCarne}</p>
                        </div>
                        
                        {seleccionados.map((ingre) => 
                            <button className="btn btn-outline-dark shadow m-2 d-flex justify-content-between boton" key={ingre.id}  onClick={() => eliminarIngrediente(ingre.id, ingre.precio)} >
                                <div className="d-flex">
                                    <img src={require(`../../assets/img/ingredientes/${ingre.imagen}.png`)} style={{width: "50px"}}/>
                                    <p className='m-3 '>{ingre.nombre}</p>
                                </div>
                                <p className='m-3 text-end'>${ingre.precio}</p>
                            </button>
                        )}
                    </div>
                </div>

                :

                    <h2 className='text-center p-2'> Seleccione ingredientes!! </h2>
                }

                <div>
                    {seleccionados.length > 0 ?

                        <h2 className='text-center p-2'> PRECIO FINAL: ${precioFin}</h2>
                    :

                    ''
                    }
                </div>
            </div>
        
        
        
        
        
        
        </div>

        </div>

     );
}
 
export default Compra;