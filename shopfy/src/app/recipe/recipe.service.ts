import { Recipe } from './../shared/recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe | Recipe[]>();
  recipes: Recipe[] = [
    new Recipe('A test this 1','This is a simple teste','../../assets/img/food-1.jpg'),
    new Recipe('A test this 2','This is a simple teste','../../assets/img/food-2.jpg'),
    new Recipe('A test this 3','This is a simple teste','../../assets/img/food-4.jpg'),
    new Recipe('A test this 4 ','This is a simple teste','../../assets/img/food-3.jpg')
  ]

  getRecipes(){
      return this.recipes.slice();
  }
}
