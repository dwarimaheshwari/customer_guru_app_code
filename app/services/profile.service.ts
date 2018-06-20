import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username:string;


  constructor(private _http:Http) {
   console.log("Service is running");
   this.username="tom";
   }

   getUsers(){
     return this._http.get("https://api.github.com/search/users?q="+this.username).pipe(
            map(res=>res.json()
            ));
   }
   getSingleUser(){
    
      return this._http.get("https://api.github.com/users/"+this.username).pipe(
             map(res=>res.json()
             ));
    
   }
   getSingleUserRepos(){
    
    return this._http.get("https://api.github.com/users/"+this.username+"/repos").pipe(
           map(res=>res.json()
           ));
  
 }
   updateUser(username:string){
     this.username=username;

   }
}
