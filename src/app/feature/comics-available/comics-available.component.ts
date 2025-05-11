import { Component, inject, OnInit } from '@angular/core';
import { ComicComponent } from "../../components/comic/comic.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-available',
  imports: [ComicComponent, NgFor],
  templateUrl: './comics-available.component.html',
  styleUrl: './comics-available.component.css'
})
export class ComicsAvailableComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)
  protected comics?: []

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ comics }) => {
      this.comics = comics
    })
  }
}
