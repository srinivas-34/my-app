import { Component, OnInit } from '@angular/core';
import { ORDERS } from './ORDERS';
import { environment } from 'src/environments/environment';
//import {ORDERS} from 'orders'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: String[] = [];
  orderName: String = environment.url;


  constructor() {}

  ngOnInit(): void {
    //environment.
    this.orders = ORDERS.orders;
  }

  onChange(name:String){
    if(name){      
      this.orders.push(name);
      console.log(this.orders);
    }
  }
  reset() {
    this.orders = ORDERS.orders;
  }
}
