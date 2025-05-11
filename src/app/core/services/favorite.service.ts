import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private readonly API_URL = environment.API_URL
  private readonly httpService = inject(HttpClient);

  constructor() { }

  public get(): Observable<any> {
    return this.httpService.get(`${this.API_URL}favorite`)
  }

  public add(comicId: number): Observable<any> {
    return this.httpService.post(`${this.API_URL}favorite`, {
      data: { comicId }
    })
  }

  public remove(comicId: number): Observable<any> {
    return this.httpService.delete(`${this.API_URL}favorite`, { params: { comicId }})
  }
}
