import { Recipe } from './../shared/recipes.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class  RecipeComponent{
  recipe: Recipe = new Recipe('','','');
  constructor(){

  }

}
