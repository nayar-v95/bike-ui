import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  validateMessage:String = "";
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    });
  }
  submitLoginForm(){
    console.log("clicked");
    this.validateMessage = "Login Failed";
    //send a request for login
  }


}
