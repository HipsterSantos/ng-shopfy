import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})

export class ShoppingComponent{
  ingredients: Ingredient[] = [
    {name: 'tomatoes', amount: 3},
    {name: 'potatos', amount: 34}
  ];


  setIngredient(val: Ingredient){
    this.ingredients.push(val)
  }
}
