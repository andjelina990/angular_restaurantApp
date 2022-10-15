import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  products: Array<IProducts> = products;
  product: IProducts = {} as IProducts;

  constructor(private cs: CartService) {}

  ngOnInit(): void {}
  addToCart() {
    this.cs.addToCart(this.product);
    alert('added');
  }
}
