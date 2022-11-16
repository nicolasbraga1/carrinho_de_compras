export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = () => {
  if(fetchProductsList('')){
    throw new Error ('Termo de busca não informado');
  };
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`)
    .then((response) => response.json());
};
