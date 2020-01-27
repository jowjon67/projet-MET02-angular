import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl = environment.backendConnexion;
  constructor(private http: HttpClient) {
    this.baseUrl += '/users'
  }

  login(loginP:string, passwordP:string ): Observable<any> {
    const loginModel = { login: loginP, password: passwordP};
    return this.http.post(`${this.baseUrl}/login`, loginModel);
  }

  getToken() {
    return localStorage.getItem('jwt_token');
  }
  
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('jwt_token');
    return (authToken !== null) ? true : false;
  }

}
