import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { FormsModule} from '@angular/forms';
import { PhoneNumberPipe } from './phone-numbre.pipe';
import { ErrorDirective } from './error.directive';
import { HttpClientModule } from '@angular/common/http';



import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';


import { PanierState } from 'shared/states/panier-state';
import { AccueilComponent } from './accueil/accueil.component';
//import { CompteComponent } from './compte/compte.component';


const appRoutes: Routes = [
  //{ path: 'compteClient', component:CompteComponent
  //},
  { path: 'formulaire', 
    loadChildren: () => import('./modules/compteClient/compte.module').then(m => m.CompteModule) 
  },
  { path: 'catalogue', 
    loadChildren: () => import('./modules/catalogue/catalogue.module').then(m => m.CatalogueModule) 
  },
  { path: 'panier', 
    loadChildren: () => import('./modules/panier/panier.module').then(m => m.PanierModule) 
  },
  { path: 'accueil', component: AccueilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    RecapitulatifComponent,
    PhoneNumberPipe,
    ErrorDirective,
    AccueilComponent
  ],
  imports: [
    NgxsModule.forRoot([
      PanierState
    ]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
