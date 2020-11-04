import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBarberComponent } from './components/create-barber/create-barber.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'create-barber', component: CreateBarberComponent },

  { path: 'main', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
