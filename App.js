import './App.css';
import {useEffect, useState} from 'react'
import ProductList from './components/productsList';
import { total } from './components/cart';
import Cart from './components/cart';
import Buttonteste from './components/buttonteste';


import logoo from './components/header/logoo.jpg'
import Button from './components/buttonteste';

function App() {


  const [products, setProducts] = useState([]); //array de produtos do fetch
  const [filteredProducts, setFilteredProducts] = useState('');
  const [currentSale, setCurrentSale] = useState([])  //adicionar produtos nesse array
  const [produtoFiltrado, setprodutoFiltrado] = useState([...products])
  

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(() => console.log('erro'))
  }, [])  

  function handleClick(id){
    if (currentSale.includes(id) === false){
    setCurrentSale([...currentSale, id])
    total(currentSale) 
  }
  }

  const filtarInput = (produto) =>{
    setprodutoFiltrado(products.filter((filter) => filter.name.toLowerCase().includes(produto.toLowerCase())
    ))
  }
  
  const callBackRemove = (item) => {
    setCurrentSale(currentSale.filter(produto => produto !== item))
  }

  return (
    
    <div className="App"> 
    
      <div className='mainHeader'>
      

       <img src={logoo} alt='logo'></img> 
      <div className='mainSearch'>

        <input 
        type = 'text'
        onChange={(e) => {
         
          setFilteredProducts(e.target.value)
          filtarInput(filteredProducts)
        }}
        className='searchinput'></input>

        <button 
        onClick={() => {
          filtarInput(filteredProducts)
          console.log(produtoFiltrado)
        }}
        className='addBtn'>Pesquisar</button>
        </div>

      </div>
      <header className="App-header">
      <div className='cabeçalho'></div>
        
      <ProductList ProductsArray={
    filteredProducts !== '' ? produtoFiltrado : products
    } 
    handleClick={handleClick} produtoFiltrado={produtoFiltrado} /> 

      
      <Cart  
      currentSale={currentSale}  setCurrentSale={setCurrentSale}
       itensList={currentSale}  callbackRemoveItem={callBackRemove}/>

      </header> 
      <div>
 
      </div>
    </div>
  );
}

export default App;




