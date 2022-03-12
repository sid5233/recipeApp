import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : recipe;
  constructor(private recipeService : RecipeService) { }



  ngOnInit(): void {
  }
  recipeCalled(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
