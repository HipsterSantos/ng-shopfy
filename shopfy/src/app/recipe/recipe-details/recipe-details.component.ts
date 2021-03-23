import { Recipe } from './../../shared/recipes.model';
import { Component, OnInit, SimpleChange, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{

  @Input('recipe') recipes:Recipe = new Recipe('','','');
 constructor(){

 }

 ngOnInit(){
//hook here
 }


}
