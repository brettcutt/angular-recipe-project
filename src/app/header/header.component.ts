import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() activeComponent = new EventEmitter()
  recipeActive: boolean = false
  shoppingActive: boolean = false
  constructor() { }

  ngOnInit() {
  }

  onLinkClick(type: string) {
    this.activeComponent.emit(type)

  }

}
