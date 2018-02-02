import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
model : any = {};
  constructor(private user: UserService, private router:Router, private alert:AlertService) {}

  ngOnInit() {
  }
addUser(){
  this.user.create(this.model)
  .subscribe(
      data => {
          this.alert.success('User successfully added', true);
          this.router.navigate(['']);
      },
      error => {
          this.alert.error(error);
      });
}
}
