import { error } from '@angular/compiler/src/util';
import { UserService } from './../../services/user.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exit } from 'process';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm!:FormGroup;
  validateMessage ="";
  alreadyExist= true;
  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup( {
      firstName  : new FormControl('',Validators.required),
      lastName  : new FormControl('',Validators.required),
      email  : new FormControl('',Validators.required),
      password  : new FormControl('',Validators.required),
      dob  : new FormControl('',Validators.required)
    });
  }
  onUserRegistrationSubmit(){
    
    if(this.userForm.valid ){
    
      this.userService.userRegister(this.userForm.value).subscribe(
        data => {
          if(data == false){
            this.alreadyExist = true;
            this.validateMessage = "Email address already in use";
       } },
        error =>{console.log(error)}
      );
      if(!this.alreadyExist)
      {
        this.userForm.reset();
        this.router.navigate(['/login']);
      }
    }
    else{
      this.validateMessage = "Please add valid entry"
    } 

  }
}
