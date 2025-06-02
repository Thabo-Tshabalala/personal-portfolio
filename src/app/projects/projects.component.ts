import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [CommonModule],
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    { name: 'School IMS', bgColor: '#7e7e7e', image: 'assets/school-ims.jpg',githubLink: 'https://github.com/Thabo-Tshabalala/School-IMS-FrontEnd' },
    { name: 'Meals App', bgColor: '#ff5757', image: 'assets/meals_app.jpg' ,githubLink: 'https://github.com/Thabo-Tshabalala/Meals_App'},
    { name: 'Florist App', bgColor: '#7dd87d', image: 'assets/florist.jpg',githubLink: 'https://github.com/Thabo-Tshabalala/Florist-Web-Application-Client-Side' },
    { name: 'Quiz App', bgColor: '#ec1c8f', image: 'assets/quiz app logo.jpg',githubLink: 'https://github.com/Thabo-Tshabalala/QuizApp' },
  ];
}
