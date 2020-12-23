import {  Observable } from "rxjs/Rx";
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  validateMessage:String = "";
  username!:String ;
  userType!:String ;
  constructor(private router :Router,private userService:UserService) { }

  ngOnInit(): void {
    //if its already login redirect to home page
    this.loginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    });
  }
  submitLoginForm(){
    console.log("clicked");
    //send a post query with username and password.
    this.userService.login(this.loginForm.value).subscribe(
      data =>{
        this.username = this.userService.getUsername();
        this.userType = this.userService.getUserType();
        return true;
      },
      error =>{
         return Observable.throwError(error);
      }
    );
    

  }


}
