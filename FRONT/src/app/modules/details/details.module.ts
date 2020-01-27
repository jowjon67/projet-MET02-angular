import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '', component: DetailsComponent 
    }
  ];
  
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      [RouterModule.forChild(routes)],
  
    ],
    providers:[],
    exports: [RouterModule],
  //ListeArticleComponent, DetailComponent
    declarations: [ DetailsComponent]
  })
export class DetailModule { 

 
};




