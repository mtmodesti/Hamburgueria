import './style.css'
import CarItens from '../itensCarrinho'

export const total = (itensList) => {
    let soma =  itensList.reduce((acc, prod) => acc + prod.price, 0)
    return soma
  }

const Cart = ({itensList,callbackRemoveItem}) => {

//função que renderiza todos itens no carrinho
    
    if (itensList.length > 0){
        return (
            <div className="Cart">
            <div className="Header" ><span className='spancart'>Carrinho de Compras</span></div>

            <div  className="stock">
            
            
            
             {itensList.map(item => <CarItens callbackRemoveItem={callbackRemoveItem} 
             key={item.id} item={item} />  )}
         
                
            </div>

            <div className='total'> <span className='totalprice'>
                Total: {total(itensList).toLocaleString('pt-BR', 
                {minimumFractionDigits: 2,
                 maximumFractionDigits: 2})
                }</span></div>

        </div>
        )
    } else {

    

    return (
        <div className="Cart">
            <div className="Header" ><span className='spancart'>Carrinho de Compras</span></div>

            <div  className="stock">

                <p className='emptybag' >Sua sacola está vazia!</p>
                <span className='additencar'>Adicione Itens</span>
                
            </div>

            <div className='total'> <span className='totalprice'>
                Total: {total(itensList).toLocaleString('pt-BR', 
                {minimumFractionDigits: 2,
                 maximumFractionDigits: 2})
                }</span></div>

        </div>
    
    )
}
}

export default Cart