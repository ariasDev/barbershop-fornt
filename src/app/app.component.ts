import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barberfront';
  
  constructor(private router: Router){
  }
  
  logout(){
    localStorage.setItem("userType",null) 
  }

  OnRedirect(){
    location.reload()
  }

  validateUserType(): boolean {
    return localStorage.getItem("userType")==="admin" ? true : false;
  }

  currentUser(): boolean {    
    return localStorage.getItem("userType") != null ? true : false;
  }

}
