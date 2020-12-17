import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes:any;
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

}
