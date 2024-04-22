import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
