//el useEffect nos va a permitir poder ejecutar cierto codigo de manera condicional
import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
//necesito recibir la categoria y hacer una peticion http
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  /* sig- solo quiero que se ejecute sta instr cuando 
  el componente es renderizsdo por primera vez  */
  //recibe una funcion, que quiero ejecutar
  useEffect(() => {
    //categoria la pongo como argumento y esto retorn a una promesa 
   getGifs(category)
   .then(setImages);
    /* segundo argumento que le mandamos un arreglo de
   dependencias, asi solo se disparara una vez la peticion fetch */
   /* si la categoria cambia va a volver a ejecutar ese efecto   */
  }, [category]);


  //getGifs();
  return (
    <Fragment>
      <h3>{category}</h3>
      <div className="card-grid">
        {/* Expresion de javascript { }
        Cuando no tengo las {} es un valor sig un return explicito 
        { //podemos desestructurar para ya no poner img.id
        images.map( img => (
          <li key={img.id}>{img.title}</li>
        ))
       }
        */}

        {/* podemos desestructurar para ya no poner img.id */}
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            //es bien usado esto operador spread { ...img }
            /* Estoy mandando las propeties de las imagenes
           como una propiedad independiente  id, title y url  */
            {...img}
          />
        ))}
      </div>
    </Fragment>
  );
};
