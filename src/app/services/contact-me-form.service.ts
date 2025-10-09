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
      'https://braaazzziiillll-hgbva7hdebeqbchb.brazilsouth-01.azurewebsites.net/api/contact',
      formData,
      { responseType: 'text' }
    );
  }
}
