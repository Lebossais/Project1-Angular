import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: 'app-form-creation-recette',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButton, MatRadioModule],
  templateUrl: './form-creation-recette.component.html',
  styleUrl: './form-creation-recette.component.css'
})
export class FormCreationRecetteComponent {

  onSubmit(){
    console.log("values : ", this.recipeItem)
  }


  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:"",
  }

  protected readonly onsubmit = onsubmit;
}
