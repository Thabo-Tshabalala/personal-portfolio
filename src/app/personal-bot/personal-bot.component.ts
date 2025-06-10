import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-bot.component.html',
  styleUrls: ['./personal-bot.component.css']
})
export class PersonalBotComponent {
  isOpen = false;
  userInput = '';
  messages: { text: string; from: 'user' | 'bot' }[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, from: 'user' });

    const response = this.getBotResponse(this.userInput);
    setTimeout(() => {
      this.messages.push({ text: response, from: 'bot' });
    }, 500);

    this.userInput = '';
  }

  getBotResponse(input: string): string {
    const lower = input.toLowerCase();
    if (lower.includes('skills')) return 'I work with Java, Dart, Angular, and more!';
    if (lower.includes('location')) return 'I’m based in Cape Town 🌍';
    return 'That sounds interesting! Tell me more.';
  }
}
