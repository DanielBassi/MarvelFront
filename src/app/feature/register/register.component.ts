import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { FormValidate } from '../../core/form-validate';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends FormValidate{
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  protected userForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    identification: [''],
    password: ['']
  });

  constructor() { 
    super()
  }

  protected async onSubmit(): Promise<void> {
    const email = this.userForm.controls["email"].getRawValue();
    const name = this.userForm.controls["name"].getRawValue();
    const password = this.userForm.controls["password"].getRawValue();
    const identification = this.userForm.controls["identification"].getRawValue();

    try {
      await lastValueFrom(this.authService.register(email, identification, name, password));
      Swal.fire("Usuario creador, puedes iniciar sesión");
    }
    catch (ex: any) {
      this.setErrors(this.userForm, ex);
    }
  }
}
