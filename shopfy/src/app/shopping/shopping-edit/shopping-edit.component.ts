import { Component, ElementRef, OnInit, ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @ViewChild('name',{static: false})  name: ElementRef | any;
  @ViewChild('amount',{static:false}) amount: ElementRef | any;
  @Output() ingredientAdded = new EventEmitter<{name: string ,amount: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
      const newIngredient = {
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value
      };
        this.ingredientAdded.emit(newIngredient)
  }

}
