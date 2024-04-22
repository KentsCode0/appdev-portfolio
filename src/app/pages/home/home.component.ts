import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
