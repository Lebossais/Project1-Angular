import { Component } from '@angular/core';
import { CarteRecetteComponent } from "../carte-recette/carte-recette.component";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {FormCreationRecetteComponent} from "../form-creation-recette/form-creation-recette.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarteRecetteComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  recipes=[1,1,1,1,1,1]

  constructor(public dialog: MatDialog) {
  }

  handleOpenCreateRecipeForm(){
    this.dialog.open(FormCreationRecetteComponent)
  }

}
