import { Component, inject, Input } from '@angular/core';
import { ComicDto } from '../../core/models/comic.model';
import { ComicService } from '../../core/services/comic.service';
import { FavoriteButtonComponent } from "../favorite-button/favorite-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comic',
  imports: [FavoriteButtonComponent, RouterLink],
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {
  @Input() comic?: ComicDto;

  private readonly comicService = inject(ComicService);

  protected getImage(): string {
    return `${this.comic?.thumbnail?.path}.${this.comic?.thumbnail?.extension}`
  }

  protected marcarFavorito(comic: ComicDto): void {
    this.comic = {...comic };
  }
}
