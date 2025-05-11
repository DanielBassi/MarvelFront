import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../models/decode_token';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtPayload } from '../models/jwtPayload';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly httpClient = inject(HttpClient);
  private readonly tokenKey = environment.TOKEN_KEY;
  private readonly API_URL = environment.API_URL;
  
  constructor() { 
    this.isTokenExpired(this.getToken())
  }

  public register(email: string, identification: string,  name: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}user`, {
      data: {
        email, identification, name, password
      }
    })
  }

  public login(email: string,  password: string): Observable<any> {
    return this.httpClient.post(`${this.API_URL}user/login`, {
      data: { email, password }
    })
  }

  public logout() {
    sessionStorage.removeItem(this.tokenKey);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  public setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public isTokenExpired(token: string | null): boolean {

    if(typeof(token) !== 'string') {
      return false
    }

    const { exp } = jwtDecode<DecodedToken>(token);
    return Date.now() >= exp * 1000;
  }

  public getUserLoggued(): JwtPayload {
    return jwtDecode<JwtPayload>(this.getToken() ?? "");
  }

}
