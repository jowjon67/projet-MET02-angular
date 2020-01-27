import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeArticleComponent } from './liste-article/liste-article.component';


const routes: Routes = [
  {
    path: '',
    component: ListeArticleComponent,
  },
  {path:'detail/:id', loadChildren:()=> import('../details/details.module').then(m => m.DetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class CatalogueComponentRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/