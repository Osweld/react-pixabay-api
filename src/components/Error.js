import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className="w-1/2 mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Error</p>
    <p>{mensaje}</p>
        </div>
    );
}

export default Error;