import { Component } from '@angular/core';
import {CarteRecetteComponent} from "../carte-recette/carte-recette.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarteRecetteComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
