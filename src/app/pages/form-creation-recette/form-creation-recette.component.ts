import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import {RecipeServiceService} from "../../services/Recipe/recipe-service.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-form-creation-recette',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatRadioModule],
  templateUrl: './form-creation-recette.component.html',
  styleUrl: './form-creation-recette.component.scss'
})
export class FormCreationRecetteComponent {

    protected readonly onsubmit = onsubmit;

  onSubmit(){
    console.log('values : ', this.recipeItem)
      this.recipeService.createRecipe(this.recipeItem).subscribe(
          {
              next:data=>console.log("created recipe", data),
              error:error=>console.log("error", error)
          }
      )
  }


  recipeItem:any={
    title:"",
    description:"",
    foodType:"",
    image:"",
  }

  constructor(private recipeService:RecipeServiceService) {
  }

}
