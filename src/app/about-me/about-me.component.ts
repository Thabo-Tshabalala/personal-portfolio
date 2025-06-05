import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutMeHeading = 'About Me';

  description: string[] = [
    `I'm dedicated to the philosophy of continuous learning, with a strong focus on backend development and building scalable web solutions.
    I approach problems with curiosity and empathy, trying to understand various needs and challenges to help build better solutions.`
  ];

  outsideCodingBody: string[] = [
    `In my free time, I geek out over new tech, hit the gym, search for good reads at the library, 
     and vibe to anything with a good beat, genre doesn’t matter.`
  ];
}
