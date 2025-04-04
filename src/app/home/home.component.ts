import { Component } from '@angular/core';
import { ThreeBgComponent } from "../three-bg/three-bg.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-home',
  imports: [ThreeBgComponent, AboutMeComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
