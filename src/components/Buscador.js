import React, { useState,useEffect } from 'react';
import Error from './Error';

const Buscador = ({guardarBusqueda,busqueda}) => {
    

    const [buscar, guardarBuscar] = useState('');
    const [error, guardarError] = useState(false);


    const buscarFotos = e => {
        e.preventDefault();
        if (buscar.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false);
        guardarBusqueda(buscar);
    }

    useEffect(()=>{
        const actualizarBusqueda = () =>{
            guardarBuscar(busqueda);
            guardarError(false);
        }
        actualizarBusqueda()
    },[busqueda])


    return (
        <section className="w-full  bg-teal-700 shadow-lg">
            {error ?
                <Error mensaje="No debe dejar vacio el campo" />
                :
                null}
            <div className="flex py-8 justify-center items-center">
                <form onSubmit={buscarFotos} className="w-1/2 ">
                    <div>
                        <input type="text"
                            className="h-10 w-2/3 bg-gray-300 appearance-none focus:outline-none shadow text-lg px-3 text-gray-700 "
                            value={buscar}
                            onChange={e => guardarBuscar(e.target.value)}
                        />
                        <button type="submit"
                            className="bg-blue-500 h-10 shadow font-bold text-lg text-white w-1/3 hover:bg-blue-600"
                        >Buscar</button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Buscador;