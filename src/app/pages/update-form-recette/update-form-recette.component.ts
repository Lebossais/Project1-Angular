import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-update-form-recette',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './update-form-recette.component.html',
  styleUrl: './update-form-recette.component.scss'
})
export class UpdateFormRecetteComponent {

  onSubmit(){
    console.log("values : ", this.recipeItem)
  }


  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:"",
  }

}
