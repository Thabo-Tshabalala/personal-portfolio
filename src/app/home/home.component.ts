import { Component } from '@angular/core';
import { ThreeBgComponent } from "../three-bg/three-bg.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ResumeComponent } from "../resume/resume.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
  selector: 'app-home',
  imports: [ThreeBgComponent, AboutMeComponent, ResumeComponent, ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
