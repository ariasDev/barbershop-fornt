import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientService } from '../../services/http-client.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy{

  checkoutForm: FormGroup;
  private suscribePost: Subscription;

  constructor(private formBuilder: FormBuilder, private httpClientService: HttpClientService) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      fullname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData): void {
    console.log('---Data: ', userData);
    if (userData.email && userData.password) {
      this.suscribePost = this.httpClientService.registry(userData).subscribe(response => {
        console.log('RESPUESTA DEL BACK: ', response);
      })
    } else {
      alert('Todos los campos deben estar Diligenciados')
    }
  }

  ngOnDestroy() {
    this.suscribePost.unsubscribe()
  }
}
 