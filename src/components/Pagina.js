import React from 'react';

const Pagina = ({pagina,guardaPagina}) => {

    const actualizarPagina= () =>{
        guardaPagina(pagina);
    }
    return ( 
    <button className="w-6 py-1 mx-1 bg-teal-600 my-1 text-white font-bold hover:bg-teal-800" onClick={actualizarPagina}>{pagina}</button>
     );
}
 
export default Pagina;