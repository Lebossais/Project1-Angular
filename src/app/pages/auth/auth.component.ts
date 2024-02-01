import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {AuthServiceService} from "../../services/Auth/auth-service.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister= false;

  constructor(public authService:AuthServiceService) {
  }

  registerForm = new FormGroup({
    fullname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[
      Validators.required,
      Validators.minLength(6),
    ])
  });

  loginForm = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,])
  });

  handleRegister(){
    console.log("register", this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("Inscription réussie", response)
      }
    })
  }

  handleLogin(){
    console.log("login", this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt", response.jwt);
        this.authService.getUserProfile().subscribe();
        console.log("Connexion réussie", response)
      }
    })
  }

  togglePanel(){
    this.isRegister=!this.isRegister
  }

}
