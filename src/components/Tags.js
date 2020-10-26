import React from 'react';
import Tag from './Tag';

const Tags = ({ tagsFoto,guardarBusqueda }) => {
    const listadoTags = tagsFoto.split(',')
    const tags = listadoTags.map(tag => tag.trim());
    return (
        <div className="px-6 pt-4 pb-2">
            {tags.map(tag => (
                <Tag key={tag} tag={tag} guardarBusqueda={guardarBusqueda}/>
            ))}
        </div>
    );
}

export default Tags;