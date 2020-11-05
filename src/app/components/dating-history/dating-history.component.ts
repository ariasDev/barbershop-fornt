import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dateInterface } from 'src/app/interface/date-interface';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-dating-history',
  templateUrl: './dating-history.component.html',
  styleUrls: ['./dating-history.component.css']
})
export class DatingHistoryComponent implements OnInit {

  checkoutForm: FormGroup;
  private suscribePost: Subscription;
  public equal: boolean;
  private dates: dateInterface ={
    _id:"01",
    idReserva:"32156",
    description:"corte",
    client:"Alejo",
    barber:"Juanpa",
    date:"Hoy",
    state:"Pendiente",
    __v:"0",
  }
  private array
  public ar = new Array()
  
  public anny
  public data
  constructor(private formBuilder: FormBuilder, private httpClientService: HttpClientService,private router: Router) { }

  ngOnInit(): void {
    this.getAllDates()
  }

  /*onSubmit(): void {
    this.suscribePost = this.httpClientService.getAllDates()
    .subscribe(response=> {this.anny=response
      console.log(this.anny)
      console.log("respone",response)
    })
  }*/

  clickaso(): void {
    console.log(this.array)
    console.log()
  }

  async getAllDates(){
    if (true) {
      let url = `http://localhost:3001/getReservas`;
      let response = await fetch(url, {
        method: 'GET',        
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .catch(error => {
          console.log('error', error);
        })
        .then(response => {
           console.log('response: ', response);
           this.array = response
           console.log(this.array)
           if(response.error){
            alert(response.errorDescription)
           }           
          }
        );
    } else {
      alert('Todos los campos deben estar Diligenciados')
    }
  }
//(dates: dateInterface)=>(this.dates = dates)


}
