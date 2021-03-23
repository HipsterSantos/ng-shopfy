import { Recipe } from './../../shared/recipes.model';
import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class  RecipeListComponent{
  @Output() Sender = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test this 1','This is a simple teste','../../assets/img/food-1.jpg'),
    new Recipe('A test this 2','This is a simple teste','../../assets/img/food-2.jpg'),
    new Recipe('A test this 3','This is a simple teste','../../assets/img/food-4.jpg'),
    new Recipe('A test this 4 ','This is a simple teste','../../assets/img/food-3.jpg')
  ]

captureItem(value:Recipe){
this.Sender.emit(value);
}

}
