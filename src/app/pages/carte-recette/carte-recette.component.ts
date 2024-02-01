import {Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {UpdateFormRecetteComponent} from "../update-form-recette/update-form-recette.component";
import {RecipeServiceService} from "../../services/Recipe/recipe-service.service";
@Component({
  selector: 'app-carte-recette',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './carte-recette.component.html',
  styleUrl: './carte-recette.component.scss'
})
export class CarteRecetteComponent {

  @Input() recipe:any
  constructor(public dialog:MatDialog, private recipeService:RecipeServiceService) {

  }

  handleOpenEditRecipeForm(){
    this.dialog.open(UpdateFormRecetteComponent,{data :this.recipe})
  }

  handleDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id).subscribe()
  }


}
