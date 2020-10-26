import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Buscador from './components/Buscador';
import ListadoFotos from './components/ListadoFotos';
import Paginador from './components/Paginador';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [fotos, guardarFotos] = useState([]);
  const [paginas, guardarPaginas] = useState(0);
  const [pagina, guardaPagina] = useState(1);
  useEffect(() => {
    const consultarAPI = async () => {
      const perPage = 30;
      const key = 'YOUR_API_KEY';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&page=${pagina}&per_page=${perPage}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
      guardarFotos(resultado.hits);
      guardarPaginas(Math.ceil(resultado.totalHits / perPage));

    }
    if (busqueda.trim() !== '') {
      consultarAPI();
    }

  }, [busqueda, pagina])

  let listado = (fotos.length === 0) ? null : <ListadoFotos fotos={fotos} guardarBusqueda={guardarBusqueda} />
  let paginador = (paginas === 0) ? null : <Paginador paginas={paginas} guardaPagina={guardaPagina} />

  return (
    <Fragment>
      <Header

      />
      <Buscador
        guardarBusqueda={guardarBusqueda} busqueda={busqueda}
      />
      {paginador}
      {listado}
      {paginador}
    </Fragment>



  );
}

export default App;
