import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddArticle } from 'shared/actions/addArticle';

import { Article } from 'shared/models/article';
import { Product } from 'src/app/models/product';
import { Service } from 'src/app/service.service';
import { DelArticle } from 'shared/actions/delArticle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  nbArticles : number;
  panier: Observable<Article>;

  constructor(private store: Store) 
  {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
    this.panier = this.store.select(state => state.panier.panier);
  }
  delArticle(article)
  {
    this.store.dispatch(new DelArticle(article)); 
  }
  onDelClick(article:Product)
  {
    this.delArticle(article);
  }
  ngOnInit() {
  }

}
