import { Component } from '@angular/core';
import { ThreeBgComponent } from "../three-bg/three-bg.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ResumeComponent } from "../resume/resume.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ThreeBgComponent, AboutMeComponent, ResumeComponent, ContactMeComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showContacts = false;
  isMobileScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth <= 767;
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }
}
