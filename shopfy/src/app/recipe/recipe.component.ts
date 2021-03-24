import { RecipeService } from './recipe.service';
import { Recipe } from './../shared/recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService]
})
export class  RecipeComponent implements OnInit{
  recipe: Recipe | Recipe[] = new Recipe('','','');
  constructor(private recipeService: RecipeService){

  }

    ngOnInit() {
      this.recipeService.recipeSelected.subscribe(
        (data)=>{
          this.recipe = data;
        }
      )
    }
}
