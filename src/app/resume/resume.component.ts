import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  imports: [CommonModule],
})
export class ResumeComponent {
  education = [
    {
      institution: 'Cape Peninsula University of Technology',
      degree:
        'Postgraduate Diploma in Information Communication and Technology (Software Engineering)',
      major: 'Software Development',
      duration: '2026 - Present',
    },
    {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Advanced Diploma in Information Communication and Technology',
      major: 'Software Development',
      duration: '2025 — 2025',
    },

    {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Diploma in Information Communication and Technology',
      major: 'Software Development',
      duration: '2022 — 2024',
    },

    {
      institution: 'Bongane Lebohang Secondary School',
      degree: 'National Senior Certificate (Matriculation)',
      duration: '2018 — 2020',
    },
  ];

  experience = [
    {
      title: 'Software Developer',
      company: 'Pepkor NexTech',
      duration: 'January, 2026 - Present',
      location: 'Cape Town, Hybrid',
      responsibilities: [
        'Develop and maintain internal software solutions that support PEP business operations.',
        'Implement new features and resolve bugs to improve internal systems.',
        'Work closely with other developers to deliver reliable software solutions.',
        'Participate in team discussions on project progress, fixes, and feature development.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Onsight Software',
      duration: 'July, 2024 — December 2024 • 6 mos',
      location: 'Cape Town, Remote',
      responsibilities: [
        'Developed Full-Stack features for navigation, user information, and customer management in the Onsight App.',
        'Resolved a critical font sizing issue, ensuring consistent readability on all devices.',
        'Contributed to cross-platform app development using Blazor Hybrid for Windows, Android, and iOS.',
        'Gained hands-on experience in debugging and troubleshooting application issues. ',
        'Collaborated with other developers to deliver features.',
        'Participated in team meetings to discuss new features and project updates.',
      ],
    },
  ];
}
