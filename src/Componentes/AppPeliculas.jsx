
import { useRef, useState } from "react"
export const handleSubmit = (e) => {
    e.preventDefault()
} 

export const AppPeliculas = () => {

  const [pelicula, setPelicula] = useState('');// estado para guardar el nombre de la pelicula

  const PeliRef = useRef();// referencia al input de pelicula
  const ActorRef = useRef();// referencia al input de actor
  const GeneroRef = useRef();// referencia al input de genero

  const llenarTxt = () => { 
    setPelicula(PeliRef.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui obtendria los valores de los inputs usando useRef
    const txtPelicula = PeliRef.current.value;// Obtiene el valor actual del input usando la referencia
    const txtActor = ActorRef.current.value;// Obtiene el valor actual del input usando la referencia
    const txtGenero = GeneroRef.current.value;// Obtiene el valor actual del input usando la referencia

    PeliRef.current.value = '';// Limpia el valor del input despues de enviar
    ActorRef.current.value = '';

    GeneroRef.current.value = '';
    
  }
  return (
    <>
      <h2>Buscador de Peliculas</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text"
          plaseholder='Ingrese Pelicula'
          ref={PeliRef}


        ></input><br></br><br></br>

        <input type="text"
          plaseholder='Actor de Pelicula'
          ref={ActorRef}
        /> <br></br><br></br>
        <input type="text"
          plaseholder='Genero de pelicula'
          ref={GeneroRef}


        /> <br></br><br></br>

        <button onClick={llenarTxt}>Buscar</button>
       

      </form>
       <div>
          
          <p> La pelicula es: {pelicula}</p>

        </div>



    </>
  )
}