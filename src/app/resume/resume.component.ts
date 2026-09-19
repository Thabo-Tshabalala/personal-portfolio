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
      duration: '2025 - 2025',
    },

    {
      institution: 'Cape Peninsula University of Technology',
      degree: 'Diploma in Information Communication and Technology',
      major: 'Software Development',
      duration: '2022 - 2024',
    },

    {
      institution: 'Bongane Lebohang Secondary School',
      degree: 'National Senior Certificate (Matriculation)',
      duration: '2018 - 2020',
    },
  ];

experience = [
  {
    title: 'Software Developer',
    company: 'Pepkor NexTech',
    duration: 'January 2026 - Present',
    location: 'Cape Town, Hybrid',
    responsibilities: [
      'Migrated repositories and CI/CD pipelines for a production application used by Pepkor Properties from GitLab to Harness, adapting existing configurations to support multi-environment deployments.',
      'Maintain and enhance data-driven internal applications supporting business operations across multiple Pepkor brands.',
      'Investigate and resolve production issues by diagnosing root causes and implementing effective solutions to restore business functionality.',
      'Develop new features and system integrations, ensuring reliable data flow between internal applications and external systems.',
      'Collaborate with business analysts, financial analysts, and stakeholders to translate business requirements into reliable, maintainable software solutions.',
      'Contribute to AI initiatives through the development of AI agents using Google ADK.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Onsight Software',
    duration: 'July 2024 - December 2024 • 6 mos',
    location: 'Cape Town, Remote',
    responsibilities: [
      'Developed full-stack features for navigation, user information, and customer management in the Onsight App.',
      'Resolved a critical font sizing issue, ensuring consistent readability across devices.',
      'Contributed to cross-platform app development using Blazor Hybrid for Windows, Android, and iOS.',
      'Gained hands-on experience in debugging and troubleshooting application issues.',
      'Collaborated with other developers to deliver features.',
      'Participated in team meetings to discuss new features and project updates.',
    ],
  },
];
}
