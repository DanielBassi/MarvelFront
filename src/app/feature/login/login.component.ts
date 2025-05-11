import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormValidate } from '../../core/form-validate';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends FormValidate {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected userForm: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor() {
    super()
  }

  protected async onSubmit(): Promise<void> {
    const email = this.userForm.controls["email"].getRawValue();
    const password = this.userForm.controls["password"].getRawValue();

    try {
      const result = await lastValueFrom(this.authService.login(email, password));
      this.authService.setToken(result)
      this.router.navigate(['/']);
    }
    catch (ex: any) {
      this.setErrors(this.userForm, ex);
    }
  }
}
