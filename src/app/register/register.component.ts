import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { UserService } from '../user.service';
import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any = {};

  constructor(private router : Router, private user: UserService, private alert: AlertService,
private authService: AuthenticationService) { }

  ngOnInit() {
  }
  register() {
    this.user.create(this.model)
        .subscribe(
            data => {
                this.alert.success('Registration successful', true);
                this.router.navigate(['']);
            },
            error => {
                this.alert.error(error);
            });
}
}

