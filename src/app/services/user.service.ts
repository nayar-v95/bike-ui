import { logging } from 'protractor';
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
  private serviceUrl= '/server/api/v1/user/';
  constructor(private http:HttpClient) { }

  userRegister(registerBody:any){
    let body = JSON.stringify(registerBody);
    return this.http.post<boolean>('/server/api/v1/user/register/',body,httpOptions);
  }
  
  getUserByEmail(email:string){
    console.log("email = "+email);
    return this.http.get('/server/api/v1/user/email/'+email);
  }
  login(userBody:any){
    let body = JSON.stringify(userBody);
    return this.http.post<Boolean>('/server/api/v1/user/login',body,httpOptions); 
  }
  logout(){
    localStorage.removeItem('loggedin');
    localStorage.removeItem('username');
    localStorage.removeItem('userType');
    return true;
  }
  setUserData(loggedin:string,username:string,userType:string){
    localStorage.setItem('loggedin',loggedin);
    localStorage.setItem('username',username);
   localStorage.setItem('userType',userType); 
  }
  getUsername() {
    return JSON.stringify(localStorage.getItem('username') || '{}');
  }
  getUserType(){
    
    return JSON.stringify(localStorage.getItem('userType') || '{}');
  }
  getLoginStatus(){
    return JSON.parse(localStorage.getItem('loggedin') || 'false');
  }

}
