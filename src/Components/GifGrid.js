//El useEffect nos va a permitir poder ejecutar cierto codigo de manera condicional
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//Necesito recibir la categoria y hacer una peticion http
export const GifGrid = ({ category }) => {
  //Aqui estamos usando el hook que creamos desestructuramos el state
  const { data: images, loading } = useFetchGifs(category);
  console.log(loading);

  //const [images, setImages] = useState([]);
  /* sig- solo quiero que se ejecute sta instr cuando 
  el componente es renderizsdo por primera vez  */
  //Recibe una funcion, que quiero ejecutar
  //useEffect(() => {
  //Categoria la pongo como argumento y esto retorn a una promesa
  //getGifs(category)
  //.then(setImages);
  /* Segundo argumento que le mandamos un arreglo de
   dependencias, asi solo se disparara una vez la peticion fetch */
  /* Si la categoria cambia va a volver a ejecutar ese efecto   */
  //}, [category]);

 
  return (
    <>
      <h3 className="animate__animated animate__bounce">{category}</h3>
      {/* Si es tru se evalua esto <p>Loading</p>  */}
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      {/* Operador ternario, ? si loading esta cargando : caso contrario fin de carga*/}

      <div className="card-grid">
        {/* Expresion de javascript { }
        Cuando no tengo las {} es un valor sig un return explicito
         ,podemos desestructurar para ya no poner img.id  
        { 
        images.map( img => (
          <li key={img.id}>{img.title}</li>
        ))
        }*/}

        {/* Podemos desestructurar para ya no poner img.id  */}
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            /* Es bien usado esto operador spread { ...img }
            Estoy mandando las propeties de las imagenes
           como una propiedad independiente  id, title y url  */
            {...img}
          />
        ))}
      </div>
    </>
  );
};
