import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartitems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addtoCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartitem = new CartItem();
      cartitem.product = product;
      cartitem.quantity = 1;

      CartItems.push(cartitem);
    }
  }

  list():CartItem[]{
    return CartItems;
  }
removeFromCart(product:Product){
  let item:CartItem = CartItems.find((c) => c.product.productId === product.productId);
CartItems.splice(CartItems.indexOf(item),1);


}


}

