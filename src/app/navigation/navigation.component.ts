import { Component } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink,RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}