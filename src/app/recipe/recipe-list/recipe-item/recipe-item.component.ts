import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : recipe;
  constructor() { }
  @Output() myRecipe = new EventEmitter<void>();


  ngOnInit(): void {
  }
  recipeCalled(){
    this.myRecipe.emit();
  }
}
