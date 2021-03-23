import { Recipe } from './../../../shared/recipes.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-itme.component.scss']
})

export class RecipeListItemComponent{
  @Input('recipeItem') recipes: Recipe[] = [];
  @Output() recieve = new EventEmitter<Recipe>();
  constructor(){

  }

  sender(val:Recipe){
      this.recieve.emit(val);
  }
}
