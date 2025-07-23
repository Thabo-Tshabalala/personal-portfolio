import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-personal-bot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './personal-bot.component.html',
  styleUrls: ['./personal-bot.component.css']
})
export class PersonalBotComponent implements AfterViewChecked {
  userInput = '';
  messages: { text: string; from: 'user' | 'bot'; isTyping?: boolean }[] = [];
  private previousMessagesLength = 0;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private http: HttpClient) { }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const question = this.userInput;
    this.messages.push({ text: question, from: 'user' });
    this.userInput = '';

    const typingMessage: { text: string; from: 'bot'; isTyping: boolean } = { text: 'Tbot is thinking...', from: 'bot', isTyping: true };
    this.messages.push(typingMessage);

    this.http.post(
      'https://braaazzziiillll-hgbva7hdebeqbchb.brazilsouth-01.azurewebsites.net/api/chat/ask',
      question,
      { responseType: 'text' }
    ).subscribe({
      next: (response: string) => {
        this.removeTypingMessage();
        this.messages.push({ text: response, from: 'bot' });
      },
<<<<<<< HEAD
      error: (err) => {
        if (err.status === 429) {
          this.messages.push({
            text: '⚠️ Chat limit reached! Feel free to browse my site, grab my CV, or drop me an email',
            from: 'bot'
          });
        } else {
          this.messages.push({ text: '⚠️ Oops! Looks like the server’s unavailable. Please check back shortly', from: 'bot' });
        }
=======
      error: () => {
        this.removeTypingMessage();
        this.messages.push({ text: '⚠️ Unable to reach the kisha backy.', from: 'bot' });
>>>>>>> eb31319cb43871f41e2b89a67b578d6827e08523
      }
    })

  }

  removeTypingMessage() {
    const index = this.messages.findIndex(m => m.isTyping);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

  ngAfterViewChecked(): void {
    if (this.messages.length !== this.previousMessagesLength) {
      this.previousMessagesLength = this.messages.length;
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }

  scrollToBottom(): void {
    try {
      const container = this.messagesContainer.nativeElement;
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    } catch (err) {
      console.warn('Scroll failed:', err);
    }
  }
}
