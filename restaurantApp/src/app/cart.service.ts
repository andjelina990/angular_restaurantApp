import { Injectable } from '@angular/core';
import { products } from './products/products';
import { IProducts } from './products/IProducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<IProducts> = [];

  constructor() {
    console.log(this.items);
  }

  addToCart(product: IProducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  clearItems() {
    this.items = [];
    return this.items;
  }
}
