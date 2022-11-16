import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Teste se a fetch é chamada quando fetchProduct é executada com o argumento MLB1405519561', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled;
  });
  it('Teste se foi utilizado o endpoint correto', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('Teste se o retorno é igual ao objeto product', () => {
   expect(fetchProduct('MLB1405519561')).toEqual(product);
  });
  it('Teste se retorna erro caso não seja passado nenhum argumento', () =>{
   expect(fetchProduct('')).toThrowError
  });
});
