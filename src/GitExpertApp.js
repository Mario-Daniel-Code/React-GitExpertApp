import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GitExpertApp = () => {
  /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
   no se pueden mutar constantes */
  const [categories, setCategories] = useState([
    "Dragon Ball"
  ]);

  /*  const handleAdd = () => {
    //es usar el operador spread ...
    //setCategories(['Hunter', ...categories]); primera opcion
    setCategories((cats) => [...cats, "Crash"]); //segunda forma
  }; */
  return (
    <>
      <h2>GitExpertApp</h2>
      {/*Se le pueden pasar propiedades al AddCategory, 
      le coloco set categories y la referencia sel mismo*/}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          //un pequeño ciclo
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
