import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions  ={
  headers : new HttpHeaders ({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private serviceUrl= '/server/api/v1/bikes/';
  constructor(private http : HttpClient) { }
  getBikes(){
    return this.http.get(this.serviceUrl);
  }
  getBike(id:any){
    return this.http.get(this.serviceUrl+id);
  }
  createBikeRegistration(bike:any){
    console.log (bike);
    let body = JSON.stringify(bike);
    
    return this.http.post(this.serviceUrl,body,httpOptions);
  }
  deleteById(id:any){
    return this.http.delete(this.serviceUrl+id);
  }
}
