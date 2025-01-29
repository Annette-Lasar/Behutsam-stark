import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'best-newsletter',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  newsletterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  errorMessage = '';

  constructor() {
    const emailControl = this.newsletterForm.get('email');
    if (emailControl) {
      merge(emailControl.statusChanges, emailControl.valueChanges)
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.updateErrorMessage());
    }
  }

  get emailControl() {
    return this.newsletterForm.get('email') as FormControl;
  }

  updateErrorMessage() {
    if (this.emailControl.hasError('required')) {
      this.errorMessage = 'Bitte gib eine E-Mail-Adresse ein.';
    } else if (this.emailControl.hasError('email')) {
      this.errorMessage = 'Das ist keine gültige E-Mail-Adresse.';
    } else {
      this.errorMessage = '';
    }
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      const email = this.newsletterForm.value.email;
      console.log(`Newsletter-Anmeldung mit E-Mail: ${email}`);
      alert('Vielen Dank fürs Abonnieren!');
      this.newsletterForm.reset(); // Formular zurücksetzen
    }
  }
}
