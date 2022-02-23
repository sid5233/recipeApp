import { Component, OnInit } from "@angular/core";
import { recipe } from "./recipe.model";

@Component({
    selector:'app-recipe',
    templateUrl:'recipe.component.html',
    styleUrls:['./recipe.component.css']
})

export class recipeComponent implements OnInit{

    selectedRecipe : recipe;
    constructor() { }

    ngOnInit(): void {
    }
}