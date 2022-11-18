import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const cart = document.querySelector('.cart__products');
const products = document.querySelector('.products');

window.onload = async () => {
  products.innerHTML = '<p class = "loading">Carregando...</p>';
  let getSaved = getSavedCartIDs();
  try {
    // Criando a lista
    const productsList = await fetchProductsList('computador');
    products.innerHTML = '';
    productsList.forEach((item) => {
      products.appendChild(createProductElement(item));
    });
    // Mantendo o carrinho
    getSaved = await Promise.all(getSaved.map((id) => fetchProduct(id)));
    getSaved.forEach((items) => {
      const item = createCartProductElement(items);
      cart.appendChild(item);
    });
  } catch (error) {
    products.innerHTML = '';
    const message = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.innerHTML = `<p class = "error">${message}</p>`;
  }
};
