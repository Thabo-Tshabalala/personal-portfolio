import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  imports: [CommonModule]
})
export class ResumeComponent {
  education = [
            {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Advanced Diploma in Information Communication and Technology',
      major: 'Software Development',
      duration: '2025 — Present'
    },
    
    {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Diploma in Information Communication and Technology',
      major: 'Software Development',
      duration: '2022 — 2024'
    },

        {
      institution: 'Bongane Lebohang Secondary School',
      degree: 'National Senior Certificate (Matriculation)',
      duration: '2018 — 2020'
    },
  ];

  experience = [
    {
      title: 'Software Developer Intern',
      company: 'Onsight Software',
      duration: 'July, 2024 — December 2024 • 6 mos',
      location: 'Cape Town, Remote',
      responsibilities: [
        'Developed full-stack features for navigation, user information, and customer management in the Onsight App.',
        'Resolved a critical font sizing issue, ensuring consistent readability on all devices.',
        'Contributed to cross-platform app development using Blazor Hybrid for Windows, Android, and iOS.',
        'Gained hands-on experience in debugging and troubleshooting application issues. ',
        'Collaborated with other developers to deliver features.',
        'Participated in team meetings to discuss new features and project updates.',
      ]
    },
  ];

}
