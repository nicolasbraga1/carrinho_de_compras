import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = fetchProductsList('computador');
const addProductsToPage = () => {
  createProductElement(productsList);
  const products = document.querySelector('.products');
  products.appendChild(createProductElement);
};
addProductsToPage();
