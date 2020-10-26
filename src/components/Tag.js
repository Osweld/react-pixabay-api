import React from 'react';

const Tag = ({tag,guardarBusqueda}) => {
    const buscarPorTag = ()=>{
        guardarBusqueda(tag);
    }
    return ( 
    <button onClick={buscarPorTag} className="inline-block bg-teal-500 text-white rounded px-1 py-1 text-sm font-semibold mr-2 mb-2">{tag}</button>
     );
}
 
export default Tag;