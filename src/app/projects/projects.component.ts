import { Component } from '@angular/core';
import confetti from 'canvas-confetti';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    { 
      name: 'Stack-Up', 
      highlight: 'Top 6 Winner – Ranked 3rd place in the Lisk ZAR Stablecoin Hackathon',
      bgColor: '#7e7e7eff', 
      image: 'assets/Stack.jpg',
      githubLink: 'https://github.com/Thabo-Tshabalala/stackup-frontend_' 
    },
    { name: 'School IMS', bgColor: '#7e7e7e', image: 'assets/school-ims.jpg', githubLink: 'https://github.com/Thabo-Tshabalala/School-IMS-FrontEnd' },
    { name: 'Meals App', bgColor: '#ff5757', image: 'assets/meals_app.jpg' , githubLink: 'https://github.com/Thabo-Tshabalala/Meals_App'},
    { name: 'Florist App', bgColor: '#7dd87d', image: 'assets/florist.jpg', githubLink: 'https://github.com/Thabo-Tshabalala/Florist-Web-Application-Client-Side' },
    { name: 'Quiz App', bgColor: '#ec1c8f', image: 'assets/quiz app logo.jpg', githubLink: 'https://github.com/Thabo-Tshabalala/QuizApp' },
  ];

  triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
