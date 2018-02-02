import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
 import { UserService } from './user.service';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Injectable()
export class AuthenticationService {

    constructor(private user: UserService, private http:HttpClient) { }

    login(username : string, password: string){

       // alert("inside login");
        console.log({ username: username, password: password });
         return this.http.post( 'http://localhost:8080/login', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
            });
    }
  }
   /* signup(username : string, password: string, usermail: string){

        alert("inside signup");
      //  console.log(this.user.username.value, this.user.email.value, this.user.password.value);
          return this.http.post( '/users/register', { username: username, password: password, email: usermail })
            .map((response: Response) => {
                let userInfo = response.json();
               
            });
    }*/
    


