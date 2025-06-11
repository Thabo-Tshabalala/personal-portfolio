import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-personal-bot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './personal-bot.component.html',
  styleUrls: ['./personal-bot.component.css']
})
export class PersonalBotComponent {
  userInput = '';
  messages: { text: string; from: 'user' | 'bot' }[] = [];

  constructor(private http: HttpClient) {} 

  sendMessage() {
    if (!this.userInput.trim()) return;

    const question = this.userInput;
    this.messages.push({ text: question, from: 'user' });
    this.userInput = '';

    //  this.http.post('http://localhost:8080/api/chat/ask', locally
   this.http.post('https://personal-portfolio-api-production-3ffd.up.railway.app/api/chat/ask', question, {
      responseType: 'text'
    }).subscribe({
      next: (response: string) => {
        this.messages.push({ text: response, from: 'bot' });
      },
      error: () => {
        this.messages.push({ text: '⚠️ Unable to reach the kisha backy.', from: 'bot' });
      }
    });
  }
}
