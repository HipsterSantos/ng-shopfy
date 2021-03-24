import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @ViewChild('name',{static:true})  name: ElementRef;
  @ViewChild('amount',{static:true}) amount: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
