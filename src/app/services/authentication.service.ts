import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getToken(){
    var token:String | null="";
    token =localStorage.getItem("ACCESS TOKEN");
     if(token != null){
      return token;
     
  }else{
    return token;
  }
}
 setToken(token:string){
  localStorage.setItem("ACCESS TOKEN", token)
 }
}