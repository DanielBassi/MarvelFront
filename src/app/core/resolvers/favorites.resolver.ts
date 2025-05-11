import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ComicDto } from "../models/comic.model";
import { Observable } from "rxjs";
import { FavoriteService } from "../services/favorite.service";

@Injectable({ providedIn: 'root' })
export class FavoritesResolver implements Resolve<ComicDto[]> {
  
  private readonly favoriteService = inject(FavoriteService);
  constructor() {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComicDto[]>|Promise<ComicDto[]>|ComicDto[] {
    return this.favoriteService.get();
  }
}