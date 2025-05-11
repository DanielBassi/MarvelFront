import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private readonly API_URL = environment.API_URL
  private readonly httpService = inject(HttpClient);

  constructor() { }

  public get(): Observable<any> {
    return this.httpService.get(`${this.API_URL}comic`);
  }

  public detail(id: number): Observable<any> {
    return this.httpService.get(`${this.API_URL}comic/${id}`)
  }

}
