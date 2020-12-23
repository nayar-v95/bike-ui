import { BikeService } from './../../services/bike.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public bikes:any;
buyerName:any;
email:any;
model:any;
  constructor(private bikeSevice:BikeService) { }
  
  ngOnInit(): void {
  this.getBikes();
  }
  getBikes(){
    this.bikeSevice.getBikes().subscribe(
      data => {this.bikes = data},
      err=> {console.error(err)},
      ()=>console.log("bikes Loaded")
    );
  }
  searchByBuyerName(){
    if (this.buyerName == "") {
      this.ngOnInit()
    } else {
      this.bikes = this.bikes.filter((res: { buyerName: string; })  =>{
        return res.buyerName.toLocaleLowerCase().match(this.buyerName.toLocaleLowerCase());
      } )
    }
  }
  
  searchByEmail(){
    if (this.email == "") {
      this.ngOnInit()
    } else {
      this.bikes = this.bikes.filter((res: { email: string; })  =>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
      } )
    }
  }
  searchByModel(){
    if (this.model == "") {
      this.ngOnInit()
    } else {
      this.bikes = this.bikes.filter((res: { model: string; })  =>{
        return res.model.toLocaleLowerCase().match(this.model.toLocaleLowerCase());
      } )
    }
  }
}
