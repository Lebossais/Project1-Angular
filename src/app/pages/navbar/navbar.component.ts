import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import {AuthServiceService} from "../../services/Auth/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user:any = null;

  constructor(public authService:AuthServiceService, private router:Router) {
  }
  ngOnInit(){
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state", auth)
        this.user=auth.user
      }
    )
  }

  handleLogout(){
    this.authService.logout()
     // this.router.navigate("")
  }

}
