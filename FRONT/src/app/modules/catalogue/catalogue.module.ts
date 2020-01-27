import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { CatalogueComponentRoutingModule } from './catalogue-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; 
import { FiltreProduitsComponent } from 'src/app/filtre-produits/filtre-produits.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueComponentRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[],
//ListeArticleComponent, DetailComponent
  declarations: [ListeArticleComponent, FiltreProduitsComponent]
})
export class CatalogueModule { 

 
};




