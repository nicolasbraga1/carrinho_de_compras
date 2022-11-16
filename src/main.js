import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

window.onload = async () => {
  const productsList = await fetchProductsList('computador');
  productsList.forEach((product) => {
    const products = document.querySelector('.products');
    products.appendChild(createProductElement(product));
  })
}
