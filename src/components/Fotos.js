import React from 'react';
import Tags from './Tags';

const Fotos = ({ foto,guardarBusqueda }) => {
    return (
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-1/4 my-4 mx-8 bg-gray-300   rounded overflow-hidden shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-2xl">
            <img className="w-full h-40 object-cover" src={foto.webformatURL} alt={foto.type} />
            <div className="px-6 pt-4 pb-2">
                <div className="font-bold text-xl mb-2">Lorem Ipsum</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque est ipsum assumenda quae, facilis vel, alias dolorem enim nisi quam sit illo accusamus dolorum non esse culpa explicabo expedita?
                </p>
            </div>
            <Tags tagsFoto={foto.tags} guardarBusqueda={guardarBusqueda}/>
            <div className="px-6 pt-4 pb-2 flex justify-center items-center">
                <a href={foto.pageURL} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded">Ver imagen</a>
            </div>
        </div>
    );
}

export default Fotos;