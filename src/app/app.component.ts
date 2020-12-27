import { UserService } from './services/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-ui';
  uri! :String; 
  loggedInStatus= false;
  userType!:string;
  username!:string;
  
  constructor(private route: Router, private userService:UserService) {
    this.getUserData();
  }
  getUserData(){
    this.loggedInStatus= this.userService.getLoginStatus() ;
    this.userType = this.userService.getUserType();
    this.username = this.userService.getUsername();
  }
  ngOnInit() {
    this.route.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe(event => {
          this.uri = this.route.url;
          this.getUserData();
          console.log("app component username"+this.username);
          console.log("app component userType"+this.userType);
          console.log("app component userstatus"+this.loggedInStatus);
        });
  }
}
