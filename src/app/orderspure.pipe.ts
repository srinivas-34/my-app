import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderspure',
  pure: false
})
export class OrderspurePipe implements PipeTransform {

  transform(orders: String[]): any {
    console.log("In the OrderspurePipe")
    return orders.filter(order => (order.indexOf("Bond") >0));
  }

}
