import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IndividualInfoComponent } from '../individual-info/individual-info.component';


@Component({
  selector: 'app-business-type',
  standalone: true,
  imports: [RouterOutlet,RouterLink,IndividualInfoComponent],
  templateUrl: './business-type.component.html',
  styleUrl: './business-type.component.css'
})
export class BusinessTypeComponent {

}
