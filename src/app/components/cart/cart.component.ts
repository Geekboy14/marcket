import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = [];
  constructor(private cs : CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe( cart => {
        this.cart = cart.map(shopping => {
          return {
            id:shopping.payload.doc.id,
            amount: shopping.payload.doc.data()['amount'],
            name: shopping.payload.doc.data()['name'],
            price: shopping.payload.doc.data()['price'],
          }
        })
    })
  }
delete(index){
this.cs.delete(this.cart[index].id)
}
}
