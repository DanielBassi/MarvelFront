import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private readonly loading = new BehaviorSubject<boolean>(false);
  private requestCount: number = 0;

  constructor() { }

  loading$ = this.loading.asObservable();

  show() {
    this.requestCount++;
    this.loading.next(true);
  }

  hide() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.loading.next(false);
      this.requestCount = 0;
    }
  }

}
