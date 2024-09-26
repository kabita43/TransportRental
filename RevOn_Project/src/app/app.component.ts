import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BusinessTypeComponent } from "./business-type/business-type.component";
import { IndividualInfoComponent } from "./individual-info/individual-info.component";
import { AddvehicleComponent } from "./addvehicle/addvehicle.component";
import { CompanyComponent } from './company/company.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { ScooterComponent } from './scooter/scooter.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { ModeComponent } from './mode/mode.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,BusinessTypeComponent, IndividualInfoComponent, AddvehicleComponent,CompanyComponent,CarInfoComponent,ScooterComponent,BicycleComponent , RouterLinkActive,ModeComponent,LoginComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RevOn_Project';
}

