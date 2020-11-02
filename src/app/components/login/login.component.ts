import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientService } from '../../services/http-client.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  checkoutForm: FormGroup;
  private suscribePost: Subscription;

  constructor(private formBuilder: FormBuilder, private httpClientService: HttpClientService) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData): void {
    console.log('entra en el onSubmit');
    console.log('---Data: ', userData);
    if (userData.email && userData.password) {
      this.suscribePost = this.httpClientService.login(userData).subscribe(response => {
        console.log('RESPUESTA DEL BACK: ', response);
      })
    } else {
      alert('Todos los campos deben estar Diligenciados')
    }
  }

  get email() { return this.checkoutForm.get('email') }
  get password() { return this.checkoutForm.get('password') }

  ngOnDestroy() {
    this.suscribePost.unsubscribe()
  }

}
