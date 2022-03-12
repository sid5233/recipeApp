import { Component, OnInit } from "@angular/core";
import { recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector:'app-recipe',
    templateUrl:'recipe.component.html',
    styleUrls:['./recipe.component.css'],
    providers:[RecipeService]
})

export class recipeComponent implements OnInit{

    selectedRecipe : recipe;
    constructor(private recipeService : RecipeService) { }

    ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
        (recipe:recipe) => {
            this.selectedRecipe = recipe;
        }
    )
    }



}