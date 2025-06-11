import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactForm(formData: ContactForm) {
    return this.http.post(
      'https://personal-portfolio-api-production-3ffd.up.railway.app/api/contact',
      formData,
      { responseType: 'text' }
    );
  }
}
