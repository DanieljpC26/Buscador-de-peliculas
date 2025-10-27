import React, { use, useRef, useState } from 'react'

export const BuscadorPeli = () => {
  // 'https://api.themoviedb.org/3/search/movie'?query=Jack+Reacher&api_key=<<api_key>>'

  const UrlBase = 'https://api.themoviedb.org/3/search/movie'
  const ApiKey = 'cc7ca426953a8be41f4e740ce3180ffd'
  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])
  const [vacio, setVacio] = useState('')
  const [inexistente, setInexistente] = useState('')
  const busquedaRef = useRef();


  const handleInput = (e) => {
    setBusqueda(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (busqueda === '') {
      setVacio('Ingrese una pelicula')
      setInexistente('');
      busquedaRef.current.focus();

    }else{
    
    fetchPelicula()
    }
    
  }

  const fetchPelicula = async () => {
    try {
      const respuesta = await fetch(`${UrlBase}?query=${busqueda}&api_key=${ApiKey}`);
      const data = await respuesta.json()
      
      if (data.results.length === 0) {//
        setInexistente('No se encontró la pelicula')
        setVacio('');
        setBusqueda('');
      
        busquedaRef.current.focus();
      }
      setPeliculas(data.results || [])
    } catch (error) {
      console.log(error)
    }
 
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input className='input-moderno'
          type="text"
          placeholder='Ingrese Pelicula'
          value={busqueda}
          onChange={handleInput}
          ref={busquedaRef}
        />
        <button type='submit'>Buscar</button>

      </form>
      {vacio && <p className='container'>{vacio}</p>}
      {inexistente && <p className='container'>{inexistente}</p>}


      <div className="movie-list">
        {peliculas.map((movie) => (
          <div key={movie.id} className="movie-card">

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} />
            <h3>{movie.title}</h3>
            <p className='parrafo'>{movie.overview}</p>

          </div>
        )
        )}
      </div>
    </div>
  )
}