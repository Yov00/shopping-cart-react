import React from 'react'

function ShopItem({image,name,price,laptop,addItem}) {

    return (
        <li className="list-group-item shop-item">
            <div className="img">
                <img src={image} alt=""/>
            </div>
            <div className="name">
                {name}
            </div>
            <div className="price">
            ${price}
            </div>
            <div className="buy-button-holder">
                <button onClick={()=>addItem(laptop)}>Buy</button>
            </div>
        </li>
    )
}

export default ShopItem
