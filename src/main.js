import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

window.onload = async () => {
  const products = document.querySelector('.products');
  products.innerHTML = '<p class = "loading">Carregando...</p>';
  const productsList = await fetchProductsList('computador');
  products.innerHTML = '';
  productsList.forEach((product) => {
    products.appendChild(createProductElement(product));
  });
};
