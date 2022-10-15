import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products/IProducts';
import { products } from '../products/products';
import { CartService } from '../cart.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Array<IProducts> = [];
  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  constructor(private cs: CartService) {}

  ngOnInit(): void {
    this.items = this.cs.getItems();
  }
  onSubmit() {
    if (this.info.valid) {
      console.log(this.info.value);
    }
  }
}
