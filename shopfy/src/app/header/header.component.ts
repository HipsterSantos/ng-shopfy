import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menu =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  actionRecipe(){
    this.menu.emit('recipe');
  }
  actionShopping(){
    this.menu.emit('shopping');
  }

}
