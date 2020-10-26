import React from 'react';
import Pagina from './Pagina';


const Paginador = ({ paginas, guardaPagina }) => {
    let numeroPaginas = []
    for (let i = 1; i <= paginas; i++) {
        numeroPaginas = [...numeroPaginas, i]
    }
    return (
        <div className="w-full py-4 px-10 flex justify-center flex-wrap items-center ">
            {numeroPaginas.map(pagina =>(
                <Pagina key={pagina} pagina={pagina} guardaPagina={guardaPagina}/>
            ))}
        </div>
    );
}

export default Paginador;