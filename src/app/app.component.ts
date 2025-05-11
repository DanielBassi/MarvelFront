import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadComponent } from './components/load/load.component';
import { LoadingService } from './core/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LoadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  private readonly loadingService = inject(LoadingService);

  isLoading = this.loadingService.loading$;
  title = 'MarvelFront';
  
}
