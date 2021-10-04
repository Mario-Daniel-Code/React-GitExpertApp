import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//Cuando se utilice el estdo del fetch se va a cargar por defecto
export const useFetchGifs = (category) => {
  //pueden tener un estado, pueden indicar a los
  //componentes cuando deben de renderizar porque algo cambio

  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    //Esto es una promesa
    getGifs(category).then((imgs) => {
      setState({
        //imagenes
        data: imgs,
        //ya termino de cargar
        loading: false,
      });
    });
    /* Evalua cuando la categoria cambia, 
    la primera vez cambia se va a disparar */
  }, [category]);
  /* Funcion propia de js, recibe el callback 
  que a los 3 seg va a ejecutar lo que sea adentro */
  /* setTimeout(() => {
    setState(
      {
        data: [1,2,3,4,5],
        loading: false
      }
    )

  }, 3000); */
  return state; //{data[],loading: true}
};
