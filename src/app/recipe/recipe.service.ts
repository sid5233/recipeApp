import { EventEmitter } from "@angular/core";
import { recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<recipe>();

    private recipes : recipe[] = [
        new recipe('My Recipe', 'this is dummy recipe', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'), 
        new recipe('My Recipe', 'this is Another dummy recipe', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')
      ];


      getRecipes(){
          return this.recipes.slice(); 
      }
}