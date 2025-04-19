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
   I'm dedicated to the philosophy of continuous learning, with a strong focus on backend development and building scalable web solutions. My passion for coding is driven by its problem-solving nature and the endless opportunities it offers for growth and exploration. 
   If you're looking for a motivated fresher with a solid foundation and a strong desire to grow, I'd be excited to contribute and learn as part of your team.
  `;
}
