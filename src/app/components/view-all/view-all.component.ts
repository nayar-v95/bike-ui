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
