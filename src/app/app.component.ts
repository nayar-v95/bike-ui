import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-ui';
  uri! :String; 
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe(event => {
          this.uri = this.route.url
           console.log(this.uri);
        });
  }
}
