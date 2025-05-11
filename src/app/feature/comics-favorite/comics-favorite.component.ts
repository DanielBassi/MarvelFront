import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicComponent } from "../../components/comic/comic.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-comics-favorite',
  imports: [CommonModule, ComicComponent, ComicComponent, NgFor],
  templateUrl: './comics-favorite.component.html',
  styleUrl: './comics-favorite.component.css'
})
export class ComicsFavoriteComponent implements OnInit {
  
  private readonly activatedRoute = inject(ActivatedRoute);
  
  protected favorites?: any;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ favorites }) => {
      this.favorites = favorites
    })
  }

}
