import { Component, inject, OnInit } from '@angular/core';
import { ComicDto } from '../../core/models/comic.model';
import { ActivatedRoute } from '@angular/router';
import { FavoriteButtonComponent } from "../../components/favorite-button/favorite-button.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-comic-detail',
  imports: [FavoriteButtonComponent, CommonModule, NgFor],
  templateUrl: './comic-detail.component.html',
  styleUrl: './comic-detail.component.css'
})
export class ComicDetailComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute);
  protected comic?: ComicDto;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ comic }) => {
      this.comic = comic
    })
  }

  protected marcarFavorito(comic: ComicDto): void {
    this.comic = {...comic};
  }
}
