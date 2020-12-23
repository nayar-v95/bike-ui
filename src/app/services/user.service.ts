import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from "rxjs/Rx";

const httpOptions  ={
  headers : new HttpHeaders ({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedinStatus  =  JSON.parse(localStorage.getItem('loggedin') || 'false'); 
  private serviceUrl= '/server/api/v1/bikes/user/';
  constructor(private http:HttpClient) { }

  userRegister(registerBody:any){
    let body = JSON.stringify(registerBody);
    
    return this.http.post(this.serviceUrl+'register',body,httpOptions);
  }
  
  getUserByEmail(){

  }
  login(userBody:any){
    
    let body = JSON.stringify(userBody);
    console.log(userBody['username']);
    if (userBody['username'] == 'admin' && userBody['password'] == 'admin') {
      //set user
      localStorage.setItem('loggedin' , 'true');
      localStorage.setItem('user', 'admin');
      localStorage.setItem('userType', 'admin');
  }
  if (userBody['username'] == 'nadeem.bhati@sap.com' && userBody['password'] == 'password') {
    localStorage.setItem('loggedin' , 'true');
    localStorage.setItem('user', userBody['username']);
    localStorage.setItem('userType', 'normal');
    
  }
   return this.http.get('/server/api/v1/bikes');  
//  return this.http.post('/server/api/v1/bikes',body,httpOptions);
  
  }
  logout(){

  }
  getUsername() {
    return JSON.parse(localStorage.getItem('username') || '{}');
  }
  getUserType(){
    
    return JSON.parse(localStorage.getItem('userType') || '{}');
  }
  getLoginStatus(){
    return JSON.parse(localStorage.getItem('loggedin') || 'false');
  }

}
