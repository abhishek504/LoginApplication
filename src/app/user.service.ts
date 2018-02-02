import { Injectable } from '@angular/core';
import {User} from './models/index';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  model : any = {};
  private isUserLoggedIn;

  constructor(private http:Http) {
    this.isUserLoggedIn = false;
   }

/*authorizeCredentials(name: String,password: String){
  //return this.http.get('http://localhost:8080/rdops/project/hello');
  return this.http.post('http://localhost:8080/login',{'username':name,'password':password});
} */  

setUserLoggeIn(){
  console.log("inside setuserLoggmethod");
  this.isUserLoggedIn = true;
  //console.log("inside setuserLoggmethod");
}
getUserLoggedIn(){
  return this.isUserLoggedIn;
}
logoutUserService(){
  this.isUserLoggedIn = false;

}
create(user: User) {
  return this.http.post('http://localhost:8080/register', {userdata:user});
}
}
