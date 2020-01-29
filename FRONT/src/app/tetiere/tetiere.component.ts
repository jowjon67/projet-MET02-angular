import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.scss']
})
export class TetiereComponent implements OnInit {
  
  nbArticles : number;

  constructor(private store: Store, private route : ActivatedRoute, private router: Router) 
  {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
  }


  ngOnInit() {
    
  }

  onDisconnect()
  {
    sessionStorage.clear();
    this.router.navigate(['accueil']);
  }

}
