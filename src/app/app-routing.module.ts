import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBarberComponent } from './components/create-barber/create-barber.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { AuthenticateGuard } from './guards/authenticate.guard';

const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'create-barber', component: CreateBarberComponent,canActivate:[AuthenticateGuard] },

  { path: 'main', component: MainComponent,canActivate:[AuthenticateGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
