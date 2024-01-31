import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {UpdateFormRecetteComponent} from "../update-form-recette/update-form-recette.component";
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

  constructor(public dialog:MatDialog) {

  }

  handleOpenEditRecipeForm(){
    this.dialog.open(UpdateFormRecetteComponent)
  }


}
