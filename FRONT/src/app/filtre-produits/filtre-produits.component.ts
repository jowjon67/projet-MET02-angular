import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { ArticleFiltre } from '../models/filter';
import { Article } from 'shared/models/article';

@Component({
  selector: 'app-filtre-produits',
  templateUrl: './filtre-produits.component.html',
  styleUrls: ['./filtre-produits.component.scss']
})
export class FiltreProduitsComponent implements OnInit {

  @Output() filter : EventEmitter<ArticleFiltre> = new EventEmitter<ArticleFiltre>();
  filtreNom : string = "";

  constructor() { }

  ngOnInit() {
  }

  sendFiltreParNom(){
    let f = new ArticleFiltre();
    f.nom = this.filtreNom;

    this.filter.emit(f);
  }

}
