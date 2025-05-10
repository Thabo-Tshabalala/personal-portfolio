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
        'Developed multiple fully functional UI components for the Onsight application including the main menu [ '
        + 'user details, logout, app version, and internet connectivity status],customer search functionality, customer creation, '
        + 'and customer group selection.',
        'Resolved a critical font sizing issue in the application’s UI by implementing a scalable'+
        'solution, improving readability and ensuring consistent font rendering across all  devices.',
        'Collaborated on the design and development of server applications using .NET and SQL'+
        'databases under supervision.',
        'Developed applications for Windows, Android, and iOS platforms, under guidance',
        ' Proficient in debugging ',
        'Collaborated with other developers and backend team to deliver features.',
        'Participated in team meetings to discuss new features and project updates.',
      ]
    },
  ];

}
