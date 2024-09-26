import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModeComponent } from '../mode/mode.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ModeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
