import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './componentes/Formulario/Formulario'
import Productos from './componentes/Productos/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='titulos'>Supermercado Mario Bross</h1>
      <Formulario />
      <h2 className='titulos'>Mis Productos</h2>
      <Productos />
    </>
  )
}

export default App
