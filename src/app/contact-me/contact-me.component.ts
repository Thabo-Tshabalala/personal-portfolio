import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactForm } from '../models/contact-form';
import { ContactService } from '../services/contact-me-form.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ContactService],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  contactForm;
  submitted = false;
  success = false;
  errorMessage = '';
  loading = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.success = false;
    this.errorMessage = '';
    this.loading = true;
  
    if (this.contactForm.valid) {
      const formData: ContactForm = {
        fullName: this.contactForm.value.fullName!,
        email: this.contactForm.value.email!,
        subject: this.contactForm.value.subject!,
        message: this.contactForm.value.message!
      };
  
      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          this.loading = false; 
  
          if (response && response === 'Email sent successfully!') {
            this.success = true;
            this.contactForm.reset();
            this.submitted = false;
            setTimeout(() => this.success = false, 3000);
          } else {
            this.errorMessage = 'Something went wrong. Please try again.';
          }
        },
        error: () => {
          this.loading = false; 
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      });
    } else {
      this.loading = false;
    }
  }
  
}
