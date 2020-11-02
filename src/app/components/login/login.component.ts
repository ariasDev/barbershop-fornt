import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  checkoutForm: FormGroup;
  private suscribeGet: Subscription;
  private suscribePost: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData):void {
    console.log('entra en el onSubmit');
    console.log('---Data: ', userData);
    
  }

  get email() { return this.checkoutForm.get('email') }
  get password() { return this.checkoutForm.get('password') }

  ngOnDestroy() {
    this.suscribeGet.unsubscribe()
    this.suscribePost.unsubscribe()
  }

}
