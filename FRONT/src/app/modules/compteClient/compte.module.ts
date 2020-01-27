import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
    {
      path: '', component: RegisterComponent 
    }
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
    declarations: [RegisterComponent]
  })
export class CompteModule { 

 
};




