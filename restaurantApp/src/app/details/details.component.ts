import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/IProducts';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cs: CartService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
      console.log(this.id);
    });
  }
  addToCart() {
    this.cs.addToCart(this.product);
    alert('added');
  }
}
