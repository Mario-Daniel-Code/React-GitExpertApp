import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GitExpertApp = () => {
  /* Const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
   no se pueden mutar constantes */
  const [categories, setCategories] = useState([
    "Dragon Ball"
  ]);

  /*  const handleAdd = () => {
    //Es usar el operador spread ...
    //SetCategories(['Hunter', ...categories]); Primera opcion
    setCategories((cats) => [...cats, "Crash"]); Segunda forma
  }; */
  return (
    <>
      <h2>GitExpertApp</h2>
      {/*Se le pueden pasar propiedades al AddCategory, 
      le coloco set categories y la referencia del mismo*/}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          //Un pequeño ciclo
          categories.map(category => (
            <GifGrid 
            key={category}
            category = {category}
            />
          ))
        }
      </ol>
    </>
  );
};
