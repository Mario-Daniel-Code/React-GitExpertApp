//ocupa la category como argumento
export const getGifs = async (category) => {
  /* async Esta funcion regresa los gifs.
  Regresa una promesa que resuleve la coleccion de mis imagenes */
  //vamos a llamar ese Endpoint Dragon+ball
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RZopC1do6uk2rHb38pCkTj4YxkpkqFp5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  /* Mutar el arreglo que recibo para sea mas facil de ver  */
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //usamos images? para preguntar si tiene las imagenes
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;

  
};
