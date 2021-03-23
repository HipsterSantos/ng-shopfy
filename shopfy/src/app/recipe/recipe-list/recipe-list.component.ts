import { Recipe } from './../../shared/recipes.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class  RecipeListComponent{
  recipes: Recipe[] = [
    new Recipe('A test this','This is a simple teste','../../assets/img/food-1.jpg'),
    new Recipe('A test this','This is a simple teste','../../assets/img/food-2.jpg'),
    new Recipe('A test this','This is a simple teste','../../assets/img/food-4.jpg'),
    new Recipe('A test this','This is a simple teste','../../assets/img/food-3.jpg')
  ]
}
