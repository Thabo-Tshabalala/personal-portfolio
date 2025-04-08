import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-portfolio';
}
