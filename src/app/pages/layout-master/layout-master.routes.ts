import { Routes } from '@angular/router';
import { LayoutMasterComponent } from './layout-master.component';
import { ComicsAvailableComponent } from '../../feature/comics-available/comics-available.component';
import { ComicsFavoriteComponent } from '../../feature/comics-favorite/comics-favorite.component';
import { ComicDetailComponent } from '../../feature/comic-detail/comic-detail.component';
import { ComicDetailResolver } from '../../core/resolvers/comic-detail.resolver';
import { FavoritesResolver } from '../../core/resolvers/favorites.resolver';
import { ComicsResolver } from '../../core/resolvers/comics.resolver';

export const routes: Routes = [
    {
        path: '',
        component: LayoutMasterComponent,
        children: [
            {
                path: '',
                component: ComicsAvailableComponent,
                resolve: {
                    comics: ComicsResolver
                }
            },
            {
                path: 'favorites',
                component: ComicsFavoriteComponent,
                resolve: {
                    favorites: FavoritesResolver
                }
            },
            {
                path: 'comic-detail/:comicId',
                component: ComicDetailComponent,
                resolve: {
                    comic: ComicDetailResolver
                }
            }
        ]
    },
];
