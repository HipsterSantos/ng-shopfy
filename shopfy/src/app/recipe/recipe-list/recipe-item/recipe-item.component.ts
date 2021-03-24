import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../../shared/recipes.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-itme.component.scss']
})

export class RecipeListItemComponent{
  @Input('recipeItem') recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService){

  }

  sender(val:Recipe){
      this.recipeService.recipeSelected.emit(this.recipes);
  }
}
