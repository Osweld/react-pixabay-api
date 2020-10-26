import React from 'react';
import Fotos from './Fotos';

const ListadoFotos = ({ fotos,guardarBusqueda }) => (
    <main className="w-full py-2 px-4 flex-shrink flex flex-wrap justify-around">
    {fotos.map(foto =>(
        <Fotos key={foto.id} foto ={foto} guardarBusqueda={guardarBusqueda}/>
    ))}
    </main>
)

export default ListadoFotos;