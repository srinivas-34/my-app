import { Component } from '@angular/core';

@Component({
  selector: 'app-gitexample',
  standalone: true,
  imports: [],
  templateUrl: './gitexample.component.html',
  styleUrl: './gitexample.component.css'
})
export class GitexampleComponent {

temp1:number=5;
temp2:number=10

getsum(){
  let sum:number;
  sum=this.temp1 + this.temp2;
  console.log(sum);

}


}
