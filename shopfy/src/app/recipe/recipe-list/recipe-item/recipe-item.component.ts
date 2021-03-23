import { Recipe } from './../../../shared/recipes.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-itme.component.scss']
})

export class RecipeListItemComponent{
  @Input('recipeItem') recipes: Recipe[] = [];
  constructor(){

  }
}
