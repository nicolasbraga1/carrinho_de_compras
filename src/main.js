import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');
window.onload = async () => {
  products.innerHTML = '<p class = "loading">Carregando...</p>';
  try {
    const productsList = await fetchProductsList('computador');
    products.innerHTML = '';
    productsList.forEach((product) => {
      products.appendChild(createProductElement(product));
    });
  } catch (error) {
    products.innerHTML = '';
    const message = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.innerHTML = `<p class = "error">${message}</p>`;
  }
};
