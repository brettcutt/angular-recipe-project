import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active: string = "";
  onActiveComponent(data: string) {
    console.log(data)
    this.active = data
  }
}
