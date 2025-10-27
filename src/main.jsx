import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppPeliculas } from './Componentes/AppPeliculas.jsx'
import { BuscadorPeli } from './Componentes/BuscadorPeli.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorPeli />

  </StrictMode>,
)
