import { Component } from '@angular/core';
import {PanierState} from '../../shared/states/panier-state';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../shared/actions/addArticle';

import { DelArticle } from '../../shared/actions/delArticle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CNAM-MET02-TP2';
}
