import {Component, Inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {RecipeServiceService} from "../../services/Recipe/recipe-service.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {data} from "autoprefixer";

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
    this.recipeService.updateRecipe(this.recipeItem).subscribe({
          next: data => console.log("data", data),
          error: error=>console.log("error", error)
        })
    console.log("values : ", this.recipeItem)
  }

  ngOnInit(){
    this.recipeItem=this.recipe;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: any,private recipeService:RecipeServiceService) {
  }


  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:"",
  }

}
