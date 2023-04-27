import { useState } from "react"
import { db } from "../../services/firebase/config";
import { collection, addDoc,  } from "firebase/firestore"
import './Formulario.css';

//1) Importamos los archivos/funciones necesarias y la referencia a nuestra base de datos en FireStore.
const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //2) Creamos los 3 estados para trabajar con los valores del formulario.

    //3) Creamos una función manejadora del formulario.

    const manejadorFormulario = (event) => {
        event.preventDefault();

        addDoc(collection(db, 'usuarios'), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
        })
        //addDoc es una funcion que me permite agregar un documento nuevo en mi colección.
        setNombre("");
        setApellido("");
        setTelefono("");
    }

  return (
    <form onSubmit={ manejadorFormulario }>
        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>

        <label htmlFor="">Apellido</label>
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required/>

        <label htmlFor="">Celular</label>
        <input type="text" value={telefono} onChange={(event) => setTelefono(event.target.value)} required/>

        <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario