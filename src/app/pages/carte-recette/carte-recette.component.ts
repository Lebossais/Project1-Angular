import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-carte-recette',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './carte-recette.component.html',
  styleUrl: './carte-recette.component.scss'
})
export class CarteRecetteComponent {

}
