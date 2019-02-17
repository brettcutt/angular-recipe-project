import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {
  selectedRecipe: Recipe;


  constructor(private recipeService: RecipeService) { }



  ngAfterContentChecked(): void {
    this.selectedRecipe = this.recipeService.recipeSelected
  }



}
