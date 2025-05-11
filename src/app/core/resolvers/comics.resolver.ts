import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ComicDto } from "../models/comic.model";
import { Observable } from "rxjs";
import { ComicService } from "../services/comic.service";

@Injectable({ providedIn: 'root' })
export class ComicsResolver implements Resolve<ComicDto[]> {
  
  private readonly comicService = inject(ComicService);
  
  constructor() {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComicDto[]>|Promise<ComicDto[]>|ComicDto[] {
    return this.comicService.get();
  }
}