import { UserService } from './../../services/user.service';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  public bikes:any;
  public email!:String;
  constructor(private bikeSevice:BikeService,private userService:UserService) { }
  
  ngOnInit(): void {
    this.email = this.userService.getUsername();
  this.getBikesByEmail();
  }
  getBikesByEmail(){
    this.bikeSevice.getBikesByEmail(this.email).subscribe(
      data => {this.bikes = data},
      err=> {console.error(err)},
      ()=>console.log("bikes Loaded")
    ); 
  }

}
