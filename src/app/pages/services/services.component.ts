import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
