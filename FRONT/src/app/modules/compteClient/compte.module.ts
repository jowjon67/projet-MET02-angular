import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent }
  ];
  
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,

      [RouterModule.forChild(routes)],
      ReactiveFormsModule
    ],
    providers:[],
    exports: [RouterModule],
    declarations: [RegisterComponent, LoginComponent]
  })
export class CompteModule { 

 
};




