import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger',
     'A hamburger with a rim of lectuce sitting on a black plate against a black background', 
    'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-MCBITTYBEANBURGERS2/18COOKING-MCBITTYBEANBURGERS2-articleLarge.jpg'
  ,[
    new Ingredient('meal', 1),
    new Ingredient ('tomato',2)
  ]),
    new Recipe('Special fried rice',
     'Friend rice is a dish of cooked rice',
      '../src/app/img/nasgor.jpg',
      [
        new Ingredient ('rice', 1),
        new Ingredient ('meal',3),
        new Ingredient ('egg', 1)
      ]),
  ];
  
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

getRecipe(index:number){
  return this.recipes [index];
}

constructor(private slsService: ShoppingListService) { }

}
