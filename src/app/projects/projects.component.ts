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
    { name: 'School IMS', bgColor: '#7e7e7e', image: 'assets/luffy.jpg' },
    { name: 'Food App', bgColor: '#ff5757', image: 'assets/' },
    { name: 'Florist App', bgColor: '#7dd87d', image: 'assets/' },
    { name: 'Roomza Connect', bgColor: '#ffffff', image: 'assets/' },
    { name: 'Quiz App', bgColor: '#ec1c8f', image: 'assets/' },
  ];
}
