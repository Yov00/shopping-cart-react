import React from 'react';
import ReactDOM from 'react-dom';

import Cart from '../components/cart/Cart';
import ShopContainer from '../components/shop/ShopContainer';

import '../../sass/app.scss';

class Main extends React.Component{ 
    

    constructor(){
        super();
    
        this.state={
            cartItems:[],
            showCart:false
        }

        this.addItemToCart = this.addItemToCart.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.cartItemsTotalPrice = this.cartItemsTotalPrice.bind(this);
        this.countQuantity = this.countQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    addItemToCart(item){
        let newItems = [...this.state.cartItems];
        let foundItem = newItems.find(i  => i.id==item.id)
        // const foundItem = newItems.find(x=> x.id = item.id );
       if(foundItem){
          
        if(foundItem.quantity>=1){
            foundItem.quantity +=1;
            foundItem.price = item.price * foundItem.quantity;
        }
        newItems[newItems.indexOf(item)]= foundItem;
   
       }else{
           item = Object.assign({},item,{...item,quantity:1})
           newItems.push(item);
       }

       this.setState({cartItems:newItems});
    }

    countQuantity(){
        var quantity = this.state.cartItems.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.quantity;
        },0)
        return quantity;
    }

    toggleCart(){
        const showCart = this.state.showCart;
        this.setState({showCart:!showCart});
    }

    cartItemsTotalPrice(){
        const total = this.state.cartItems.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.price;
        },0);
       return total;
    }
    
    decreaseQuantity(item){
        let newItems = [...this.state.cartItems];
        let updatedItem =Object.assign({},item,{...item});
        let originalPrice = updatedItem.price / updatedItem.quantity;
        if(updatedItem.quantity <=1){

            let foundItem = newItems.find(x=>x.id==updatedItem.id);
            let indexOfItem = newItems.indexOf(foundItem);
            newItems.splice(indexOfItem,1);
          
        }else{
            updatedItem.quantity -=1;
            updatedItem.price = originalPrice * updatedItem.quantity;
            newItems[newItems.indexOf(item)] = updatedItem;
        }
        
        this.setState({cartItems:newItems})
    }

    increaseQuantity(item){
        let newItems = [...this.state.cartItems];
        let updatedItem =Object.assign({},item,{...item});
        let originalPrice = updatedItem.price / updatedItem.quantity;
      
        updatedItem.quantity +=1;
        updatedItem.price = originalPrice * updatedItem.quantity;
        newItems[newItems.indexOf(item)] = updatedItem;
      
        
        this.setState({cartItems:newItems})
    }

    render(){
        const numberOfItems = this.countQuantity();
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="logo">
                           LAPTOP-SHOP
                        </div>
                        <div className="cart-holder float-right">
                             <span
                              className="badge badge-info" 
                              style={{fontSize:'20px'}}
                              onClick={()=>this.toggleCart()}
                              > Cart Items: {numberOfItems}</span>  
                        </div>
                    </div>
                    <div className="card-body">
                      <ShopContainer addItem={this.addItemToCart}/>
                     
                    </div>
                </div>
                {
                    // SHOW CART
                    this.state.showCart ? 
                    <Cart
                        items={this.state.cartItems}
                        toggle={this.toggleCart}
                        total={this.cartItemsTotalPrice}
                        quantity={this.countQuantity}
                        decrease={this.decreaseQuantity}
                        increase={this.increaseQuantity}
                       />
                    :
                    ""
                }
            </div>
        );
    }
   
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

