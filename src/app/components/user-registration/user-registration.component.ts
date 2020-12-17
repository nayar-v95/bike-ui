import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm!:FormGroup;
  validateMessage ="";
  constructor() { }

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
    if(this.userForm.valid){
      this.userForm.reset();
    }else{
      this.validateMessage = "Please add valid entry"
    }

  }
}
