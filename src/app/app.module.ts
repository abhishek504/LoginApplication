import { ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import {AlertService} from './alert.service';
import{UserService} from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path :'dashboard',
  canActivate: [AuthguardGuard], 
  component:DashboardComponent},
  {path:'home',
  //canActivate: [AuthguardGuard],
  component:HomeComponent},
  { path: '**', redirectTo: '' }

  // otherwise redirect to home
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AlertService,
              UserService,
              AuthguardGuard,
            AuthenticationService],
  bootstrap: [AppComponent]
})
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export class AppModule { }
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
