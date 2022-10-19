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
  id: number = 0;

  constructor(private cs: CartService) {}

  ngOnInit(): void {}

  addToCart(i: any) {
    alert('added to Cart');
    this.cs.addToCart(i);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { myItems } from '../myItems/myItems';
// import { ImyItems } from '../myItems/ImyItems';
// import { CartServiceService } from '../cart-service.service';
// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//  myItems:Array<ImyItems> = myItems;
//  Index = 0;
//  item: ImyItems = {} as ImyItems
//   constructor(private cartService : CartServiceService) { }
//   addToCart(i:any){
//       alert("added to Cart")
//       this.cartService.addToCart(i);
//       console.log(i)
//     };
//   ngOnInit( ): void {
//   }
// }
