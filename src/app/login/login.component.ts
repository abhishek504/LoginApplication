import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{UserService} from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
model: any= {};
  constructor(private router:Router, private user:UserService, private authService: AuthenticationService
  , private alert:AlertService) { }

  ngOnInit() {
  }
login(){}
  /*console.log("Hey There!");
  if(this.model.username ==="admin" && this.model.password === "admin"){
      this.user.setUserLoggeIn();
   console.log("Hello admin");
    this.router.navigate(['dashboard']);
  }
  else{
    this.router.navigate(['home']);
    console.log("");
    console.log("You are not a admin");
  }
}*/

 onAdminCLick(){
  this.authService.login(this.model.username, this.model.password).
  subscribe(result=>{
    this.user.setUserLoggeIn();
    this.router.navigate(['dashboard']);
  },error=>{
    console.log(error.body);
    alert("username or password is incorrect");
  });
}

onUserCLick(){
  this.authService.login(this.model.username, this.model.password).
  subscribe(result=>{
    this.user.setUserLoggeIn();
    this.router.navigate(['home']);
  },error=>{
    console.log(error.body);
    alert("username or password is incorrect");
  });
}
}




