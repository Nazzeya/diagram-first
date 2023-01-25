import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  atm1: number = 1.2
  atm2: number = 3.4

  elements: number[] = [0, 13, 1, 4, 13];
 
  check( element:number ) {
    if(element==0) return true
    else return false
  }

}
