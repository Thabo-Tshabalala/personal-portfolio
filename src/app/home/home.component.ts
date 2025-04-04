import { Component } from '@angular/core';
import { ThreeBgComponent } from "../three-bg/three-bg.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  imports: [ThreeBgComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
