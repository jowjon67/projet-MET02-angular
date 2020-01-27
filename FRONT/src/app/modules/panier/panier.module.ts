import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '', component: PanierComponent 
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
    declarations: [ PanierComponent]
  })
export class PanierModule { 

 
};




