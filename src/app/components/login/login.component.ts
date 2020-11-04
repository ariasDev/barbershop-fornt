import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientService } from '../../services/http-client.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm: FormGroup;
  private suscribePost: Subscription;

  constructor(private formBuilder: FormBuilder, 
    private httpClientService: HttpClientService,
    private router: Router,
    ) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(userData): void {
    console.log('entra en el onSubmit');
    console.log('---Data: ', userData);
    if (userData.email && userData.password) {         
      this.suscribePost = this.httpClientService.login(userData).subscribe(response => {
        console.log(response.toString)
        this.setUser(userData.userData.userType)
        console.log('RESPUESTA DEL BACK: ', response);
        this.router.navigate(['/main']);
      })
    } else {
      alert('Todos los campos deben estar Diligenciados')
    }
  }

  get email() { return this.checkoutForm.get('email') }
  get password() { return this.checkoutForm.get('password') }

  OnRedirect(){
    this.router.navigate(["/register"])
  }
  
  setUser(userType): void {
    localStorage.setItem("userType", userType);
  }

 name = (password, passwordConfirmation) => {
  return password === passwordConfirmation ?  true : false
}

}
