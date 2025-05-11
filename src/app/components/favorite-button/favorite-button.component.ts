import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { ComicDto } from '../../core/models/comic.model';
import { FavoriteService } from '../../core/services/favorite.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorite-button',
  imports: [CommonModule, NgIf],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.css'
})
export class FavoriteButtonComponent {

  @Input() comic?: ComicDto;
  @Output() marcarFavorito = new EventEmitter<ComicDto>();

  private readonly favoriteService = inject(FavoriteService);

  changesStatus(): void {
    if (this.comic) {
      this.marcarFavorito.emit({ ...this.comic, isFavorite: !this.comic.isFavorite });
    }
  }


  protected async add(comic?: ComicDto): Promise<void> {
    try {
      await lastValueFrom(this.favoriteService.add(comic?.id ?? 0));
      this.changesStatus();
    }
    catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error
      });
    }
  }

  protected async remove(comic?: ComicDto): Promise<void> {
    try {
      await lastValueFrom(this.favoriteService.remove(comic?.id ?? 0));
      this.changesStatus();
    }
    catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error
      });
    }
  }
}

