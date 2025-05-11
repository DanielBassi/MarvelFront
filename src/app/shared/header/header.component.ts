import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { JwtPayload } from '../../core/models/jwtPayload';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  protected user?: JwtPayload;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.user = this.authService.getUserLoggued();
    console.log(this.user)
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

}
