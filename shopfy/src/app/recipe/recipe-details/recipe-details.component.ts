import { Component , OnInit, SimpleChange, OnChanges} from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{

    recipes: any[] = [];
 constructor(){

 }

 ngOnInit(){
//hook here
 }


}
