import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
