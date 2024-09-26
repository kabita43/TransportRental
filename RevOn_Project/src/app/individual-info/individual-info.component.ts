import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-individual-info',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './individual-info.component.html',
  styleUrl: './individual-info.component.css'
})
export class IndividualInfoComponent {

}
