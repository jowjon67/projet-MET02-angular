
import { Injectable } from '@angular/core';
import { Observable,of,from,interval } from 'rxjs'; 
import { map,tap  } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router, RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http : HttpClient) { }
  
  public getProduitBackend() : Observable<any> {
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
      email: login,
      password: mdp
    });
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(environment.login,data, httpOptions).subscribe(dataReturned => 
      {
        sessionStorage.clear();
        sessionStorage.setItem("token",dataReturned['token']);
      });
  }

  public postRegister(data)
  {
    console.log(data);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post<Object>(environment.register,data, httpOptions).subscribe(dataReturned => 
      {
          
      });
  }

  public getInfoRegister(uid) : Observable<any> 
  {
    let data = JSON.stringify({
      id: uid
    });
    let httpOptions = 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const params = new HttpParams().set('id', '1');
    return this.http.get(environment.informationUtilisateur,{params});
  }


}
