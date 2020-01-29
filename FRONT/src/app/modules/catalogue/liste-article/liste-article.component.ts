import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';


import { Observable, pipe, Subject } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { AddArticle } from 'shared/actions/addArticle';
import { Store } from '@ngxs/store';
import { Article } from 'shared/models/article';
import { Product } from 'src/app/models/product';
import { Service } from 'src/app/service.service';
import { DelArticle } from 'shared/actions/delArticle';
import { ArticleFiltre } from 'src/app/models/filter';
@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.scss']
})
export class ListeArticleComponent implements OnInit {
  mode: any;
  panier: Observable<Article>;

  constructor(private apiService: Service, private store: Store) {
    this.mode = environment.mode;
    this.panier = this.store.select(state => state.panier.panier);

  }
  produits: Observable<Product[]>;
  filtre = new Subject<ArticleFiltre>();

  addArticle(id, nom, prixDollars, prixEuros, categorie, image, description) {
    this.store.dispatch(new AddArticle({ id, nom, prixEuros, prixDollars, categorie, image, description }));
  }

  delArticle(article) {
    this.store.dispatch(new DelArticle(article));
  }
  onDelClick(article: Product) {
    this.delArticle(article);
  }
  onAddClick(article: Product) {
    this.addArticle(article.id, article.nom, article.prixDollars, article.prixEuro, article.categorie, article.image, article.description);
  }
  compare(obj, value) {
    return true;
    
  }
  refreshFiltre($event) {
    this.filtre.next($event);
  }
  ngOnInit() {
    //this.produits = this.apiService.getProduitBackend();
    this.filtre.subscribe({
      next: (value) => {
        this.produits = this.apiService.getProduitBackend().pipe(
          map((objs: Product[]) => objs.filter((obj: Product) => this.compare(obj, value)))
        );
      }

    })

    this.filtre.next(new ArticleFiltre());

  }
}
