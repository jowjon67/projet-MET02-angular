
import { Injectable } from '@angular/core';
import { Observable,of,from,interval } from 'rxjs'; 
import { map,tap  } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http : HttpClient) { }
  
  public getProduitBackend() : Observable<any> {
    console.log("Get produit backend \n" + sessionStorage.getItem("token"));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      })
    };
    return this.http.get(environment.backendProduit, httpOptions);
  }

  public postLogin(login, mdp)
  {
    let data = JSON.stringify({
      login: login,
      motDePasse: mdp
    });
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post<Object>(environment.login,data, httpOptions).subscribe(dataReturned => 
      {
        sessionStorage.clear();
        sessionStorage.setItem("token",dataReturned['token'] );
        console.log("mise en session \n" + sessionStorage.getItem("token"));
      });
  }


}
