import {  Observable } from "rxjs/Rx";
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, Form } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {
  bikeForm! :FormGroup;
  validateMessage :String ="";

  constructor(private bikeService:BikeService) { }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      buyerName : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      phone :new FormControl('',Validators.required),
      model :new FormControl('',Validators.required),
      serialNumber :new FormControl('',Validators.required),
      price :new FormControl('',Validators.required),
      purchaseDate :new FormControl('',Validators.required),
      contact : new FormControl()
    });
  }
  submitBikeRegistration(){
    if(this.bikeForm.valid){
      this.validateMessage = "saved";
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return Observable.throwError(error);
        }
      );
    }else{
      this.validateMessage = "please add valid entry";
    }
  }

}
