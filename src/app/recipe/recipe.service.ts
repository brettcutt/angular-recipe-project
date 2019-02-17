import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core'

export class RecipeService {
    recipeSelected

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'),
        new Recipe('Pumpkin', 'This is another test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAb671Qrofpow7sAy3KSx1g5GQkTbXPTyBnC4vrPFB0I9gB9e')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}