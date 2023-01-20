import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'svg-angular-first';
  elementOne: number = 0;
  elementTwo: number = 13;
  elementThree: number = 1;
  elementFour: number = 4;
  elementFive: number = 3;
 
  check( element:number ) {
    if(element==0) return true
    else return false
  }

}
