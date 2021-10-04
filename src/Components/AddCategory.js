import React, { useState } from "react";
import { PropTypes } from "prop-types";
//export const AddCategory = (props) => {
/* En ves de mandar las props es mejor 
llamar al componente setCategories desestructurado */

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  //Voy a extraer los que traiga en onchange, voy a recibir el evento
  const handleInputChange = (ev) => {
  
    setInputValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    //Para prevenir el comportamiento por defecto del formulario
    ev.preventDefault();

    //Esto no es comun hacerlo
    //props.setCategories()
    /*borrar espacios antes y despues si eso 
    es mayor a 2 letras, haga la insercion */
    if (inputValue.trim().length > 2) {
      /* Yo no tengo acceso a las categorias, asi que solo
     mando referencia del setcategories con el input */
     /* Llamamos a traer las exitentes y desoues las ultimas /
      ahora inserte la nueva y despues las anteriores con el operador spread */
      setCategories((cats) => [inputValue, ...cats]); //Segunda forma
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*  El formulario es el agrupamiento de varios elementos  */}
      {/* Se vuelve a renderizar con el inputValue siempre,
      va hacer el ultimo valor actualizado de lo que la persona escribio */}
      {/* <h1>{inputValue}</h1> */}
      <input
        type="text"
        onChange={handleInputChange}
        /* onChange={(ev) => console.log(ev) } El valor a la hora de teclear */
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
