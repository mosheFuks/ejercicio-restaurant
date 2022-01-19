import { useState, useEffect } from 'react'
import axios from 'axios'
import './buscadas.css'

const Buscadas = () => {

    const [buscadas, setbuscadas] = useState([])

    useEffect (() => {
        axios.get("https://apipdtc.herokuapp.com/bulldog/buscadas")
        .then((response) => {
            setbuscadas(response.data)
        })
    },[])

    return (
        <div className='bg-warning'>
            <div>
                <h2 className='text-center p-2'> LAS MAS REQUERIDAS </h2>
            </div> 
            <div className='cards bg-warning d-flex justify-content-evenly container-fluid'>
                {buscadas.map((buscada) =>
                    <div className="card shadow m-2" style={{width: "18rem", color: "white", backgroundColor: "black" }} key={buscada.id}>
                    <img src={require(`../../assets/img/buscadas/${buscada.imagen}.png`)} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center"><b>{buscada.nombre}</b></h5>
                            <ul className="card-text">
                                {buscada.ingredientes.map((ingre) =>
                                    <li>{ingre}</li>
                                )}
                            </ul>
                            <div className="d-flex justify-content-between">
                                <a href="#" className="btn btn-warning">COMPRAR</a>
                                <p className='text-center shadow-lg'><b>${buscada.precio}</b></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Buscadas;