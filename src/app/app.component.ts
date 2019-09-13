import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Food{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ctrang';

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'España'},
    {value: 'pizza-1', viewValue: 'Francia'},
    {value: 'tacos-2', viewValue: 'Belgica'}
  ];

  color = 'primary';
}
