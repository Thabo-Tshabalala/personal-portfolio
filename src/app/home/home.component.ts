import { Component } from '@angular/core';
import { ThreeBgComponent } from "../three-bg/three-bg.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router'; 


@Component({
  selector: 'app-home',
  imports: [ThreeBgComponent,CommonModule, RouterOutlet], 
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
    this.isMobileScreen = window.innerWidth <= 1024;
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }
}
