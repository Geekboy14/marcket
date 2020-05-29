import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../services/goods.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from '../../interfaces/good';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods:Good[]=[]
  goodsObservable: Subscription;
  add: number = -1;
  constructor(private gs: GoodsService, private cs : CartService) { }

  ngOnInit() {
   this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
     this.goods = data.map(element =>{
      return {
        id: element.payload.doc.id,
        name: element.payload.doc.data()['name'],
        price: element.payload.doc.data()['price'],
        photoUrl: element.payload.doc.data()['photoUrl'],
      }
    })})
  }

  ngOnDestroy(){
    this.goodsObservable.unsubscribe();
  }

  addToCArt(index:number){
    this.add = +index
  }
  buy(amount: number){
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(() => this.add = -1)
  }
}
