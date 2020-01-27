import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service.service';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AddArticle } from 'shared/actions/addArticle';
import { $ } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor (private apiService : Service, private store: Store, private route:ActivatedRoute) 
  {
    //console.log(this.route.snapshot.paramMap.get('id'));
  }
  produits : Observable<Product[]>;
  selectedArticle : Product;
 

  addArticle(id, nom, prixDollars, prixEuros, categorie, image, description ) { 
    this.store.dispatch(new AddArticle({ id, nom, prixEuros, prixDollars, categorie, image, description})); 
   }  
  
  onAddClick (article:Product) {
   this.addArticle (article.id, article.nom, article.prixDollars, article.prixEuro, article.categorie, article.image, article.description);
  }
  ngOnInit() {
    this.apiService.getProduitBackend().subscribe((items) => 
    {
      this.selectedArticle = items.find(art => art.id==this.route.snapshot.paramMap.get('id'))
      console.log("\n"+this.selectedArticle);
    });
  
  }

}
