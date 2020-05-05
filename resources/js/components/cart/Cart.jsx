import React from 'react'

const Cart = ({items,toggle,total,decrease,increase}) => {

    const allItems = items.length > 0 ? items.map(item=>(
        <li key={item.id} className="list-group-item shop-item">
            <div className="img">
                <img src={item.image} alt=""/>
            </div>
            <div className="name">
                {item.name}
            </div>
            <div className="price">
                ${item.price}
            </div>
            <div className="cart-button-holder">
              <span className="quantity-button" onClick={()=>decrease(item)}> <i className="fas fa-arrow-alt-circle-left"></i></span>
                 {item.quantity}
                <span className="quantity-button" onClick={()=>increase(item)}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </span>
            </div>
        </li> 
    )):(
        <li className="list-group-item">
            There are not items in the cart...
        </li>
    );

    const totalPrice = items.length > 0 ? total() : 0;

    return (
        <div className="cart-wrapper" >
            <div className="card">
                <div className="card-header">
                    Your Cart
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {allItems}
                    </ul>
                </div>
                <div className="card-footer">
                   <div className="cart-total">
                       Total:  {totalPrice}$
                   </div>
                   <div>
                       <button className="checkOut">Checkout</button>
                   </div>
                </div>
            </div>

            <div className="overlay" onClick={()=>toggle()}></div>
        </div>
       
    )
}

export default Cart
