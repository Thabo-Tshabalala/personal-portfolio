import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // name: string = 'Thabo';
  // role: string = 'Backend Developer';
  description: string = `
    I'm dedicated to the philosophy of continuous learning, with a strong focus on backend development and creating scalable web solutions.
    My love for coding is fueled by the problem-solving nature of the field and the endless opportunities for growth and exploration. When I'm not working on code,
    I enjoy staying active at the gym, reading insightful books, and immersing myself in anime for relaxation and inspiration.
  `;
}
