import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name="ramanath";
  person={
    user:"ram"
  }
  arr=[1,2,3,4]
  getperson(){
    return "name";
  }
}
