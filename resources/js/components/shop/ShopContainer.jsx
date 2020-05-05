import React, { Component } from 'react'

import Shopitem from './ShopItem';
import ShopItem from './ShopItem';

export default class ShopContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            laptops:[
                {
                    id:'C1233412QW',
                    name:'Lenovo IdeaPad L340-17IRH Gaming',
                    image:'https://www.notebookcheck.net/uploads/tx_nbc2/LenovoIdeapadL340-17IRH__1_.JPG',
                    price:1399.00
                },
                {
                    id:'XCSDFRGFE33',
                    name:'Acer Nitro 5, AN515-43-R18C',
                    image:'https://laptopsrank.com/images/nhq4taa001-nitro5-gallery-01.png',
                    price:1279.00
                },
                {
                    id:'ASDZ334542DX',
                    name:'HP Omen 15-dc1013nu',
                    image:'https://zonetech.bg/image/cache/data/pc-import/HEWLETT_PACKARD/0006301470115/HP-Omen-15-dc1013nu-Black-8BS90EA-2-600x600.jpg',
                    price:2099.00
                },
                {
                    id:'JGGFERWYRW322',
                    name:'MSI GF63 Thin 9SC-636XBG',
                    image:'https://www.megacomp.bg/image/cache/catalog/mc-import/7-C21-173/MSI-GF63-THIN-9SC-636XBG-MSI-GF63-THIN-9SC-636XBG-1-700x700.png',
                    price:2099.00
                },
                
            ]
        }
    }
    render() {
        const laptops = this.state.laptops.map(laptop=>(
            <ShopItem 
            key={laptop.id} 
            image={laptop.image} 
            name={laptop.name} 
            price={laptop.price} 
            laptop={laptop}
            addItem={this.props.addItem}
            />
        ))
        return (
            <ul className="list-group shop-container">
               {laptops}
            </ul>
        )
    }
}
