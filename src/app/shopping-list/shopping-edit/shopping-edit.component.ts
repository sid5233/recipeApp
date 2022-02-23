import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild ('inputName') inputNameref : ElementRef;
  @ViewChild ('inputAmount') inputAmountref : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(){
    const ingName = this.inputNameref.nativeElement.value;
    const ingAmount = this.inputNameref.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }


}
